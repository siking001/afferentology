"use client"

import { useEffect, useState } from "react"

export function AfferentLoopAnimation() {
  const [activePhase, setActivePhase] = useState(0)
  const phases = ["input", "processing", "output"]

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-[#0a1a1a] rounded-xl p-4">
      <svg viewBox="0 0 800 400" className="w-full h-auto" style={{ minHeight: "300px" }}>
        {/* Background grid pattern */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(20, 184, 166, 0.1)" strokeWidth="0.5" />
          </pattern>

          {/* Glowing effect for active signals */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Pulse animation gradient */}
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="outputGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="800" height="400" fill="#0a1a1a" />
        <rect width="800" height="400" fill="url(#grid)" />

        {/* Spinal Cord - Central */}
        <g transform="translate(400, 50)">
          {/* Vertebrae representation */}
          <rect x="-25" y="0" width="50" height="300" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2" />

          {/* Spinal cord inner */}
          <rect x="-15" y="10" width="30" height="280" rx="6" fill="#0f172a" />

          {/* Neural activity indicators */}
          <g className={activePhase === 1 ? "opacity-100" : "opacity-30"} style={{ transition: "opacity 0.5s" }}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle
                key={i}
                cx="0"
                cy={50 + i * 40}
                r="6"
                fill={activePhase === 1 ? "#3b82f6" : "#475569"}
                filter={activePhase === 1 ? "url(#glow)" : ""}
              >
                {activePhase === 1 && (
                  <animate attributeName="r" values="4;8;4" dur="1s" repeatCount="indefinite" begin={`${i * 0.1}s`} />
                )}
              </circle>
            ))}
          </g>

          <text x="0" y="330" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">
            SPINAL CORD
          </text>
        </g>

        {/* Left Side - Sensory Input (Afferent) */}
        <g transform="translate(80, 100)">
          {/* Muscle group representation */}
          <ellipse cx="60" cy="80" rx="55" ry="70" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <ellipse cx="60" cy="80" rx="40" ry="55" fill="#0f172a" />

          {/* Muscle fibers */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="30"
              y1={40 + i * 20}
              x2="90"
              y2={40 + i * 20}
              stroke={activePhase === 0 ? "#ef4444" : "#475569"}
              strokeWidth="3"
              strokeLinecap="round"
              style={{ transition: "stroke 0.5s" }}
            />
          ))}

          {/* Sensory receptor */}
          <circle
            cx="60"
            cy="160"
            r="12"
            fill={activePhase === 0 ? "#ef4444" : "#1e293b"}
            stroke="#ef4444"
            strokeWidth="2"
            filter={activePhase === 0 ? "url(#glow)" : ""}
          >
            {activePhase === 0 && <animate attributeName="r" values="10;14;10" dur="0.8s" repeatCount="indefinite" />}
          </circle>

          <text x="60" y="200" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">
            SENSORY
          </text>
          <text x="60" y="215" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">
            RECEPTOR
          </text>

          <text x="60" y="-10" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="700">
            MUSCLE
          </text>
        </g>

        {/* Afferent Pathway (Input) */}
        <g>
          <path
            d="M 140 180 Q 200 180 250 150 Q 300 120 375 150"
            fill="none"
            stroke="#334155"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Animated signal traveling along afferent path */}
          {activePhase === 0 && (
            <circle r="8" fill="#3b82f6" filter="url(#glow)">
              <animateMotion dur="2s" repeatCount="indefinite" path="M 140 180 Q 200 180 250 150 Q 300 120 375 150" />
            </circle>
          )}

          <text x="230" y="110" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="700">
            AFFERENT INPUT
          </text>
          <text x="230" y="125" textAnchor="middle" fill="#64748b" fontSize="10">
            (Sensory Signal)
          </text>
        </g>

        {/* Right Side - Motor Output (Efferent) */}
        <g transform="translate(580, 100)">
          {/* Muscle group representation */}
          <ellipse cx="60" cy="80" rx="55" ry="70" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <ellipse cx="60" cy="80" rx="40" ry="55" fill="#0f172a" />

          {/* Muscle fibers - contracting when output phase */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1={activePhase === 2 ? "35" : "30"}
              y1={40 + i * 20}
              x2={activePhase === 2 ? "85" : "90"}
              y2={40 + i * 20}
              stroke={activePhase === 2 ? "#10b981" : "#475569"}
              strokeWidth={activePhase === 2 ? "4" : "3"}
              strokeLinecap="round"
              style={{ transition: "all 0.5s" }}
            />
          ))}

          {/* Motor end plate */}
          <rect
            x="45"
            y="145"
            width="30"
            height="20"
            rx="4"
            fill={activePhase === 2 ? "#10b981" : "#1e293b"}
            stroke="#10b981"
            strokeWidth="2"
            filter={activePhase === 2 ? "url(#glow)" : ""}
          />

          <text x="60" y="185" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">
            MOTOR
          </text>
          <text x="60" y="200" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">
            END PLATE
          </text>

          <text x="60" y="-10" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="700">
            MUSCLE
          </text>
        </g>

        {/* Efferent Pathway (Output) */}
        <g>
          <path
            d="M 425 150 Q 500 120 550 150 Q 600 180 580 180"
            fill="none"
            stroke="#334155"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Animated signal traveling along efferent path */}
          {activePhase === 2 && (
            <circle r="8" fill="#10b981" filter="url(#glow)">
              <animateMotion dur="2s" repeatCount="indefinite" path="M 425 150 Q 500 120 550 150 Q 600 180 580 180" />
            </circle>
          )}

          <text x="530" y="110" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="700">
            EFFERENT OUTPUT
          </text>
          <text x="530" y="125" textAnchor="middle" fill="#64748b" fontSize="10">
            (Motor Signal - 50Hz)
          </text>
        </g>

        {/* 50Hz Signal Indicator */}
        <g transform="translate(400, 370)">
          <rect x="-100" y="-20" width="200" height="40" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <text x="0" y="5" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="700">
            50Hz RESTING TONE
          </text>

          {/* Frequency indicator bars */}
          {[...Array(10)].map((_, i) => (
            <rect
              key={i}
              x={-80 + i * 18}
              y={-12}
              width="8"
              height={activePhase === 2 ? 10 + Math.random() * 10 : 6}
              fill={activePhase === 2 ? "#10b981" : "#475569"}
              style={{ transition: "all 0.3s" }}
            />
          ))}
        </g>

        {/* Phase indicator labels */}
        <g transform="translate(400, 20)">
          <text
            x="-250"
            y="0"
            textAnchor="middle"
            fill={activePhase === 0 ? "#3b82f6" : "#475569"}
            fontSize="11"
            fontWeight={activePhase === 0 ? "700" : "400"}
            style={{ transition: "all 0.3s" }}
          >
            1. INPUT DETECTED
          </text>
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill={activePhase === 1 ? "#8b5cf6" : "#475569"}
            fontSize="11"
            fontWeight={activePhase === 1 ? "700" : "400"}
            style={{ transition: "all 0.3s" }}
          >
            2. PROCESSING
          </text>
          <text
            x="250"
            y="0"
            textAnchor="middle"
            fill={activePhase === 2 ? "#10b981" : "#475569"}
            fontSize="11"
            fontWeight={activePhase === 2 ? "700" : "400"}
            style={{ transition: "all 0.3s" }}
          >
            3. OUTPUT SIGNAL
          </text>
        </g>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-slate-400">Irritant / Noxious Input</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-slate-400">Afferent Signal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-slate-400">Efferent Signal (50Hz)</span>
        </div>
      </div>
    </div>
  )
}
