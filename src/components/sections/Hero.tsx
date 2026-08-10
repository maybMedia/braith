"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MousePointerClick, Sparkles, Store } from "lucide-react";
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
      <div className="absolute inset-0 -z-10 hidden opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.14),transparent_30%)] md:block" />

      <div className="container-custom py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="max-w-2xl load-stagger">
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

          <div className="relative -mx-3 sm:mx-0 scroll-reveal">
            <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-blue-500/15 via-cyan-300/10 to-emerald-300/15 blur-2xl dark:from-blue-500/20 dark:via-cyan-400/10 dark:to-emerald-400/10" />

            <div className="relative ml-auto max-w-xl">
              <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-slate-900/20 dark:border-white/10 dark:bg-slate-950 dark:shadow-black/30">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-950 px-4 py-3 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 sm:flex">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                    Your new website
                  </div>
                </div>

                <div className="relative cursor-default select-none overflow-hidden bg-slate-100 p-4 dark:bg-slate-900 sm:p-5">
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-950">
                    <div className="relative min-h-82.5 overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950 px-5 py-5 text-white sm:min-h-97.5 sm:px-7 sm:py-6">
                      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/10 to-transparent" />
                      <div className="absolute -right-20 top-16 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
                      <div className="absolute -bottom-16 left-12 h-44 w-44 rounded-full bg-blue-400/25 blur-3xl" />

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-700">
                            <Store className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="text-sm font-semibold">Your Brand</span>
                        </div>
                        <div className="hidden items-center gap-5 text-[11px] font-medium uppercase text-white/70 sm:flex">
                          <span>Services</span>
                          <span>About</span>
                          <span>Contact</span>
                        </div>
                      </div>

                      <div className="relative pt-14 sm:pt-20">
                        <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur">
                          A trusted local business
                        </p>
                        <h3 className="max-w-sm text-4xl font-semibold leading-tight text-white sm:text-5xl">
                          A sharper first impression.
                        </h3>
                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-200">
                          Clear branding, call-to-action, and a site that looks the part.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20">
                          Customer Action
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </div>
                      </div>

                      <div className="absolute bottom-5 right-5 hidden w-44 rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:block">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-medium text-white/80">Enquiries</span>
                          <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-100">
                            Live
                          </span>
                        </div>
                        <div className="space-y-2">
                          <span className="block h-2 rounded-full bg-white/70" />
                          <span className="block h-2 w-4/5 rounded-full bg-white/40" />
                          <span className="block h-2 w-2/3 rounded-full bg-white/25" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 bg-white p-4 dark:bg-slate-950">
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                        <span className="block h-2 w-10 rounded-full bg-blue-500" />
                        <span className="mt-4 block h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                        <span className="block h-2 w-10 rounded-full bg-cyan-400" />
                        <span className="mt-4 block h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                        <span className="block h-2 w-10 rounded-full bg-emerald-400" />
                        <span className="mt-4 block h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/70 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-950/90">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                      <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase text-slate-500 dark:text-slate-400">
                        Ready to launch
                      </p>
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">
                        Mobile suport, fast, built to convert.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-white/70 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-950/90">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300">
                      <MousePointerClick className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase text-slate-500 dark:text-slate-400">
                        Modern Design
                      </p>
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">
                        Built around the enquiry
                      </p>
                    </div>
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
