"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const businessTypes = [
  "cafe",
  "trade business",
  "salon",
  "restaurant",
  "consulting firm",
  "fitness business",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = businessTypes[currentIndex];
    const isWordComplete = displayText === currentWord;
    const isWordCleared = displayText === "";

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (isWordComplete) {
            setIsDeleting(true);
            return;
          }

          setDisplayText(currentWord.slice(0, displayText.length + 1));
          return;
        }

        if (!isWordCleared) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          return;
        }

        setIsDeleting(false);
        setCurrentIndex((index) => (index + 1) % businessTypes.length);
      },
      isDeleting ? 55 : isWordComplete ? 1400 : 110,
    );

    return () => window.clearTimeout(timeout);
  }, [currentIndex, displayText, isDeleting]);

  return (
    <section className="relative overflow-hidden lg:mx-auto lg:mt-6 lg:w-[90vw] lg:max-w-560 lg:rounded-4xl lg:border lg:border-slate-200/80 lg:shadow-2xl lg:shadow-slate-900/10 dark:lg:border-slate-800/80 dark:lg:shadow-black/20">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.14),transparent_30%)]" />

      <div className="container-custom py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              Websites for local businesses
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text2xl md:text-4xl lg:text-5xl">
              Modern websites for your{" "}
              <span className="relative inline-grid min-w-[10ch] text-blue-600 dark:text-blue-400">
                <span className="invisible">restaurant</span>
                <span className="absolute inset-0 text-nowrap">
                  {displayText}
                  <span className="ml-1 inline-block h-[0.8em] w-0.5 translate-y-[-0.08em] animate-pulse bg-current align-middle" />
                </span>
              </span>{" "}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-50">
              I design and build fast, professional websites for local businesses
              that want to look more credible, get more enquiries, and stand out
              from competitors.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                View My Work
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                Mobile-friendly
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                Fast loading
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                Built to convert
              </div>
            </div>
          </div>

          <div className="relative -mx-3 sm:mx-0">
            <div className="card relative overflow-hidden border-slate-200 bg-white/90 p-0 shadow-xl backdrop-blur">
              <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-blue-200/50 blur-2xl md:block" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 hidden h-32 w-32 rounded-full bg-slate-300/40 blur-3xl md:block" />

              <div className="border-b border-slate-200 dark:bg-slate-50 px-5 py-3 rounded-2xl bg-slate-800">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="rounded-2xl bg-slate-900 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-200 dark:text-blue-300">
                    Your new website will have...
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    A cleaner design. Better first impressions. More enquiries.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-100 dark:text-slate-300">
                    A modern website helps your business look trustworthy,
                    explains your services clearly, and makes it easier for
                    customers to contact you.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-2xl font-semibold">Fast</p>
                      <p className="mt-1 text-xs text-slate-100 dark:text-slate-300">
                        Smooth experience on all devices
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-2xl font-semibold">Modern</p>
                      <p className="mt-1 text-xs text-slate-100 dark:text-slate-300">
                        Professional look that builds trust
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 p-4 sm:col-span-2">
                      <p className="text-2xl font-semibold">Clear</p>
                      <p className="mt-1 text-xs text-slate-100 dark:text-slate-300">
                        Simple messaging that drives action
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Ideal for
                    </p>
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                      Cafes, tradies, salons, consultants, gyms, restaurants,
                      and services.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Includes
                    </p>
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                      Mobile friendly design, clear calls to action and contact forms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
