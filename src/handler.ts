import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const handler = async () => {
  const res = await prisma.message.findMany();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      data: res,
    }),
  };
};
