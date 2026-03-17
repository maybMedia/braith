import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <section className="container-custom py-12 md:py-14">
        <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 px-6 py-12 shadow-sm md:px-10 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="pointer-events-none absolute -left-16 top-0 hidden h-40 w-40 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-500/10 md:block" />
          <div className="pointer-events-none absolute -right-12 bottom-0 hidden h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-400/10 md:block" />

          <div className="relative mb-12 max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Contact
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl">
              Let&apos;s build a website that helps your business grow
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Whether you need a brand new site or want to improve an existing
              one, send through a few details and I&apos;ll get back to you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Fast response
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Clear process
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Built for local business
              </span>
            </div>
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95">
              <div className="pointer-events-none absolute right-0 top-0 hidden h-28 w-28 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-500/10 md:block" />
              <div className="relative">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900">
                <div className="pointer-events-none absolute right-0 top-0 hidden h-24 w-24 rounded-full bg-cyan-100/70 blur-3xl dark:bg-cyan-400/10 md:block" />
                <div className="relative">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Prefer an email?
                  </h2>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">
                    You can also reach out directly at:
                  </p>
                  <a
                    href="mailto:hello@yourdomain.com"
                    className="mt-3 inline-block font-medium text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    may.braith13@gmail.com
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 to-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900">
                <div className="pointer-events-none absolute left-0 top-0 hidden h-24 w-24 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-500/10 md:block" />
                <div className="relative">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    What I can help with
                  </h2>
                  <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                    <li>- New business websites</li>
                    <li>- Website redesigns</li>
                    <li>- Landing pages for leads</li>
                    <li>- Mobile-friendly upgrades</li>
                    <li>- Ongoing website support</li>
                  </ul>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-900">
                <div className="pointer-events-none absolute right-0 top-0 hidden h-24 w-24 rounded-full bg-cyan-100/70 blur-3xl dark:bg-cyan-400/10 md:block" />
                <div className="relative">
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Why work with me
                  </h2>
                  <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300">
                    <p>Fast, modern websites built to look credible and convert.</p>
                    <p>Clear communication and a simple process from start to launch.</p>
                    <p>Focused on helping local businesses stand out online.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
