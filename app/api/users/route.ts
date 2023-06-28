import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const processed = req.nextUrl.searchParams.get("processed");
  if (processed !== null) {
  const users = await prisma.user.findMany({
    where: {
      processed: processed === "true"
    }
  });
    return NextResponse.json(users);
  } else {
    return NextResponse.json([]);
  }
}