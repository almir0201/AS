import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendEmail } from "@/app/lib/email";
import ApprovedAppointment from "@/app/emails/ApprovedAppointment";
import DeclinedAppointment from "@/app/emails/DeclinedAppointment";
import { render } from "@react-email/render";

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
    if (deleteUser.email) {
      sendEmail({
        to: deleteUser.email,
        subject: "Termin za popravku automobila je odbijen",
        html: render(DeclinedAppointment()),
      });
    }
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
    if (user.email) {
      sendEmail({
        to: user.email,
        subject: "Termin za popravku automobila je prihvacen",
        html: render(ApprovedAppointment()),
      });
    }
  
    return NextResponse.json(user);
  }
}
