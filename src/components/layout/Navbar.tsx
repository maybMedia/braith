"use client";

import Link from "next/link";
import Image from "next/image";
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
          <Image src="/images/logos/braith-web-logo.png" alt="Braith.Web" width={48} height={48} />
          <span className="hidden sm:flex items-center gap-0">
            <span className="text-blue-500 dark:text-blue-300">Braith.</span>
            <span className="text-teal-400 dark:text-teal-200">Site</span>
          </span>
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
          className={`group relative z-20 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95 md:hidden ${
            open
              ? "border-blue-400/40 bg-slate-900/95 text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)] dark:border-cyan-300/30"
              : "border-slate-200/80 bg-white/80 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.10)] hover:border-blue-200 hover:shadow-[0_14px_35px_rgba(37,99,235,0.18)] dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-blue-400/20"
          }`}
        >
          <span className="pointer-events-none absolute inset-0">
            <span className="absolute inset-px rounded-[calc(1rem-1px)] bg-linear-to-br from-white via-blue-50 to-cyan-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
            <span className="absolute inset-x-2 top-0 h-px bg-linear-to-r from-transparent via-white/90 to-transparent dark:via-white/25" />
            <span
              className={`absolute -right-4 -top-4 h-12 w-12 rounded-full bg-blue-400/25 blur-2xl transition-opacity duration-300 dark:bg-blue-500/20 ${
                open ? "opacity-100" : "opacity-70 group-hover:opacity-100"
              }`}
            />
            <span
              className={`absolute -bottom-5 -left-4 h-12 w-12 rounded-full bg-cyan-300/25 blur-2xl transition-opacity duration-300 dark:bg-cyan-400/15 ${
                open ? "opacity-100" : "opacity-60 group-hover:opacity-90"
              }`}
            />
          </span>

          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 origin-center rounded-full bg-current transition-all duration-300 ${
                open ? "translate-y-1.75 rotate-45" : "group-hover:w-5"
              }`}
            />
            <span
              className={`absolute left-0 top-1.75 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "scale-x-0 opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3.5 h-0.5 origin-center rounded-full bg-current transition-all duration-300 ${
                open ? "w-6 -translate-y-1.75 -rotate-45" : "w-4 group-hover:w-5"
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
