import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).end();
  }
  try 
  {
    if (req.method === 'POST') {
      const { body, userId } = req.body; // Receive body and userId from the request

      if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
      }

      // Create a new post and associate it with the userId
      const post = await prisma.post.create({
        data: {
          body,
          userId, // Save the current userId
        },
      });

      return res.status(200).json(post);
    }


    if (req.method === 'GET') { 
      const { userId } = req.query;
      let posts;
      if (userId && typeof userId === 'string') 
     {
        posts = await prisma.post.findMany({
          where: {
            userId
          },
          include: {
            user: true,
            comments: true
          },
          orderBy: {
            createdAt: 'desc'
          },
        });
      } else {
        posts = await prisma.post.findMany({
          include: {
            user: true,
            comments: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      }
      return res.status(200).json(posts);
    }
  } catch (error) {
    console.log(`Error ${error}`);
    return res.status(400).end();
  }
}