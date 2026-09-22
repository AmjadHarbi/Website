"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import { useState } from "react";

const defaultContact = {
  github: "https://github.com/AmjadHarbi",
  linkedin: "https://www.linkedin.com/in/amjadalmaghthawi/",
};

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

    try {
      const response = await fetch("http://localhost:8080/api/contact/send", {
        method: "POST",
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
      console.error(error);

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
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80 mb-3">
              Let&apos;s connect
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Contact</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              I&apos;m open to software engineering opportunities, collaborations, and meaningful product work.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-violet-500/15 bg-[#111827]/70 p-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]"
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
                  className="mt-2 w-full rounded-xl border border-violet-500/20 bg-[#0b1220] px-4 py-3 text-white placeholder:text-gray-500 focus:border-violet-400 focus:outline-none resize-none"
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

            <div className="space-y-5">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-violet-500/15 bg-[#111827]/70 p-5 transition hover:-translate-y-1 hover:border-violet-400/30"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{label}</p>
                        <p className="text-base font-medium text-white">{value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-violet-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
