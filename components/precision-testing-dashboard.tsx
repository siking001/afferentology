"use client"

import { useState, useEffect } from "react"
import { Activity, Zap, AlertTriangle, CheckCircle2 } from "lucide-react"

export function PrecisionTestingDashboard() {
  const [signalStrength, setSignalStrength] = useState(50)
  const [muscleStatus, setMuscleStatus] = useState<"testing" | "locked" | "unlocked">("testing")
  const [frequency, setFrequency] = useState(50)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate testing cycle
      setMuscleStatus("testing")
      setSignalStrength(Math.random() * 30 + 20)
      setFrequency(Math.random() * 20 + 30)

      setTimeout(() => {
        const isLocked = Math.random() > 0.5
        setMuscleStatus(isLocked ? "locked" : "unlocked")
        setSignalStrength(isLocked ? 95 : 25)
        setFrequency(isLocked ? 50 : 28)
      }, 1500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-white">Precision Muscle Testing</h3>
          <p className="text-slate-500 text-sm">Real-time diagnostic interface</p>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            muscleStatus === "testing"
              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
              : muscleStatus === "locked"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
          }`}
        >
          {muscleStatus === "testing" ? "Testing..." : muscleStatus === "locked" ? "Locked" : "Unlocked"}
        </div>
      </div>

      {/* Main metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {/* Signal Strength */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-slate-500 text-xs uppercase tracking-wider">Signal</span>
          </div>
          <div className="text-3xl font-mono font-bold text-white">{signalStrength.toFixed(0)}%</div>
          <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                signalStrength > 70 ? "bg-emerald-500" : signalStrength > 40 ? "bg-amber-500" : "bg-red-500"
              }`}
              style={{ width: `${signalStrength}%` }}
            />
          </div>
        </div>

        {/* Frequency */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-purple-400" />
            <span className="text-slate-500 text-xs uppercase tracking-wider">Frequency</span>
          </div>
          <div className="text-3xl font-mono font-bold text-white">
            {frequency.toFixed(0)}
            <span className="text-lg text-slate-500">Hz</span>
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Target:{" "}
            <span className={frequency >= 48 && frequency <= 52 ? "text-emerald-400" : "text-amber-400"}>50Hz</span>
          </div>
        </div>

        {/* Resting Tone Status */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            {muscleStatus === "locked" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : muscleStatus === "unlocked" ? (
              <AlertTriangle className="w-4 h-4 text-red-400" />
            ) : (
              <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
            )}
            <span className="text-slate-500 text-xs uppercase tracking-wider">Tone</span>
          </div>
          <div
            className={`text-2xl font-bold ${
              muscleStatus === "locked"
                ? "text-emerald-400"
                : muscleStatus === "unlocked"
                  ? "text-red-400"
                  : "text-amber-400"
            }`}
          >
            {muscleStatus === "locked" ? "STABLE" : muscleStatus === "unlocked" ? "INHIBITED" : "TESTING"}
          </div>
        </div>

        {/* Irritant Detection */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            <span className="text-slate-500 text-xs uppercase tracking-wider">Irritant</span>
          </div>
          <div className={`text-2xl font-bold ${muscleStatus === "unlocked" ? "text-red-400" : "text-slate-600"}`}>
            {muscleStatus === "unlocked" ? "DETECTED" : "NONE"}
          </div>
        </div>
      </div>

      {/* Waveform visualization */}
      <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-500 text-xs uppercase tracking-wider">Neural Signal Waveform</span>
          <span className="text-xs font-mono text-slate-600">LIVE</span>
        </div>
        <svg className="w-full h-16" viewBox="0 0 400 60">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                stopColor={muscleStatus === "locked" ? "#10b981" : muscleStatus === "unlocked" ? "#ef4444" : "#f59e0b"}
                stopOpacity="0.5"
              />
              <stop
                offset="100%"
                stopColor={muscleStatus === "locked" ? "#10b981" : muscleStatus === "unlocked" ? "#ef4444" : "#f59e0b"}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[...Array(5)].map((_, i) => (
            <line key={i} x1="0" y1={12 * i + 6} x2="400" y2={12 * i + 6} stroke="#1e293b" strokeWidth="1" />
          ))}

          {/* Waveform path */}
          <path
            d={
              muscleStatus === "locked"
                ? "M0,30 Q10,10 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30 T220,30 T240,30 T260,30 T280,30 T300,30 T320,30 T340,30 T360,30 T380,30 T400,30"
                : muscleStatus === "unlocked"
                  ? "M0,30 Q10,45 20,30 T40,35 T60,25 T80,40 T100,30 T120,35 T140,25 T160,40 T180,30 T200,35 T220,25 T240,40 T260,30 T280,35 T300,25 T320,40 T340,30 T360,35 T380,25 T400,30"
                  : "M0,30 Q10,20 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30 T220,30 T240,30 T260,30 T280,30 T300,30 T320,30 T340,30 T360,30 T380,30 T400,30"
            }
            fill="none"
            stroke={muscleStatus === "locked" ? "#10b981" : muscleStatus === "unlocked" ? "#ef4444" : "#f59e0b"}
            strokeWidth="2"
            className="transition-all duration-500"
          >
            <animate
              attributeName="d"
              dur="1s"
              repeatCount="indefinite"
              values={
                muscleStatus === "locked"
                  ? "M0,30 Q10,15 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30 T220,30 T240,30 T260,30 T280,30 T300,30 T320,30 T340,30 T360,30 T380,30 T400,30;M0,30 Q10,45 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30 T220,30 T240,30 T260,30 T280,30 T300,30 T320,30 T340,30 T360,30 T380,30 T400,30;M0,30 Q10,15 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30 T220,30 T240,30 T260,30 T280,30 T300,30 T320,30 T340,30 T360,30 T380,30 T400,30"
                  : muscleStatus === "unlocked"
                    ? "M0,30 Q10,50 20,25 T40,40 T60,20 T80,45 T100,25 T120,40 T140,20 T160,45 T180,25 T200,40 T220,20 T240,45 T260,25 T280,40 T300,20 T320,45 T340,25 T360,40 T380,20 T400,30;M0,30 Q10,10 20,35 T40,15 T60,40 T80,20 T100,35 T120,15 T140,40 T160,20 T180,35 T200,15 T220,40 T240,20 T260,35 T280,15 T300,40 T320,20 T340,35 T360,15 T380,40 T400,30;M0,30 Q10,50 20,25 T40,40 T60,20 T80,45 T100,25 T120,40 T140,20 T160,45 T180,25 T200,40 T220,20 T240,45 T260,25 T280,40 T300,20 T320,45 T340,25 T360,40 T380,20 T400,30"
                    : "M0,30 Q10,25 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30 T220,30 T240,30 T260,30 T280,30 T300,30 T320,30 T340,30 T360,30 T380,30 T400,30;M0,30 Q10,35 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30 T220,30 T240,30 T260,30 T280,30 T300,30 T320,30 T340,30 T360,30 T380,30 T400,30;M0,30 Q10,25 20,30 T40,30 T60,30 T80,30 T100,30 T120,30 T140,30 T160,30 T180,30 T200,30 T220,30 T240,30 T260,30 T280,30 T300,30 T320,30 T340,30 T360,30 T380,30 T400,30"
              }
            />
          </path>
        </svg>
      </div>

      {/* Protocol steps */}
      <div className="grid md:grid-cols-3 gap-4">
        <div
          className={`p-4 rounded-lg border transition-all duration-300 ${
            muscleStatus === "testing" ? "bg-amber-500/10 border-amber-500/30" : "bg-slate-900/30 border-slate-800"
          }`}
        >
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Step 1</div>
          <div className="text-white font-semibold">Challenge the Muscle</div>
          <div className="text-slate-500 text-sm mt-1">Test ability to maintain 50Hz resting tone</div>
        </div>

        <div
          className={`p-4 rounded-lg border transition-all duration-300 ${
            muscleStatus === "unlocked" ? "bg-red-500/10 border-red-500/30" : "bg-slate-900/30 border-slate-800"
          }`}
        >
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Step 2</div>
          <div className="text-white font-semibold">Identify the Irritant</div>
          <div className="text-slate-500 text-sm mt-1">Locate noxious afferent input source</div>
        </div>

        <div
          className={`p-4 rounded-lg border transition-all duration-300 ${
            muscleStatus === "locked" ? "bg-emerald-500/10 border-emerald-500/30" : "bg-slate-900/30 border-slate-800"
          }`}
        >
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Step 3</div>
          <div className="text-white font-semibold">Negate & Restore</div>
          <div className="text-slate-500 text-sm mt-1">Neutralize input, restore signal</div>
        </div>
      </div>
    </div>
  )
}
