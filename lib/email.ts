const RESEND_ENDPOINT = "https://api.resend.com/emails";

type SendEmailInput = {
  subject: string;
  html: string;
  replyTo?: string;
};

type SendEmailResult = { ok: true } | { ok: false; reason: "not-configured" | "send-failed" };

export async function sendEmail({ subject, html, replyTo }: SendEmailInput): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return { ok: false, reason: "not-configured" };
  }

  const from = process.env.NEA_CONTACT_FROM || "Néa Digital <onboarding@resend.dev>";
  const to = process.env.NEA_CONTACT_TO || "contact.neadigital@gmail.com";

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {})
      })
    });

    if (!response.ok) {
      console.error("sendEmail: Resend a répondu avec une erreur", response.status, await response.text());
      return { ok: false, reason: "send-failed" };
    }

    return { ok: true };
  } catch (error) {
    console.error("sendEmail: échec de l'envoi", error);
    return { ok: false, reason: "send-failed" };
  }
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
