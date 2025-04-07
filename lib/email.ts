"use server";

import { z } from "zod";
import { formSchema } from "./validators";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_TO_EMAIL as string],
      subject: emailFormData.message,
      react: await EmailTemplate({
        email: emailFormData.email,
        message: emailFormData.message,
        phone: emailFormData.phone,
        name: emailFormData.name,
      }),
    });
  } catch (error) {
    throw error;
  }
};
