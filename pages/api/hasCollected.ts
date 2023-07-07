// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type RequestData = {
  itemName: string;
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
    const { itemName, userId }: RequestData = req.body;

    if (!itemName || !userId) {
      res.status(400).json({ result: false, error: "ID is required" });
      return;
    }

    const item = await prisma.item.findFirst({
      where: {
        name: itemName,
      },
    });

    if (!item) {
      console.log("Could not find item by name: ", itemName);
      res
        .status(400)
        .json({ result: false, error: "Could not find item by name" });
      return;
    }

    const hasCollected = await prisma.collect.findFirst({
      where: {
        itemId: item?.id,
        userId: userId,
      },
    });

    console.log("HasCollectedResult: ", hasCollected);

    if (!hasCollected) {
      res.status(200).json({ result: false });
      return;
    } else {
      res.status(200).json({ result: true });
    }
  } catch (error) {
    res.status(500).json({ result: false, error: JSON.stringify(error) });
  }
}
