import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, service, problem } = await req.json();
  const user = await prisma.user.create({
    data: {
      name,
      email,
      phone,
      service,
      problem,
    },
  });
  return NextResponse.json(user);
}

