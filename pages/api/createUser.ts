// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type RequestData = {
  userId: string;
};

type Data = {
  result: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { userId }: RequestData = req.body;

    console.log("here");
    console.log(userId);

    if (!userId) {
      res.status(200).json({ result: false, error: "ID is required" });
      return;
    }

    await prisma.user.upsert({
      where: {
        id: userId,
      },
      create: {
        id: userId,
      },
      update: {},
    });

    res.status(200).json({ result: true });
  } catch (error) {
    res.status(200).json({ result: false, error: JSON.stringify(error) });
  }
}
