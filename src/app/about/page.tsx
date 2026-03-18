import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Braith.Site",
  description:
    "Learn more about Braith, a Sydney-based web developer helping local businesses build modern websites that create trust and drive enquiries.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Braith.Site",
    description:
      "Meet Braith, a Sydney-based web developer focused on clean, modern websites for local businesses.",
    url: "/about",
  },
  twitter: {
    title: "About | Braith.Site",
    description:
      "Meet Braith, a Sydney-based web developer focused on clean, modern websites for local businesses.",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="container-custom py-20 md:py-24">
        <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-cyan-50 px-6 py-12 shadow-sm md:px-10 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="pointer-events-none absolute -left-16 top-0 hidden h-40 w-40 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-500/10 md:block" />
          <div className="pointer-events-none absolute -right-12 bottom-0 hidden h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-400/10 md:block" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                About
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl">
                I build modern websites for local businesses
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                I help local businesses improve their online presence with
                websites that look professional, feel modern, and make it easier
                for customers to get in touch.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                My focus is on creating clean, fast, mobile-friendly websites
                that build trust and support real business goals - whether that
                means more enquiries, more bookings, or a better first
                impression.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  Clear communication
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  Community-focused
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  Business-first
                </span>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Work With Me
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                What I focus on
              </h2>

              <div className="mt-6 space-y-5 text-slate-600 dark:text-slate-300">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Clear messaging
                  </h3>
                  <p className="mt-2 leading-7">
                    Helping businesses explain what they do in a way customers
                    can understand quickly.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Modern design
                  </h3>
                  <p className="mt-2 leading-7">
                    Clean, professional layouts that make a stronger first
                    impression than outdated websites.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Better customer action
                  </h3>
                  <p className="mt-2 leading-7">
                    Websites built to encourage enquiries, calls, bookings, and
                    other real business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="pointer-events-none absolute right-0 top-0 hidden h-28 w-28 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-500/10 md:block" />

              <div className="relative flex items-start justify-between gap-6">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                  About me
                </div>

                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <Image
                    src="/images/logos/braith.jpg"
                    alt="Braith profile"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="mt-6 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                Hi, I&apos;m Braith
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-300">
                I am a software engineer and web developer based in Sydney,
                Australia. Away from tech I am passionate about sports, travel,
                and good food. YNWA.
              </p>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                I pride myself on my connection to my local community and my
                understanding of the unique challenges and opportunities local
                businesses face online.
              </p>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                I can guarantee clear communication, a simple process, and a
                website that helps your business stand out and grow.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 to-white p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900">
              <div className="pointer-events-none absolute left-0 top-0 hidden h-24 w-24 rounded-full bg-cyan-100/70 blur-3xl dark:bg-cyan-400/10 md:block" />

              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  What working with me looks like
                </h3>

                <div className="mt-6 space-y-5 text-slate-600 dark:text-slate-300">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                      Simple communication
                    </p>
                    <p className="mt-2 leading-7">
                      No jargon, no confusing process, and no disappearing for
                      weeks at a time.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                      Business-first decisions
                    </p>
                    <p className="mt-2 leading-7">
                      Every section, call to action, and layout choice should
                      help your business feel more credible and easier to
                      contact.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                      Long-term value
                    </p>
                    <p className="mt-2 leading-7">
                      I aim to give you something clean, easy to build on, and
                      useful well beyond the initial launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-cyan-50 px-6 py-12 md:px-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-400/10 md:block" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
                Why local businesses need a strong website
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                For many customers, your website is their first impression of
                your business. A modern website can help you look more credible,
                explain your services clearly, and make it easier for people to
                choose you over competitors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
