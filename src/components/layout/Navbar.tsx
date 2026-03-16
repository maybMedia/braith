"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
      <div className="container-custom flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          <span className="text-blue-600">B</span>
          <span className="hidden sm:block">Braith.Web</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">

          <Link
            href="/services"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            Portfolio
          </Link>

          <Link
            href="/pricing"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="btn-primary ml-2"
          >
            Get a Quote
          </Link>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="relative z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/60 text-slate-900 backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800/90 md:hidden"
        >
          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 origin-center bg-current transition-transform duration-300 ${
                open ? "translate-y-1.75 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.75 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3.5 h-0.5 w-6 origin-center bg-current transition-transform duration-300 ${
                open ? "-translate-y-1.75 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-lg shadow-slate-900/10 transition-all duration-300 ease-out dark:border-white/10 dark:bg-slate-950 dark:shadow-black/30 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="container-custom flex flex-col gap-4 p-6 text-sm font-medium text-slate-700 dark:text-slate-200">

          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="/portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </Link>

          <Link href="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link
            href="/contact"
            className="btn-primary mt-2"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>

        </nav>
      </div>
    </header>
  );
}
