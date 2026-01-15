"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, Activity, MapPin, AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface Question {
  id: string
  question: string
  subtext?: string
  type: "yesno" | "scale" | "number"
  options?: { value: string; label: string }[]
  riskWeight: number
}

const questions: Question[] = [
  {
    id: "pain_at_rest",
    question: "Is your problem reocurring or resistant to conventional treatment like rest and exercise?",
    subtext: "Pain that persists without movement may indicate a neurological irritation.",
    type: "yesno",
    riskWeight: 2,
  },
  {
    id: "recent_surgery",
    question: "Did you have any surgery in the 12 months before this problem started?",
    subtext: "Surgical scars can create hidden afferent irritation that persists long after healing.",
    type: "yesno",
    riskWeight: 3,
  },
  {
    id: "dental_crowns",
    question: "How many dental crowns do you have?",
    subtext: "Dental work can alter bite mechanics and create cranial nerve interference.",
    type: "number",
    options: [
      { value: "0", label: "None" },
      { value: "1-2", label: "1-2" },
      { value: "3-5", label: "3-5" },
      { value: "6+", label: "6 or more" },
    ],
    riskWeight: 2,
  },
  {
    id: "amalgam_fillings",
    question: "How many amalgam (silver/metal) fillings do you have?",
    subtext: "Metal fillings can create galvanic currents that affect the trigeminal nerve.",
    type: "number",
    options: [
      { value: "0", label: "None" },
      { value: "1-3", label: "1-3" },
      { value: "4-6", label: "4-6" },
      { value: "7+", label: "7 or more" },
    ],
    riskWeight: 2,
  },
  {
    id: "car_accident",
    question: "Have you ever had a car accident or whiplash injury?",
    subtext: "Even minor collisions can create lasting cervical receptor dysfunction.",
    type: "yesno",
    riskWeight: 3,
  },
  {
    id: "piercings",
    question: "Do you have any piercings apart from the ear lobes?",
    subtext: "Body piercings can create continuous afferent signals that affect muscle tone.",
    type: "yesno",
    riskWeight: 1,
  },
  {
    id: "strength",
    question: "Are you as strong as you think you should be for your age and condition?",
    subtext: "Unexplained weakness often indicates neurological inhibition, not muscle failure.",
    type: "yesno",
    riskWeight: 3,
  },
]

interface Answer {
  questionId: string
  value: string
  riskScore: number
}

