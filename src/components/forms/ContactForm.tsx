"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  sendContactEmail,
  type ContactFormState,
} from "@/app/contact/action";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-500/20";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn-primary w-full sm:w-auto" disabled={pending}>
      {pending ? "Sending..." : "Send Enquiry"}
    </button>
  );
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Get in touch
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Tell me about your project
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Fill out the form below and I&apos;ll get back to you about your website,
          redesign, or landing page.
        </p>
      </div>

      {state.message && (
        <div
          className={`mb-6 rounded-2xl px-4 py-3 text-sm ${
            state.success
              ? "border border-green-200 bg-green-50 text-green-800 dark:border-green-900/60 dark:bg-green-950/40 dark:text-green-200"
              : "border border-red-200 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200"
          }`}
        >
          {state.message}
        </div>
      )}

      <form ref={formRef} action={formAction} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-100"
            >
              Your name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Smith"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="business"
              className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-100"
            >
              Business name (optional)
            </label>
            <input
              id="business"
              name="business"
              type="text"
              placeholder="Smith Plumbing"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-100"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@email.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-100"
            >
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0400 000 000"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-100"
            >
              Service needed *
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={inputClasses}
            >
              <option value="">Select a service</option>
              <option value="new-website">New website</option>
              <option value="redesign">Website redesign</option>
              <option value="maintenance">Ongoing support</option>
              <option value="review">Website review</option>
              <option value="other">Other enquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-100"
          >
            Project details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell me a bit about your business, what you need, and any goals for the website."
            className={inputClasses}
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
