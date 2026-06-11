"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { inquiryTypes } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  type: z.enum(["general", "consulting", "web", "support"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: "general" },
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        subject: `Website Inquiry — ${inquiryTypes.find((t) => t.value === data.type)?.label ?? "General"}`,
      }),
    });
    const result = await res.json();
    if (!res.ok) {
      alert(result.error || "Failed to send message");
      return;
    }
    setInquiryId(result.inquiryId);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-12 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-gold" />
        <h3 className="mt-6 text-2xl font-bold text-white">Message Sent!</h3>
        <p className="mt-2 text-slate-400">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        {inquiryId && (
          <p className="mt-4 text-sm text-slate-500">
            Reference: <span className="font-mono text-gold">{inquiryId}</span>
          </p>
        )}
        <Button className="mt-8" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass space-y-5 rounded-2xl p-8">
      <h3 className="text-xl font-semibold text-white">Send us a message</h3>

      <div>
        <label className="mb-1.5 block text-sm text-slate-400">
          What can we help with?
        </label>
        <select
          {...register("type")}
          className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-white focus:border-gold focus:outline-none"
        >
          {inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm text-slate-400">Name</label>
          <input
            {...register("name")}
            className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-white focus:border-gold focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-slate-400">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-white focus:border-gold focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-slate-400">
          Phone <span className="text-slate-600">(optional)</span>
        </label>
        <input
          {...register("phone")}
          className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-white focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-slate-400">Message</label>
        <textarea
          rows={5}
          {...register("message")}
          placeholder="Tell us about your business and what you need..."
          className="w-full resize-none rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-white placeholder:text-slate-600 focus:border-gold focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