export function PainSignalScreener() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  const handleAnswer = (value: string) => {
    let riskScore = 0

    if (currentQuestion.type === "yesno") {
      // "Yes" answers (except strength question) increase risk
      if (currentQuestion.id === "strength") {
        riskScore = value === "no" ? currentQuestion.riskWeight : 0
      } else {
        riskScore = value === "yes" ? currentQuestion.riskWeight : 0
      }
    } else if (currentQuestion.type === "number") {
      // Higher numbers increase risk
      const numericRisk: Record<string, number> = {
        "0": 0,
        "1-2": 1,
        "1-3": 1,
        "3-5": 2,
        "4-6": 2,
        "6+": 3,
        "7+": 3,
      }
      riskScore = (numericRisk[value] || 0) * (currentQuestion.riskWeight / 2)
    }

    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      value,
      riskScore,
    }

    const updatedAnswers = [...answers.filter((a) => a.questionId !== currentQuestion.id), newAnswer]
    setAnswers(updatedAnswers)

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setShowResults(true)
      }
    }, 300)
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const restart = () => {
    setCurrentStep(0)
    setAnswers([])
    setShowResults(false)
  }

  const totalRisk = answers.reduce((sum, a) => sum + a.riskScore, 0)
  const maxRisk = questions.reduce((sum, q) => sum + q.riskWeight, 0)
  const riskPercentage = Math.round((totalRisk / maxRisk) * 100)

  const getResultsAnalysis = () => {
    const triggers: string[] = []

    answers.forEach((answer) => {
      if (answer.riskScore > 0) {
        switch (answer.questionId) {
          case "pain_at_rest":
            triggers.push("resting pain patterns")
            break
          case "recent_surgery":
            triggers.push("surgical scar tissue")
            break
          case "dental_crowns":
          case "amalgam_fillings":
            triggers.push("dental interference")
            break
          case "car_accident":
            triggers.push("cervical receptor dysfunction")
            break
          case "piercings":
            triggers.push("body piercing irritation")
            break
          case "strength":
            triggers.push("unexplained muscle weakness")
            break
        }
      }
    })

    return [...new Set(triggers)]
  }

  if (showResults) {
    const triggers = getResultsAnalysis()

    return (
      <div className="w-full max-w-2xl mx-auto">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
          <CardContent className="p-8 md:p-12">
            {/* Results Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-4">
                <Activity className="w-8 h-8 text-teal-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Your Neurological Signal Analysis</h2>
              <p className="text-slate-400">
                Based on your responses, here&apos;s what your nervous system may be telling you.
              </p>
            </div>

            {/* Risk Indicator */}
            <div className="bg-slate-800/50 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-400 uppercase tracking-wider">Withdrawal Reflex Likelihood</span>
                <span className="text-2xl font-bold text-teal-400">{riskPercentage}%</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-1000"
                  style={{ width: `${riskPercentage}%` }}
                />
              </div>
            </div>

            {/* Main Explanation */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Your nervous system may be stuck in a Withdrawal Reflex
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Like walking on a nail you can&apos;t see, your brain may be detecting hidden irritants and
                    down-regulating muscle tone to protect you. This isn&apos;t a hardware failure — it&apos;s your
                    nervous system&apos;s intelligent response to corrupted sensory input.
                  </p>
                </div>
              </div>
            </div>

            {/* Identified Triggers */}
            {triggers.length > 0 && (
              <div className="mb-8">
                <h4 className="text-sm text-slate-400 uppercase tracking-wider mb-4">
                  Potential Hidden Irritants Identified
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {triggers.map((trigger, index) => (
                    <div key={index} className="flex items-center gap-3 bg-slate-800/50 rounded-lg px-4 py-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                      <span className="text-slate-200 capitalize">{trigger}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What This Means */}
            <div className="bg-teal-900/30 border border-teal-700/50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-teal-300 mb-3">What does this mean?</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Your pain isn&apos;t the problem — it&apos;s a signal. A certified Afferentologist can use Precision
                Muscle Testing to identify the exact source of the corrupted afferent input and restore your nervous
                system&apos;s 50Hz resting tone. Many patients experience immediate improvement once the
                &quot;nail&quot; is found and neutralized.
              </p>
              <p className="text-slate-400 text-xs italic">
                This screening is for educational purposes only and does not constitute a medical diagnosis.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/find-practitioner" className="flex-1">
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white h-12 text-base font-medium">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find a Practitioner Near You
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={restart}
                className="flex-1 h-12 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
              >
                Take Screening Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="border-0 shadow-xl bg-white overflow-hidden">
        {/* Progress Bar */}
        <div className="h-1.5 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <CardContent className="p-8 md:p-12">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm text-slate-500">
              Question {currentStep + 1} of {questions.length}
            </span>
            {currentStep > 0 && (
              <button
                onClick={goBack}
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 leading-tight">
              {currentQuestion.question}
            </h2>
            {currentQuestion.subtext && (
              <p className="text-slate-500 text-sm leading-relaxed">{currentQuestion.subtext}</p>
            )}
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.type === "yesno" ? (
              <>
                <button
                  onClick={() => handleAnswer("yes")}
                  className="w-full p-4 text-left rounded-xl border-2 border-slate-200 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-medium text-slate-700 group-hover:text-teal-700">Yes</span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500 transition-colors" />
                  </span>
                </button>
                <button
                  onClick={() => handleAnswer("no")}
                  className="w-full p-4 text-left rounded-xl border-2 border-slate-200 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-medium text-slate-700 group-hover:text-teal-700">No</span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500 transition-colors" />
                  </span>
                </button>
              </>
            ) : (
              currentQuestion.options?.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-4 text-left rounded-xl border-2 border-slate-200 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-medium text-slate-700 group-hover:text-teal-700">{option.label}</span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500 transition-colors" />
                  </span>
                </button>
              ))
            )}
          </div>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep ? "w-6 bg-teal-500" : index < currentStep ? "bg-teal-300" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
