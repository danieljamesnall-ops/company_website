import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  sendNotificationEmail,
  sendConfirmationEmail,
} from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  type: z
    .enum(["general", "consulting", "web", "support"])
    .optional()
    .default("general"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const inquiryId = `INQ-${Date.now().toString(36).toUpperCase()}`;

    await sendNotificationEmail({
      subject: `New Inquiry: ${data.subject} [${inquiryId}]`,
      html: `
        <h2>New Intel Global Inquiry</h2>
        <p><strong>Reference:</strong> ${inquiryId}</p>
        <p><strong>Service:</strong> ${data.type}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    await sendConfirmationEmail({
      to: data.email,
      name: data.name,
      referenceId: inquiryId,
    });

    return NextResponse.json({
      success: true,
      inquiryId,
      message: "Thank you! Our team will respond within 24 hours.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
