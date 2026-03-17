import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="container-custom py-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-blue-50 px-6 py-14 shadow-xl md:px-12 md:py-16 dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950 dark:shadow-2xl">
          <div className="pointer-events-none absolute -left-10 top-0 hidden h-40 w-40 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20 md:block" />
          <div className="pointer-events-none absolute -right-10 bottom-0 hidden h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl md:block" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-200">
              Ready to upgrade your online presence?
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Get a website that makes your business look professional and brings in more enquiries
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Whether you need a brand new website or a redesign of your current one,
              I can help you create a fast, modern site that builds trust and makes it
              easier for customers to contact you.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                Get a Free Quote
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
              >
                View My Work
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
              <span>Fast turnaround</span>
              <span className="hidden sm:inline">•</span>
              <span>Mobile-friendly design</span>
              <span className="hidden sm:inline">•</span>
              <span>Built for local businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
