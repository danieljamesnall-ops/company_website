type EmailPayload = {
  to: string | string[];
  subject: string;
  html: string;
};

async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.EMAIL_FROM ?? "Intel Global <onboarding@resend.dev>";

  if (!apiKey) return false;

  const recipients = Array.isArray(payload.to) ? payload.to : [payload.to];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: recipients,
        subject: payload.subject,
        html: payload.html,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function sendNotificationEmail(payload: {
  subject: string;
  html: string;
}): Promise<boolean> {
  const to = process.env.NOTIFICATION_EMAIL ?? process.env.CONTACT_EMAIL;
  if (!to) return false;
  return sendEmail({ to, ...payload });
}

export async function sendConfirmationEmail(payload: {
  to: string;
  name: string;
  referenceId: string;
}): Promise<boolean> {
  return sendEmail({
    to: payload.to,
    subject: `We received your message — ${payload.referenceId}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1e293b">
        <h2 style="color:#0a0f1c">Thank you, ${payload.name}!</h2>
        <p>We've received your inquiry and our team will get back to you within 24 business hours.</p>
        <p style="background:#f8fafc;padding:12px 16px;border-radius:8px">
          <strong>Reference:</strong> ${payload.referenceId}
        </p>
        <p style="color:#64748b;font-size:14px">— Intel Global Team</p>
      </div>
    `,
  });
}
