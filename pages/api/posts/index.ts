import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";

import prisma from "@/libs/prismadb";
import { log } from "console";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).end();
  }

  // const { currentUser } = await serverAuth(req);
   console.log(req.body);
  try 
  {
    if (req.method === 'POST') {
      //  const { currentUser } = await serverAuth(req);
      //  console.log(currentUser);
      const { body } = req.body; //content of the post console.log(req.body);
      const post = await prisma.post.create({
        data: {
          body,
          userId: '66fedefb0394994553be11d6',
        },
      });
      return res.status(200).json(post);
    }


    // if (req.method === 'GET') { 
    //   const { userId } = req.query;

    //   let posts;

    //   if (userId && typeof userId === 'string') 
    //  {
    //     posts = await prisma.post.findMany({
    //       where: {

    //         userId

    //       },
    //       include: {
    //         user: true,
    //         comments: true
    //       },
    //       orderBy: {
    //         createdAt: 'desc'
    //       },
    //     });
    //   } else {
    //     posts = await prisma.post.findMany({
    //       include: {
    //         user: true,
    //         comments: true,
    //       },
    //       orderBy: {
    //         createdAt: "desc",
    //       },
    //     });
    //   }
    //   return res.status(200).json(posts);
    // }
  } catch (error) {
    console.log(`Error ${error}`);
    return res.status(400).end();
  }
}