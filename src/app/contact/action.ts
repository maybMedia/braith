"use server";

import { Resend } from "resend";
import NewLeadNotificationEmail from "@/emails/NewLeadNotificationEmail";
import ClientAutoReplyEmail from "@/emails/ClientAutoReplyEmail";

export type ContactFormState = {
  success: boolean;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = getString(formData, "name");
  const business = getString(formData, "business");
  const email = getString(formData, "email");
  const phone = getString(formData, "phone");
  const service = getString(formData, "service");
  const message = getString(formData, "message");

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in your name, email, and project details.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: "Email is not configured yet.",
    };
  }

  if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
    return {
      success: false,
      message: "Contact email settings are incomplete.",
    };
  }

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const logoUrl = `${baseUrl}/images/logos/braith-web-logo.png`;

    const { error: sendError } = await resend.emails.send({
      from: `Braith.Site <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New website enquiry from ${name}${
        business ? ` (${business})` : ""
      }`,
      react: NewLeadNotificationEmail({
        name,
        business,
        email,
        phone,
        service,
        message,
        logoUrl,
      }),
    });

    if (sendError) {
      console.error("Lead notification send error:", sendError);
      return {
        success: false,
        message: "Something went wrong while sending your enquiry.",
      };
    }

    const { error: replyError } = await resend.emails.send({
      from: `Braith.Site <${process.env.CONTACT_FROM_EMAIL}>`,
      to: email,
      subject: "Thanks - I've received your enquiry",
      react: ClientAutoReplyEmail({
        name,
        portfolioUrl: `${baseUrl}/portfolio`,
        logoUrl,
      }),
    });

    if (replyError) {
      console.error("Auto-reply send error:", replyError);
    }

    return {
      success: true,
      message: "Thanks - your enquiry has been sent successfully.",
    };
  } catch (error) {
    console.error("Unexpected send error:", error);
    return {
      success: false,
      message: "Something went wrong while sending your enquiry.",
    };
  }
}
