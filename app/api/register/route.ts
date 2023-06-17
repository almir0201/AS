import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, phone, service, problem } = await req.json();
  const user = await prisma.user.create({
    data: {
      email,
      phone,
      service,
      problem,
    },
  });
  return NextResponse.json(user);
}

