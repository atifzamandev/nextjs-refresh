import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    await resend.emails.send({
        from: '..',
        to:'tosendemail@email.com',
        subject:'test email from next js',
        react: <WelcomeTemplate name="Atif" />
    })

    return NextResponse.json({})
    
}