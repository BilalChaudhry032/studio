"use server";

export async function submitContact(formData: FormData): Promise<{
  ok: boolean;
  message: string;
}> {
  const honeypot = String(formData.get("company_website") || "");
  if (honeypot) {
    return { ok: true, message: "Thanks — we will be in touch shortly." };
  }

  const payload = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    company: String(formData.get("company") || "").trim(),
    projectType: String(formData.get("projectType") || "").trim(),
    budget: String(formData.get("budget") || "").trim(),
    timeline: String(formData.get("timeline") || "").trim(),
    description: String(formData.get("description") || "").trim(),
  };

  if (!payload.name || !payload.email || !payload.description) {
    return { ok: false, message: "Please add your name, email, and a short description." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { ok: false, message: "That email does not look valid." };
  }

  const formspree = process.env.FORMSPREE_URL;
  if (formspree) {
    const res = await fetch(formspree, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false, message: "Could not send right now. Email us instead." };
    return { ok: true, message: "Message sent. We typically reply within 24 hours." };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "contact@agency.com";
  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Studio <onboarding@resend.dev>",
        to: [to],
        subject: `New inquiry from ${payload.name}`,
        text: Object.entries(payload)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
      }),
    });
    if (!res.ok) return { ok: false, message: "Could not send right now. Email us instead." };
    return { ok: true, message: "Message sent. We typically reply within 24 hours." };
  }

  console.info("Contact inquiry (no email provider configured)", payload);
  return {
    ok: true,
    message:
      "Received. Email delivery is in demo mode until RESEND_API_KEY or FORMSPREE_URL is set.",
  };
}
