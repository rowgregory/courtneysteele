import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="w-full bg-black min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <p
          className="text-[10px] tracking-[0.3em] uppercase font-mono mb-4"
          style={{ color: "rgba(201,162,39,0.5)" }}
        >
          Legal
        </p>
        <h1 className="font-merriweather font-bold text-3xl text-white mb-2">
          Privacy Policy
        </h1>
        <p
          className="text-xs font-mono mb-12"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Last updated {new Date().getFullYear()}
        </p>

        <div
          className="space-y-8 text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <div>
            <h2
              className="text-xs tracking-[0.2em] uppercase font-mono font-bold mb-3"
              style={{ color: "rgba(201,162,39,0.7)" }}
            >
              What We Collect
            </h2>
            <p>
              Nothing. This site does not collect, store, or process any
              personal data. There are no forms, no accounts, no cookies, and no
              tracking of any kind.
            </p>
          </div>

          <div>
            <h2
              className="text-xs tracking-[0.2em] uppercase font-mono font-bold mb-3"
              style={{ color: "rgba(201,162,39,0.7)" }}
            >
              Third-Party Platforms
            </h2>
            <p>
              This site links to external platforms including OnlyFans and
              Instagram. Those platforms operate independently and have their
              own privacy policies. We have no visibility into or control over
              data collected by those services once you navigate to them.
            </p>
          </div>

          <div>
            <h2
              className="text-xs tracking-[0.2em] uppercase font-mono font-bold mb-3"
              style={{ color: "rgba(201,162,39,0.7)" }}
            >
              Hosting
            </h2>
            <p>
              This site is hosted on Vercel. Vercel may collect basic server
              logs (such as IP addresses) as part of standard infrastructure
              operation. This data is not accessible to us and is governed by{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                style={{ color: "rgba(201,162,39,0.6)" }}
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2
              className="text-xs tracking-[0.2em] uppercase font-mono font-bold mb-3"
              style={{ color: "rgba(201,162,39,0.7)" }}
            >
              Contact
            </h2>
            <p>
              Questions? Reach out via OnlyFans or Instagram direct message.
            </p>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex items-center gap-6"
          style={{ borderTop: "1px solid rgba(201,162,39,0.1)" }}
        >
          <Link
            href="/"
            className="text-xs font-mono transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            ← Back Home
          </Link>
          <Link
            href="/terms"
            className="text-xs font-mono transition-opacity hover:opacity-70"
            style={{ color: "rgba(201,162,39,0.5)" }}
          >
            Terms of Use →
          </Link>
        </div>
      </div>
    </main>
  );
}
