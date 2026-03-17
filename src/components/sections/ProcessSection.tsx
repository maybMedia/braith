"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { steps } from "@/data/steps";

export default function ProcessSection() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="container-custom py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen((open) => !open)}
            className="flex w-full cursor-pointer flex-col items-start gap-6 text-left md:flex-row md:items-center md:justify-between"
          >
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                Process
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
                A simple process from idea to launch
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I keep the process straightforward so local businesses can get a
                professional website without the confusion, delays, or technical
                overwhelm.
              </p>
            </div>

            <div
              className={`flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium transition dark:border-slate-800 dark:bg-slate-950 ${
                isOpen
                  ? "text-blue-600 dark:text-blue-300"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              View steps
              <ChevronDown
                className={`h-4 w-4 transition duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          <div
            id={panelId}
            className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "mt-10 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500/40 dark:hover:shadow-slate-950/40"
                  >
                    <div className="text-sm font-semibold tracking-[0.2em] text-blue-600">
                      {step.number}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
