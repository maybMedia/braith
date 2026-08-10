import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  Clock,
  Layers3,
  Package,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import OfferingsSwitcher from "@/components/navigation/OfferingsSwitcher";
import { addOns } from "@/data/addOns";
import { packages } from "@/data/packages";
import type { PackageIcon } from "@/data/packages";

export const metadata: Metadata = {
  title: "Packages | Braith.Site",
  description:
    "Explore website package options and add-ons for local businesses.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Packages | Braith.Site",
    description:
      "Website package options and add-ons for local businesses.",
    url: "/packages",
  },
  twitter: {
    title: "Packages | Braith.Site",
    description:
      "Website package options and add-ons for local businesses.",
  },
};

const packageIcons: Record<PackageIcon, LucideIcon> = {
  package: Package,
  "layers-3": Layers3,
  sparkles: Sparkles,
};

const highlights = [
  {
    label: "Clear scope",
    icon: BadgeCheck,
    text: "Each package will be structured so the deliverables are easy to understand before work begins.",
  },
  {
    label: "Simple process",
    icon: Clock,
    text: "The final content can outline timelines, milestones, and what clients need to provide.",
  },
  {
    label: "Built to fit",
    icon: CheckCircle2,
    text: "Package details can stay flexible enough to suit different business types and goals.",
  },
];

export default function PackagesPage() {
  return (
    <main className="page-enter bg-slate-50 dark:bg-slate-950">
      <section className="container-custom pt-20 md:pt-24">
        <OfferingsSwitcher />
      </section>

      <div className="offerings-transition-content">
      <section className="container-custom pb-20 md:pb-24">
        <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-cyan-50 px-6 py-12 shadow-sm md:px-10 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="motion-glow pointer-events-none absolute -left-16 top-0 hidden h-40 w-40 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-500/10 md:block" />
          <div className="motion-glow pointer-events-none absolute -right-12 bottom-0 hidden h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-400/10 md:block" />

          <div className="relative mx-auto max-w-3xl text-center load-stagger">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Packages
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl">
              Website packages with a clear starting point
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Choose from straightforward website packages designed around
              where your business is now, from a clean professional presence to
              a more complete site built to stand out.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Clear inclusions
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Local business focused
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Easy to compare
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 scroll-stagger lg:grid-cols-3">
          {packages.map((item) => {
            const Icon = packageIcons[item.icon];

            return (
              <article
                key={item.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/40 dark:hover:shadow-slate-950/40"
              >
                <div className="pointer-events-none absolute right-0 top-0 hidden h-28 w-28 rounded-full bg-cyan-100/70 blur-3xl transition duration-300 group-hover:bg-cyan-200/80 dark:bg-cyan-400/10 dark:group-hover:bg-cyan-400/15 md:block" />

                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
                    Package
                  </span>
                </div>

                <div className="relative mt-7">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    {item.name}
                  </h2>

                  <p className="mt-3 text-3xl font-semibold text-blue-600 dark:text-blue-300">
                    {item.price}
                  </p>

                  <p className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                    Best for: {item.bestFor}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
                    {item.details.map((detail, index) => (
                      <li key={`${item.name}-${index}`} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                          <span className="h-2 w-2 rounded-full bg-current" />
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm scroll-reveal md:p-10 dark:border-slate-800 dark:bg-slate-900">
            <div className="motion-glow pointer-events-none absolute right-0 top-0 hidden h-32 w-32 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-500/10 md:block" />

            <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                  Add-ons
                </div>
                <h2 className="mt-5 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                  Optional extras
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
                  Add extra features, setup work, or content support to shape
                  your website around what your business needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
              >
                Ask about add-ons
                <span className="ml-2">-&gt;</span>
              </Link>
            </div>

            <div className="relative mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
              {addOns.map((addOn) => (
                <div
                  key={addOn.name}
                  className="grid gap-3 bg-slate-50 px-5 py-4 transition hover:bg-blue-50 md:grid-cols-[1fr_auto] md:items-center dark:bg-slate-950 dark:hover:bg-blue-500/10"
                >
                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    {addOn.name}
                  </p>
                  <p className="font-semibold text-blue-600 dark:text-blue-300 md:text-right">
                    {addOn.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="grid gap-8 scroll-stagger lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {item.label}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 px-6 py-12 text-center shadow-sm scroll-reveal md:px-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
            <div className="motion-glow pointer-events-none absolute left-1/2 top-0 hidden h-32 w-32 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10 md:block" />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Not sure which package fits?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              If you are weighing up packages or need a custom mix of add-ons,
              I can help you choose the right starting point.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
