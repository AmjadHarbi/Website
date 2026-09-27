"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import { useState } from "react";

const defaultContact = {
  github: "https://github.com/AmjadHarbi",
  linkedin: "https://www.linkedin.com/in/amjadalmaghthawi/",
};

const CONTACT_API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    if (!CONTACT_API_BASE) {
      setStatus({
        type: "error",
        message: "Contact service is not configured yet. Please try again later.",
      });
      setIsSubmitting(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch(`${CONTACT_API_BASE}/api/contact/send`, {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const serverMessage = await response.text().catch(() => "");
        const safeMessage = serverMessage && serverMessage.length < 200 ? serverMessage : "Failed to send your message. Please try again later.";
        throw new Error(safeMessage || "Failed to send your message. Please try again later.");
      }

      setStatus({ type: "success", message: "Your message has been sent successfully." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        setStatus({
          type: "error",
          message: "Request timed out. Please try again.",
        });
        return;
      }

      const message =
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again later.";

      setStatus({
        type: "error",
        message: message.includes("Failed to send your message")
          ? message
          : "Failed to send your message. Please try again later.",
      });
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const socials = [
    {
      icon: Code2,
      label: "GitHub",
      value: "github.com/AmjadHarbi",
      href: defaultContact.github,
    },
    {
      icon: BriefcaseBusiness,
      label: "LinkedIn",
      value: "linkedin.com/in/amjadalmaghthawi",
      href: defaultContact.linkedin,
    },
  ];

  return (
    <FadeInSection>
      <section id="contact" className="px-3 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl pr-1 sm:pr-0">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-violet-300/80 sm:text-sm">
              Let&apos;s connect
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
              Contact
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
              I&apos;m open to software engineering opportunities, collaborations, and meaningful product work.
            </p>
          </div>

          <div className="grid min-w-0 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              onSubmit={handleSubmit}
              className="w-full min-w-0 rounded-3xl border border-violet-500/15 bg-[#111827]/70 p-4 shadow-[0_0_30px_rgba(168,85,247,0.05)] sm:p-6"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm text-gray-300">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-violet-500/20 bg-[#0b1220] px-4 py-3 text-white placeholder:text-gray-500 focus:border-violet-400 focus:outline-none"
                  />
                </label>

                <label className="block text-sm text-gray-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="mt-2 w-full rounded-xl border border-violet-500/20 bg-[#0b1220] px-4 py-3 text-white placeholder:text-gray-500 focus:border-violet-400 focus:outline-none"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm text-gray-300">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, opportunity, or collaboration."
                  className="mt-2 w-full resize-none rounded-xl border border-violet-500/20 bg-[#0b1220] px-4 py-3 text-white placeholder:text-gray-500 focus:border-violet-400 focus:outline-none"
                />
              </label>

              {status && (
                <p
                  className={`mt-4 text-sm ${
                    status.type === "success" ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>

            <div className="min-w-0 space-y-5 pr-0 sm:pr-1">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block w-full min-w-0 rounded-2xl border border-violet-500/15 bg-[#111827]/70 p-4 transition hover:-translate-y-1 hover:border-violet-400/30 sm:p-5"
                >
                  <div className="flex items-center justify-between gap-2 sm:gap-3">
                    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-200 sm:h-11 sm:w-11">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs text-gray-400 sm:text-sm">{label}</p>
                        <p className="truncate text-sm font-medium text-white sm:text-base">{value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-violet-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
