import Link from "next/link";
import {
  type LucideIcon,
  HeartHandshake,
  RefreshCw,
  SearchCode,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import { services } from "@/data/services";
import type { ServiceIcon } from "@/data/services";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  "heart-handshake": HeartHandshake,
  "utensils-crossed": UtensilsCrossed,
  "refresh-cw": RefreshCw,
  wrench: Wrench,
  "search-code": SearchCode,
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <section className="container-custom py-20 md:py-24">
        <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 px-6 py-12 shadow-sm md:px-10 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-500/10" />
          <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-400/10" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Services
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl">
              Website services for local businesses
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              I build modern websites that help businesses look more
              professional, stand out from competitors, and make it easier for
              customers to get in touch.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Clean design
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Mobile-first
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Built for enquiries
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:w-[calc(50%-1rem)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/40 dark:hover:shadow-slate-950/40"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-100/70 blur-3xl transition duration-300 group-hover:bg-blue-200/80 dark:bg-blue-500/10 dark:group-hover:bg-blue-400/15" />
              <div className="relative flex items-start justify-between gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm dark:bg-blue-500/10 dark:text-blue-300">
                  {(() => {
                    const Icon = serviceIcons[service.icon];
                    return <Icon className="h-6 w-6" strokeWidth={2.1} />;
                  })()}
                </div>

                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
                  Service
                </span>
              </div>

              <div className="relative">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Tailored for local businesses
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-200"
                >
                  Enquire now
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 px-6 py-12 text-center shadow-sm md:px-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
            <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10" />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Need something custom?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Every business is different. If you need something outside these
              standard services, I can put together a tailored solution.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
