// pages/api/comments.ts
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests to this endpoint
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    // Extract comment body and user ID from request body
    const { body, userId } = req.body;
    const { postId } = req.query;

    // Validate post ID
    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid ID");
    }

    // Create a new comment in the database
    const comment = await prisma.comment.create({
      data: {
        body,
        userId,
        postId,
      },
    });

    // Notify the post author about the new comment
    try {
      const post = await prisma.post.findUnique({
        where: { id: postId },
      });

      if (post?.userId) {
        await prisma.notification.create({
          data: {
            body: "Someone replied to your tweet!",
            userId: post.userId,
          },
        });

        await prisma.user.update({
          where: { id: post.userId },
          data: { hasNotification: true },
        });
      }
    } catch (error) {
      console.log(error);
    }

    // Return the new comment to the client
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}