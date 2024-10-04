//pages/api/comments.ts
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
    // Get the current user ID and the comment body from the request body
    const { currentId, body } = req.body;

    // Get the post ID from the request query
    const { postId } = req.query;

    // Check if the post ID is valid
    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid ID");
    }

    // Create a new comment in the database
    const comment = await prisma.comment.create({
      data: {
        // Set the comment body
        body,
        // Associate the comment with the current user
        userId: currentId,
        // Associate the comment with the post it belongs to
        postId,
      },
    });

    // Notify the post author about the new comment
    try {
      // Find the post in the database
      const post = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });

      // If the post author exists, create a notification in the database
      if (post?.userId) {
        await prisma.notification.create({
          data: {
            // The notification body
            body: "Someone replied your tweet!",
            // Associate the notification with the post author
            userId: post.userId,
          },
        });

        // Update the post author to have a notification
        await prisma.user.update({
          where: {
            id: post.userId,
          },
          data: {
            hasNotification: true,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }

    // Return the new comment to the client
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    // Return a 400 status if there was an error
    return res.status(400).end();
  }
}
