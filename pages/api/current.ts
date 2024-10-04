import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";

//api/current.ts
export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    if (req.method !== 'GET') {
    return res.status(405).end();
    }
    try{
        const { currentUser } = await serverAuth(req);
        
        // console.log(`This is the current user:`, currentUser); // client log for testing

        // Send the current user object as a response
        return res.status(200).json(currentUser);

    }catch(error){  
        console.error(error);
        return res.status(500).end();
    }
    
}