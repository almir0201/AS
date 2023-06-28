import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(req: Request) {
  const { id, processed } = await req.json();
  console.log(id, processed)
  const user = await prisma.user.update({
    where: {
      id
    },
    data: { 
      processed
    }
  })
  return NextResponse.json(user);
}
