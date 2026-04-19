import Link from "next/link";

export default function TermsPage() {
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
          Terms of Use
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
              Who This Site Is For
            </h2>
            <p>
              This website is intended for adults aged 18 and older. By
              accessing this site you confirm that you are at least 18 years of
              age.
            </p>
          </div>

          <div>
            <h2
              className="text-xs tracking-[0.2em] uppercase font-mono font-bold mb-3"
              style={{ color: "rgba(201,162,39,0.7)" }}
            >
              Content Ownership
            </h2>
            <p>
              All photos, text, branding, and creative content on this site are
              the exclusive property of Courtney Steele. You may not copy,
              reproduce, screenshot, redistribute, or use any content from this
              site without explicit written permission.
            </p>
          </div>

          <div>
            <h2
              className="text-xs tracking-[0.2em] uppercase font-mono font-bold mb-3"
              style={{ color: "rgba(201,162,39,0.7)" }}
            >
              External Links
            </h2>
            <p>
              This site contains links to third-party platforms including
              OnlyFans and Instagram. Once you leave this site, you are subject
              to those platforms&apos; own terms and conditions. We are not
              responsible for any content, purchases, or interactions that occur
              on external platforms.
            </p>
          </div>

          <div>
            <h2
              className="text-xs tracking-[0.2em] uppercase font-mono font-bold mb-3"
              style={{ color: "rgba(201,162,39,0.7)" }}
            >
              No Warranties
            </h2>
            <p>
              This site is provided as-is. We make no guarantees regarding
              availability, accuracy, or continuity of service.
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
            href="/privacy-policy"
            className="text-xs font-mono transition-opacity hover:opacity-70"
            style={{ color: "rgba(201,162,39,0.5)" }}
          >
            Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
