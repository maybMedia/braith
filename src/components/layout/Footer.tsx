import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 dark:bg-slate-950 dark:text-slate-300">
      <div className="container-custom py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Braith.Web
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Modern websites for local businesses. Built to look professional,
              load fast, and bring in more customers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-blue-600 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-blue-600 dark:hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="transition hover:text-blue-600 dark:hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="transition hover:text-blue-600 dark:hover:text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-blue-600 dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-blue-600 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Get started
            </h4>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Ready to upgrade your website?
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 md:flex-row">
          <p>(c) {new Date().getFullYear()} Braith.Web All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
