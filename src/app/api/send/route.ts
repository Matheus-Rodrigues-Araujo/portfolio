import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "../../../../components/email-template";
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);
const resend_to = process.env.RESEND_TO;

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: resend_to,
      subject: "Let's talk!",
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, {status: 500});
  }
}
