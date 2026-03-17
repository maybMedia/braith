import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function PortfolioPreview() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950">
      <div className="container-custom py-24">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            Portfolio
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-4xl">
            Recent projects
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Examples of modern, clean websites designed to help businesses stand
            out and get more customers.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex h-full w-full max-w-md flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.35rem)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/40 dark:hover:shadow-slate-950/40"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-auto pt-3">
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-blue-600 transition group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-200"
                  >
                    View project
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link href="/portfolio" className="btn-primary">
            View Full Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}
