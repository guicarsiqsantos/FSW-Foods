"use server";

import { db } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createOrder = async (data: Prisma.OrderCreateInput) => {
  return db.order.create({ data });
  revalidatePath("/my-orders");
};
