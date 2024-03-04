import { Resend } from "resend";
import { ReactElement } from "react";
import { EmailTemplate } from "../../../../components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { FormSchema } from "../../../../formSchema";
const resend = new Resend(process.env.RESEND_API_KEY);
const resend_to = String(process.env.RESEND_TO);

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = FormSchema.parse(await req.json())
    // const body = await req.json()
    // const { name, email, message } = body;
    const { name, email, message } = formData;
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: resend_to,
      subject: "I visited your portfolio website!",
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
      }) as ReactElement,
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
 