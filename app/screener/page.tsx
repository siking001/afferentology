import type { Metadata } from "next"
import { PainSignalScreener } from "@/components/pain-signal-screener"

export const metadata: Metadata = {
  title: "Pain Signal Screener | Afferentology",
  description:
    "Discover if your nervous system is stuck in a Withdrawal Reflex. Take our free screening to identify potential hidden irritants causing your chronic pain.",
  keywords: [
    "pain screening",
    "chronic pain assessment",
    "withdrawal reflex",
    "afferentology",
    "nerve interference",
    "muscle weakness",
    "hidden irritants",
  ],
  openGraph: {
    title: "Pain Signal Screener | Afferentology",
    description: "Your pain is a signal, not the problem. Discover what your nervous system is trying to tell you.",
    url: "https://afferentology.org/screener",
  },
}

export default function ScreenerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
            Free Neurological Screening
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight text-balance">
            Your pain is a signal,
            <br />
            not the problem
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Answer 7 quick questions to discover if your nervous system might be stuck in a protective Withdrawal Reflex
            — and what you can do about it.
          </p>
        </div>

        {/* Screener Component */}
        <PainSignalScreener />
      </section>

      {/* Educational Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 text-teal-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">The Signal</h3>
              <p className="text-sm text-slate-600">
                Pain is your brain&apos;s warning system detecting hidden afferent irritants you may not even know
                exist.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">The Irritant</h3>
              <p className="text-sm text-slate-600">
                Surgical scars, dental work, old injuries — all can send corrupted signals that trigger the Withdrawal
                Reflex.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">The Solution</h3>
              <p className="text-sm text-slate-600">
                Identify and neutralize the irritant to restore your nervous system&apos;s 50Hz resting tone instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
