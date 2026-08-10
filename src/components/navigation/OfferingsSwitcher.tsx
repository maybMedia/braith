"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const options = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
];

export default function OfferingsSwitcher() {
  const pathname = usePathname();
  const activeIndex = pathname.startsWith("/packages") ? 1 : 0;

  return (
    <div className="mx-auto mb-8 flex w-full max-w-md rounded-2xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="relative grid w-full grid-cols-2">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/2 rounded-xl bg-blue-600 shadow-sm transition-transform duration-300 ease-out dark:bg-blue-500"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />

        {options.map((option, index) => {
          const isActive = index === activeIndex;

          return (
            <Link
              key={option.href}
              href={option.href}
              data-offerings-switcher="true"
              className={`relative z-10 inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold transition-colors ${
                isActive
                  ? "text-white"
                  : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {option.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
