import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="container-custom py-20 md:py-24">
        <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-cyan-50 px-6 py-12 shadow-sm md:px-10 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-500/10" />
          <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-400/10" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Portfolio
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl">
              My Projects
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              A selection of past clients and sample projects displaying the kind
              of modern, clean websites I can create for local businesses.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Fast and modern
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Built for trust
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Designed for conversion
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.35rem)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/40 dark:hover:shadow-slate-950/40"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-100/70 blur-3xl transition duration-300 group-hover:bg-blue-200/80 dark:bg-blue-500/10 dark:group-hover:bg-blue-400/15" />

              <div className="relative h-56 w-full bg-slate-200 dark:bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative flex flex-1 flex-col p-6">
                <div className="inline-flex items-center self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
                  {project.tag}
                </div>

                <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                {project.isAnonymised ? (
                  <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    Some identifying details of this project have been changed
                    for privacy.
                  </p>
                ) : null}

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Crafted for real-world results
                  </span>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-200"
                  >
                    View project
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
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-cyan-50 px-6 py-12 text-center shadow-sm md:px-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
            <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-400/10" />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
              Want something like this for your business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              I can create a website tailored to your business, your services,
              and the kind of customers you want to attract.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
