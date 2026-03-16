import Link from "next/link";
import {
  type LucideIcon,
  HeartHandshake,
  RefreshCw,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import { services, type ServiceIcon } from "@/data/services";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  "heart-handshake": HeartHandshake,
  "utensils-crossed": UtensilsCrossed,
  "refresh-cw": RefreshCw,
  wrench: Wrench,
};

export default function ServicesPreview() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-360 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            Services
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
            Website services built for local businesses
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Whether you need a brand new website, a redesign, or a page focused
            on getting more enquiries, I build websites that are clean,
            responsive, and designed to support business growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/40 dark:hover:shadow-slate-950/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                {(() => {
                  const Icon = serviceIcons[service.icon];
                  return <Icon className="h-5 w-5" strokeWidth={2.1} />;
                })()}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-blue-600 transition group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-200"
                >
                  Learn more
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
