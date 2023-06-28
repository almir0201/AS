import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(req: Request) {
  const { id, processed } = await req.json();

  if (processed === null || id === null) {
    return NextResponse.json({});
  }

  if(!processed) {
    const deleteUser = await prisma.user.delete({
      where: {
        id
      },
    })
    return NextResponse.json(deleteUser);
  } else {
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
}
