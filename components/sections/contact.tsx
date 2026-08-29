"use client";

import { useState } from "react";
import { budgets, contact, projectTypes, timelines } from "@/lib/copy";
import { submitContact } from "@/app/actions/contact";

const calendly =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(formData: FormData) {
    setStatus("sending");
    const result = await submitContact(formData);
    if (result.ok) {
      setStatus("ok");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  return (
    <section id="contact" data-canvas-stage="shipped" className="px-5 py-24 lg:px-0">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">{contact.kicker}</p>
      <h2 className="mt-4 font-display text-3xl md:text-5xl">{contact.headline}</h2>
      <p className="mt-4 max-w-xl text-muted">{contact.body}</p>

      <div className="mt-10 grid gap-10">
        <div className="text-sm">
          <p>
            Email{" "}
            <a className="text-accent" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <p className="mt-1">Phone {contact.phone}</p>
          <p className="mt-1">{contact.location}</p>
          <a
            href={calendly}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink"
          >
            Book a Call on Calendly
          </a>
          <p className="mt-2 text-xs text-muted">
            Calendar shows times in your local timezone. Replace the URL in env when ready.
          </p>
        </div>

        {calendly !== "https://calendly.com" ? (
          <iframe
            title="Calendly"
            src={`${calendly}?hide_gdpr_banner=1`}
            className="h-[620px] w-full rounded-2xl border border-white/10"
          />
        ) : null}

        <form action={onSubmit} className="space-y-4">
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Company / project name" name="company" />
          <Select label="Project type" name="projectType" options={projectTypes} />
          <Select label="Budget range" name="budget" options={budgets} />
          <Select label="Timeline" name="timeline" options={timelines} />
          <label className="block text-sm">
            Project description
            <textarea
              name="description"
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-paper outline-none ring-accent focus:ring-1"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {message ? (
            <p className={`text-sm ${status === "error" ? "text-red-300" : "text-accent"}`}>
              {message}
            </p>
          ) : (
            <p className="text-xs text-muted">We respect your privacy. Your information is secure.</p>
          )}
        </form>
      </div>

      <ol className="mt-16 grid gap-6 sm:grid-cols-2">
        {contact.steps.map((s, i) => (
          <li key={s.title}>
            <p className="font-mono text-xs text-accent">0{i + 1}</p>
            <h3 className="mt-1 font-display text-lg">{s.title}</h3>
            <p className="mt-1 text-sm text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-paper outline-none ring-accent focus:ring-1"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block text-sm">
      {label}
      <select
        name={name}
        className="mt-1 w-full rounded-xl border border-white/15 bg-ink px-3 py-2 text-paper outline-none ring-accent focus:ring-1"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
