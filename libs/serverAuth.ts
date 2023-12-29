import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from '@/libs/prismadb';
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res:NextApiResponse) => {
    // const session = await getSession({req});
    const session = await getServerSession(req, res, authOptions)
    // console.log(session);
    
    //no session, walau udah ada
    //bisa juga karena dari mongodb-nya
    if (!session?.user?.email) {
        throw new Error('Tidak ada session, belum signed in');
    }
    
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email 
        }
    });

    if (!currentUser) {
        throw new Error ('User tidak ditemukan!');
    }

    return {currentUser}
}

export default serverAuth;