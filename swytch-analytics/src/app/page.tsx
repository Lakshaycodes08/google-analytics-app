"use client"
import { useRef, useEffect } from "react"
import Link from "next/link";
import LogoLoop from "@/components/ui/LogoLoop";
import type { LogoItem } from "@/components/ui/LogoLoop";
import { Logo } from "@/components/ui/Logo";
import {
  BarChart2, Bell, Shield, Zap,
  ActivitySquare, Mail, Settings2, ArrowRight, ChevronDown,
  Twitter, Linkedin, Github
} from "lucide-react";
import Button from "@/components/ui/Button";
import BlurText from "@/components/ui/BlurText";
import { SwytchCodeLogo } from "@/components/ui/SwytchCodeLogo";
const techLogos: LogoItem[] = [
  {
    node: (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E0D8] text-[#1A1814] text-sm font-medium shadow-sm">
        <svg width="16" height="16" viewBox="0 0 128 128" fill="none"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z" fill="#000" /><path d="M107 99.3L65.6 38H48v51.8h13.8V57.5l36.5 54.4c2.9-1.9 5.6-4 8.1-6.4l.6-6.2zM80 38h14v52H80z" fill="#fff" /></svg>
        Next.js
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E0D8] text-[#3178C6] text-sm font-medium shadow-sm">
        <svg width="16" height="16" viewBox="0 0 128 128"><path fill="#3178C6" d="M0 64v64h128V0H0z" /><path fill="#fff" d="M57.2 82.6V90H36.7V38h13.8v44.6h6.7zm14.4 7.4c-2.4 0-4.5-.4-6.4-1.3l2.2-10.3c1.3.7 2.7 1 4.1 1 2.4 0 3.5-1.5 3.5-4.5V38h13.8v37.3c0 9.6-4.8 14.7-17.2 14.7z" /></svg>
        TypeScript
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E0D8] text-[#F7A800] text-sm font-medium shadow-sm">
        <svg width="16" height="16" viewBox="0 0 32 32"><path fill="#FFA000" d="M16 3L1 9.5V16c0 8.3 6.4 16 15 17.4C24.6 32 31 24.3 31 16V9.5L16 3z" /><path fill="#FFCA28" d="M16 3v26.4C24.6 28 31 20.3 31 12V9.5L16 3z" /></svg>
        Firebase
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E0D8] text-[#00758F] text-sm font-medium shadow-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
        MySQL
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E0D8] text-[#1A1814] text-sm font-medium shadow-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
        Fastify
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D0DCF0] border border-[#B0C4E8] text-[#1B3A6B] text-sm font-medium shadow-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
        Real-Time Analytics
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D0DCF0] border border-[#B0C4E8] text-[#1B3A6B] text-sm font-medium shadow-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
        Email Alerts
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D0DCF0] border border-[#B0C4E8] text-[#1B3A6B] text-sm font-medium shadow-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
        Google Auth
      </span>
    ),
  },
  {
    node: <SwytchCodeLogo iconSize="h-5" textSize="text-sm" className="px-4 py-2 rounded-full bg-[#EDE8E0] border border-[#D5CFC6]" />
  },
  {
    node: (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDE8E0] border border-[#D5CFC6] text-[#8C6A45] text-sm font-medium shadow-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
        MCP Server
      </span>
    ),
  },
];
const features = [
  { icon: Shield, title: "Secure Authentication", desc: "Sign in with Google via Firebase — enterprise-grade security without the complexity." },
  { icon: ActivitySquare, title: "Real-Time Dashboard", desc: "Visualize your analytics with beautiful charts, metrics, and customizable views." },
  { icon: Mail, title: "Smart Email Alerts", desc: "Receive daily, weekly, or monthly analytics digests straight to your inbox." },
  { icon: Settings2, title: "Customizable Settings", desc: "Fine-tune your dashboard, manage GA properties, and control notification preferences." },
];

const steps = [
  { number: "01", title: "Sign In", desc: "Authenticate securely with your Google account via Firebase." },
  { number: "02", title: "Add Your GA Key", desc: "Enter your Google Analytics Measurement ID to connect your property." },
  { number: "03", title: "View & Monitor", desc: "Explore your dashboard and set up automated email alerts." },
];

function StepsCard() {
  const bodyRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const lineRef = useRef<SVGLineElement>(null)
  const d1Ref = useRef<HTMLDivElement>(null)
  const d2Ref = useRef<HTMLDivElement>(null)
  const d3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!bodyRef.current || !svgRef.current || !lineRef.current || !d1Ref.current || !d3Ref.current) return

      const bodyTop = bodyRef.current.getBoundingClientRect().top
      const y1 = d1Ref.current.getBoundingClientRect().top - bodyTop + 16
      const y2 = d3Ref.current.getBoundingClientRect().top - bodyTop + 16
      const totalLen = y2 - y1

      svgRef.current.setAttribute("height", String(y2 + 16))
      svgRef.current.setAttribute("viewBox", `0 0 2 ${y2 + 16}`)
      svgRef.current.style.top = `${y1}px`

      lineRef.current.setAttribute("y1", "0")
      lineRef.current.setAttribute("y2", String(totalLen))
      lineRef.current.setAttribute("stroke-dasharray", String(totalLen))
      lineRef.current.setAttribute("stroke-dashoffset", String(totalLen))

      const duration = 1400
      let start: number | null = null

      function step(ts: number) {
        if (!start) start = ts
        const elapsed = ts - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        lineRef.current!.setAttribute("stroke-dashoffset", String(totalLen * (1 - eased)))
        if (progress < 1) requestAnimationFrame(step)
      }

      requestAnimationFrame(step)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="float-b relative w-full overflow-hidden max-w-[500px] xl:max-w-[540px] bg-[#FFFDF8] rounded-[24px] border-[1.5px] border-[#E8C97A] shadow-[0_0_0_4px_rgba(242,222,176,0.18),0_24px_64px_rgba(196,149,106,0.25),0_4px_16px_rgba(0,0,0,0.08)] px-6 py-5 md:px-8 md:py-6 flex flex-col justify-between"
      style={{ background: "linear-gradient(135deg, #FFFDF8, #FDF8F0 50%, #FAF3E8)" }}>

      {/* top edge shine */}
      <span className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-[#E8C97A]/90 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#1B3A6B] flex items-center justify-center flex-shrink-0 shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <p className="text-[17px] md:text-[20px] font-black text-[#1A1814] leading-tight mb-1">Get started in 3 steps</p>
            <p className="text-[11px] md:text-[13px] font-semibold text-[#8C8578]">Up and running in minutes</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#E6F1FB] border border-[#B5D4F4] px-3 py-1.5 rounded-full shadow-sm hidden sm:flex">
          <div className="w-[6px] h-[6px] rounded-full bg-[#185FA5] animate-pulse" />
          <span className="text-[10px] md:text-[11px] font-black text-[#185FA5] uppercase tracking-[0.08em]">3 min setup</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col relative flex-1" ref={bodyRef}>

        {/* Animated SVG line */}
        <svg
          ref={svgRef}
          className="absolute z-0 pointer-events-none"
          style={{ left: "21px", top: 0 }}
          width="4"
          height="10"
          viewBox="0 0 4 10"
        >
          <defs>
            <linearGradient id="stepLineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#86D080" />
              <stop offset="100%" stopColor="#86D080" />
            </linearGradient>
          </defs>
          <line
            ref={lineRef}
            x1="2" y1="0" x2="2" y2="10"
            stroke="url(#stepLineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="500"
            strokeDashoffset="500"
          />
        </svg>

        {/* ROW 1 */}
        <div className="flex items-start gap-4 md:gap-5 pb-8 relative z-10 w-full">
          <div className="w-11 md:w-12 flex-shrink-0 flex justify-center">
            <div
              ref={d1Ref}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-[14px] md:text-[16px] font-black flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#A8E6A3,#86D080)",
                color: "#1A4A16",
                boxShadow: "0 4px 14px rgba(134,208,128,0.35), 0 0 0 3px rgba(134,208,128,0.15)",
                animation: "popIn 0.35s cubic-bezier(.34,1.56,.64,1) 0.1s both",
              }}
            >01</div>
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="text-[10px] md:text-[11px] font-black tracking-[0.1em] uppercase text-[#3B8A35] mb-1.5">Step one</p>
            <p className="text-[16px] md:text-[20px] font-black text-[#1A1814] mb-2 leading-tight">Sign In with Google</p>
            <p className="text-[12px] md:text-[14px] font-semibold text-[#8C8578] leading-relaxed mb-3">Authenticate securely via Firebase — one click, enterprise-grade.</p>
            <div className="bg-white border-[1.5px] border-[#EDE8E0] rounded-[10px] px-3.5 py-2.5 md:px-4 md:py-3 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 md:px-3.5 md:py-2 rounded-[8px] bg-white border border-[#E8DDD0] shadow-[0_2px_4px_rgba(0,0,0,0.02)] cursor-pointer hover:bg-[#F7F5F0] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-[11px] md:text-[13px] font-black text-[#1A1814]">Continue with Google</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] md:text-[11px] font-bold text-[#8C8578]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8578" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                Secured
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex items-start gap-4 md:gap-5 pb-8 relative z-10 w-full">
          <div className="w-11 md:w-12 flex-shrink-0 flex justify-center">
            <div
              ref={d2Ref as any}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-[14px] md:text-[16px] font-black flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#A8E6A3,#86D080)",
                color: "#1A4A16",
                boxShadow: "0 4px 14px rgba(134,208,128,0.35), 0 0 0 3px rgba(134,208,128,0.15)",
                animation: "popIn 0.35s cubic-bezier(.34,1.56,.64,1) 0.75s both",
              }}
            >02</div>
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="text-[10px] md:text-[11px] font-black tracking-[0.1em] uppercase text-[#C4956A] mb-1.5">Step two</p>
            <p className="text-[16px] md:text-[20px] font-black text-[#1A1814] mb-2 leading-tight">Add your GA Key</p>
            <p className="text-[12px] md:text-[14px] font-semibold text-[#8C8578] leading-relaxed mb-3">Paste your Measurement ID — all properties fetched automatically.</p>
            <div className="bg-[#FDF8F0] border-[1.5px] border-[#E8C97A] rounded-[10px] px-3.5 py-2.5 md:px-4 md:py-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shadow-sm">
              <div className="flex-1 bg-white border border-[#E8DDD0] rounded-[6px] px-3 py-2 md:px-3md:py-2 text-[11px] md:text-[13px] text-[#B0A898] font-mono font-bold shadow-inner">G-XXXXXXXXXX</div>
              <button className="bg-[#1B3A6B] text-white text-[11px] md:text-[13px] font-black px-4 py-2 md:px-5 md:py-2 rounded-[6px] border-none shadow-md hover:bg-[#132A50] transition-colors flex-shrink-0">Connect →</button>
            </div>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="flex items-start gap-4 md:gap-5 relative z-10 w-full">
          <div className="w-11 md:w-12 flex-shrink-0 flex justify-center">
            <div
              ref={d3Ref}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-[14px] md:text-[16px] font-black flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#A8E6A3,#86D080)",
                color: "#1A4A16",
                boxShadow: "0 4px 14px rgba(134,208,128,0.35), 0 0 0 3px rgba(134,208,128,0.15)",
                animation: "popIn 0.35s cubic-bezier(.34,1.56,.64,1) 1.4s both",
              }}
            >03</div>
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="text-[10px] md:text-[11px] font-black tracking-[0.1em] uppercase text-[#1B3A6B] mb-1.5">Step three</p>
            <p className="text-[16px] md:text-[20px] font-black text-[#1A1814] mb-2 leading-tight">View & Monitor</p>
            <p className="text-[12px] md:text-[14px] font-semibold text-[#8C8578] leading-relaxed mb-3">Explore your dashboard & set up automated email alerts.</p>
            <div className="bg-[#F0F7EA] border-[1.5px] border-[#C0DD97] rounded-[10px] px-3.5 py-2.5 md:px-4 md:py-3 flex flex-wrap gap-2 shadow-sm">
              {["Live Charts", "Weekly Reports", "Smart Alerts", "Multi-property"].map((p, i) => (
                <span key={p} className={`text-[10px] md:text-[12px] font-black px-3 py-1.5 rounded-full shadow-sm ${i === 0 ? "bg-[#E6F1FB] text-[#185FA5] border border-[#B5D4F4]" :
                  i === 1 ? "bg-[#EAF3DE] text-[#3B6D11] border border-[#C0DD97]" :
                    i === 2 ? "bg-[#FAEEDA] text-[#854F0B] border border-[#E8C97A]" :
                      "bg-[#EDE8E0] text-[#5F5E5A] border border-[#D5CFC6]"
                  }`}>{p}</span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#EDE8E0] to-transparent my-6" />

      <div className="flex items-center justify-center">
        <SwytchCodeLogo hideIcon iconSize="h-3.5" textSize="text-[12px]" withLabel="Powered by" />
      </div>

    </div>
  )
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0]">

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-[#FAF8F4]/90 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="w-full h-14 flex items-center justify-between">

          {/* Left — Logo flush to left edge */}
          <Link href="/">
            <div className="flex items-center h-14 px-6 border-r border-[#E5E0D8] hover:bg-[#EDE8E0] transition-all duration-200 cursor-pointer">
              <Logo iconSize="h-7" textSize="text-xl" />
            </div>
          </Link>

          {/* Center — Nav links absolutely centered */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center h-14">
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="h-full px-8 flex items-center text-xs font-semibold tracking-widest uppercase text-[#1A1814] border-x border-transparent hover:border-[#E5E0D8] hover:bg-[#EDE8E0] transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Features
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="h-full px-8 flex items-center text-xs font-semibold tracking-widest uppercase text-[#1A1814] border-x border-transparent hover:border-[#E5E0D8] hover:bg-[#EDE8E0] transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              About
            </a>
          </div>

          {/* Right — CTA flush to right edge */}
          <Link href="/login">
            <button className="flex items-center gap-2 h-14 px-6 text-xs font-bold tracking-widest uppercase text-[#1A1814] border-l border-[#E5E0D8] hover:bg-[#EDE8E0] transition-all duration-200 cursor-pointer group">
              Get Started
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </Link>

        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="min-h-0 flex items-center justify-center px-6 relative overflow-hidden pt-24 pb-16 bg-[#F7F5F0]">
        {/* Background orbs */}
        <div className="absolute top-[10%] right-[8%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#C4956A]/20 to-[#1B3A6B]/10 blur-[120px] float" />
        <div className="absolute bottom-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#1B3A6B]/15 to-[#C4956A]/10 blur-[100px] float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] rounded-full bg-[#C4956A]/8 blur-[60px] float" style={{ animationDelay: "4s" }} />

        {/* Geometric shapes */}
        <div className="absolute top-[20%] right-[15%] w-16 h-16 border-2 border-[#1B3A6B]/20 rounded-xl rotate-12 float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[25%] left-[12%] w-10 h-10 border-2 border-[#C4956A]/30 rounded-lg rotate-45 float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[60%] right-[10%] w-8 h-8 bg-[#1B3A6B]/10 rounded-full float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[30%] left-[8%] w-6 h-6 bg-[#C4956A]/20 rotate-12 float" style={{ animationDelay: "2.5s" }} />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#1A1814 1px, transparent 1px), linear-gradient(90deg, #1A1814 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Three-column layout ── */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-16 xl:gap-28">

          {/* ── LEFT CARDS — hidden on mobile ── */}
          <div className="hidden md:flex flex-col gap-5 items-end lg:-translate-x-6 xl:-translate-x-16">

            {/* Left Combined Card: Traffic & Engagement */}
            <div className="float-a w-[320px] bg-gradient-to-b from-[#FFFCF7] to-[#FDF6EC] rounded-[24px] border border-[#E8DDD0] shadow-[0_4px_30px_rgba(196,149,106,0.18),0_1px_4px_rgba(0,0,0,0.05)] p-6">

              {/* Visitors Section */}
              <div className="mb-2">
                <p className="text-[13px] font-semibold text-[#8C8578] uppercase tracking-widest mb-1.5">Total Visitors</p>
                <div className="flex items-end justify-between">
                  <p className="text-[30px] font-black text-[#1A1814] leading-none">14,872</p>
                  <span className="inline-flex items-center gap-1 text-[13.5px] font-bold px-2.5 py-1 rounded-md bg-[#EAF3DE] text-[#3B6D11]">+6.4%</span>
                </div>
                <svg className="mt-4 w-full" height="48" viewBox="0 0 160 36" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C4956A" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#C4956A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,28 C20,22 35,30 55,20 C75,10 95,24 120,14 C140,6 152,16 160,10 L160,36 L0,36 Z" fill="url(#gA)" />
                  <path d="M0,28 C20,22 35,30 55,20 C75,10 95,24 120,14 C140,6 152,16 160,10" fill="none" stroke="#C4956A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {/* Expanded Tracking Metrics */}
                <div className="flex justify-between items-center mt-5 pt-4 border-t border-[#EDE8E0]">
                  <div>
                    <p className="text-[10.5px] uppercase tracking-widest text-[#8C8578] font-semibold mb-1">Unique Users</p>
                    <p className="text-[16px] font-bold text-[#1A1814]">11,204</p>
                  </div>
                  <div className="w-px h-8 bg-[#EDE8E0]" />
                  <div className="text-right">
                    <p className="text-[10.5px] uppercase tracking-widest text-[#8C8578] font-semibold mb-1">Bounce Rate</p>
                    <p className="text-[16px] font-bold text-[#1A1814]">42.8%</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8DDD0] to-transparent my-6" />

              {/* Avg Session Section */}
              <div>
                <p className="text-[13px] font-semibold text-[#8C8578] uppercase tracking-widest mb-1.5">Avg. Session Time</p>
                <div className="flex items-end justify-between">
                  <p className="text-[34px] font-black text-[#1A1814] leading-none">3m 42s</p>
                  <span className="inline-flex items-center gap-1 text-[12.5px] font-bold px-2.5 py-1 rounded-md bg-[#E6F1FB] text-[#185FA5]">+5.0%</span>
                </div>
                <svg className="mt-4 w-full" height="48" viewBox="0 0 160 36" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gB" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1B3A6B" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#1B3A6B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,24 C15,20 30,28 50,18 C70,8 90,22 110,14 C130,6 148,14 160,8 L160,36 L0,36 Z" fill="url(#gB)" />
                  <path d="M0,24 C15,20 30,28 50,18 C70,8 90,22 110,14 C130,6 148,14 160,8" fill="none" stroke="#1B3A6B" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {/* Expanded Tracking Metrics */}
                <div className="flex justify-between items-center mt-5 pt-4 border-t border-[#EDE8E0]">
                  <div>
                    <p className="text-[10.5px] uppercase tracking-widest text-[#8C8578] font-semibold mb-1">Pages / Session</p>
                    <p className="text-[16px] font-bold text-[#1A1814]">4.2</p>
                  </div>
                  <div className="w-px h-8 bg-[#EDE8E0]" />
                  <div className="text-right">
                    <p className="text-[10.5px] uppercase tracking-widest text-[#8C8578] font-semibold mb-1">Active Now</p>
                    <p className="text-[16px] font-bold text-[#1A1814] flex items-center justify-end gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#3B6D11] animate-pulse" /> 184
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ── CENTER: existing hero content, unchanged ── */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto w-full">

            {/* Badge — your existing one, untouched */}
            <div className="
              relative overflow-hidden
              inline-flex items-center gap-2
              px-[30px] py-[16px] rounded-full
              text-[16.5px] font-black tracking-[0.05em] uppercase text-[#6E3613] [-webkit-text-stroke:0.3px_#6E3613]
              bg-gradient-to-br from-[#FFFCF5] via-[#FDF4E0] to-[#FAF0D7]
              border-[1px] border-[#E8C97A]
              shadow-[0_0_0_2px_rgba(202,182,16,0.15),0_0_10px_4px_rgba(196,149,106,0.20),0_1px_6px_rgba(196,49,06,0.18),inset_0_110px_0_rgba(255,255,255,0.45)]
              hover:shadow-[0_0_0_5px_rgba(242,222,176,0.35),0_0_22px_8px_rgba(232,198,145,0.50),0_6px_16px_rgba(196,149,106,0.28),inset_0_1px_0_rgba(255,255,255,0.90)]
              hover:border-[#D4A84B]
              hover:-translate-y-0.5 hover:scale-[1.04]
              active:translate-y-px active:scale-[0.98]
              transition-all duration-300 ease-out
              fade-up cursor-default btn-shimmer mb-10
            ">
              <span className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />
              <SwytchCodeLogo hideIcon iconSize="h-4" textSize="text-[16px]" withLabel="Powered by" />
            </div>
            <div className="w-full flex justify-center mb-12">
              <BlurText
                text=" Your Google Analytics Simplified"
                animateBy="words"
                direction="top"
                delay={150}
                stepDuration={0.4}
                className="text-6xl md:text-[5rem] lg:text-[5.5rem] !font-sans font-semibold text-[#1A1814] leading-[1.1] justify-center tracking-tight gap-x-3 md:gap-x-5"
                highlightWords={[
                  { text: "Simplified", className: "text-[#6C3B1C] font-bold italic tracking-tight" },
                  { text: "Your", className: "-ml-4 md:-ml-8" }
                ]}
              />
            </div>

            <p className="text-lg md:text-xl text-[#1A1814] max-w-lg mx-auto mb-10 leading-relaxed fade-up fade-up-delay-2">
              Connect your Google Analytics properties, visualize key metrics,
              and receive smart alerts.
              <br />
              <span className="font-semibold">All in one clean dashboard.</span>
            </p>

            {/* Buttons — your existing ones, untouched */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 fade-up fade-up-delay-3">
              <Link href="/login">
                <button className="
                  relative overflow-hidden
                  flex items-center justify-center gap-3
                  min-w-[260px] py-6 rounded-[25px]
                  text-[20px] font-bold text-[#1A1814]
                  bg-gradient-to-b from-[#FFFFFF] to-[#FDF8F0]
                  border-4 border-[#F2DEB0]
                  shadow-[0_4px_32px_rgba(232,198,145,0.45)]
                  hover:shadow-[0_10px_40px_rgba(232,198,145,0.6)]
                  hover:border-[#E8CD94]
                  transition-all duration-300 ease-out
                  cursor-pointer btn-shimmer group
                ">
                  <span className="relative z-12 flex items-center justify-center gap-3 pointer-events-none">
                    Start for Free
                    <ArrowRight size={22} strokeWidth={3.0} className="text-[#C4956A] group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
              <a href="#features">
                <button className="
                  relative overflow-hidden
                  flex items-center justify-center gap-3
                  min-w-[260px] py-6 rounded-[25px]
                  text-[20px] font-bold text-[#1A1814]
                  bg-gradient-to-b from-[#FFFFFF] to-[#FDF8F0]
                  border-4 border-[#F2DEB0]
                  shadow-[0_4px_32px_rgba(232,198,145,0.45)]
                  hover:shadow-[0_8px_40px_rgba(232,198,145,0.6)]
                  hover:border-[#E8CD94]
                  transition-all duration-300 ease-out
                  cursor-pointer btn-shimmer group
                ">
                  <span className="relative z-10 flex items-center justify-center gap-3 pointer-events-none">
                    Explore Features
                    <ChevronDown size={20} strokeWidth={2.5} className="text-[#C4956A] group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </button>
              </a>
            </div>

          </div>

          {/* ── RIGHT CARD — hidden on mobile ── */}
          <div className="hidden md:flex flex-col gap-5 items-start lg:translate-x-6 xl:translate-x-16">

            <div className="float-c w-[320px] bg-gradient-to-b from-[#FFFCF7] to-[#FDF6EC] rounded-[24px] border border-[#E8DDD0] shadow-[0_4px_30px_rgba(196,149,106,0.18),0_1px_4px_rgba(0,0,0,0.05)] p-6">

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-[13px] font-bold text-[#8C8578] uppercase tracking-[0.12em]">Your Analytics</p>
                <div className="flex items-center gap-2 bg-[#EAF3DE] px-3 py-1 rounded-full">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#3B6D11] animate-pulse" />
                  <span className="text-[10px] font-bold text-[#3B6D11] uppercase">Live</span>
                </div>
              </div>

              {/* Property selector */}
              <div className="flex items-center gap-3 bg-white border border-[#E8C97A] rounded-xl px-4 py-2.5 mb-5 shadow-sm">
                <div className="w-[10px] h-[10px] rounded-full bg-[#1B3A6B] flex-shrink-0" />
                <span className="text-[14px] font-bold text-[#1A1814] flex-1">Buisness.com</span>
                <span className="text-[15px] font-bold text-[#C4956A]">⌄</span>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { label: "Visitors", value: "14,872", badge: "+6.4%", up: true, blue: false },
                  { label: "Bounce Rate", value: "34.2%", badge: "-3%", up: false, blue: true },
                  { label: "Avg Session", value: "3m 42s", badge: "+5%", up: true, blue: false },
                  { label: "Conversions", value: "8.6%", badge: "+2%", up: true, blue: true },
                ].map(({ label, value, badge, up, blue }) => (
                  <div key={label} className="bg-[#F7F4EE] rounded-xl p-3 border border-[#E8DDD0]/50">
                    <p className="text-[11px] font-bold text-[#8C8578] uppercase tracking-[0.08em] mb-1.5">{label}</p>
                    <p className={`text-[20px] font-black leading-none mb-2 ${blue ? "text-[#1B3A6B]" : "text-[#1A1814]"}`}>{value}</p>
                    <span className={`inline-flex text-[10px] font-bold px-2 py-0.5 rounded-md ${up ? "bg-[#EAF3DE] text-[#3B6D11]" : "bg-[#FCEBEB] text-[#A32D2D]"}`}>
                      {badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#EDE8E0] my-4" />

              {/* Traffic sources */}
              <p className="text-[11.5px] font-bold text-[#8C8578] uppercase tracking-[0.1em] mb-3">Traffic Sources</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Google", pct: 44, color: "#1B3A6B" },
                  { label: "Instagram", pct: 21, color: "#C4956A" },
                  { label: "Direct", pct: 20, color: "#E8C97A" },
                  { label: "Email", pct: 15, color: "#D5CFC6" },
                ].map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[12px] font-medium text-[#8C8578]">{label}</span>
                      <span className="text-[12px] font-bold text-[#1A1814]">{pct}%</span>
                    </div>
                    <div className="w-full h-[6px] bg-[#EDE8E0] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─── LOGO LOOP ─── */}
      <section className="pt-6 pb-8 bg-[#F7F5F0] border-b border-[#E5E0D8]">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-[#6B6760] font-medium mb-7">
          Trusted by leading teams
        </p>
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={30}
          gap={25}
          pauseOnHover
          fadeOut
          fadeOutColor="#F7F5F0"
          scaleOnHover
        />
      </section>

      {/* ─── FEATURES & HOW IT WORKS ─── */}
      <section id="features" className="py-10 px-6 bg-white border-y border-[#E5E0D8] min-h-[85vh] flex items-center">
        <div className="max-w-[75rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Features ── */}

          <div className="flex flex-col">
            <div className="text-left mb-10">
              <p className="text-xs tracking-[0.2em] uppercase text-[#C4956A] font-medium mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>What we offer</p>
              <h2 className="text-3xl md:text-5xl text-[#1A1814] mb-3 font-semibold tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                Everything you need to
                <br />
                <span className="italic text-[#7B4A2A]">understand your traffic</span>
              </h2>
              <p className="text-base text-[#8C8578] max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Powerful features wrapped in a simple, intuitive interface.
              </p>
            </div>

            {/* ── REPLACED 4 BLOCKS WITH NEW CARD ── */}
            <div className="hidden md:flex flex-col items-start w-full">
              <div className="float-c relative overflow-hidden w-full min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] max-w-[450px] flex flex-col justify-between bg-gradient-to-br from-[#FFFDF8] via-[#FDF8F0] to-[#FAF3E8] rounded-[24px] border-[1.5px] border-[#E8C97A] shadow-[0_0_0_4px_rgba(242,222,176,0.18),0_24px_64px_rgba(196,149,106,0.25),0_4px_16px_rgba(0,0,0,0.08)] px-6 py-5 md:px-8 md:py-6">

                {/* top edge shimmer line */}
                <span className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#E8C97A]/90 to-transparent pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3A6B] flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                    </div>
                    <div>
                      <p className="text-[17px] font-black text-[#1A1814] leading-none mb-1.5">What you get</p>
                      <p className="text-[12px] font-bold text-[#6B6760]">After connecting business.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-[#EAF3DE] border border-[#C0DD97] px-3 py-1 rounded-full text-sm">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#3B6D11] animate-pulse" />
                    <span className="text-[11px] font-black text-[#3B6D11] uppercase tracking-[0.08em]">Auto</span>
                  </div>
                </div>

                {/* GA Key connected row */}
                <div className="flex items-center gap-3 bg-white border-[1.5px] border-[#E8C97A] rounded-xl px-4 py-3 mb-5">
                  <div className="w-[30px] h-[30px] rounded-[8px] bg-[#1B3A6B] flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-extrabold text-[#8C8578] uppercase tracking-[0.1em] mb-1">GA Measurement ID</p>
                    <p className="text-[15px] font-black text-[#1A1814] font-mono">G-BX92KZMTP4</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#EAF3DE] px-3 py-1 rounded-md">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-[11px] font-black text-[#3B6D11]">Connected</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#EDE8E0] to-transparent mb-4" />

                {/* Feature rows */}
                {[
                  {
                    bg: "#E6F1FB", stroke: "#185FA5",
                    icon: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><polyline points="12 12 15 14" /></>,
                    title: "Properties auto-fetched",
                    sub: "All your GA properties appear instantly — no manual entry",
                  },
                  {
                    bg: "#FDF4E0", stroke: "#C4956A",
                    icon: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
                    title: "Weekly & monthly insights",
                    sub: "Automated email digests with trends, spikes & summaries",
                  },
                  {
                    bg: "#EDE8E0", stroke: "#1B3A6B",
                    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
                    title: "Real-time dashboard",
                    sub: "Charts & KPIs update live — always current, always clear",
                  },
                  {
                    bg: "#FAEEDA", stroke: "#854F0B",
                    icon: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>,
                    title: "Smart alerts",
                    sub: "Get notified on traffic spikes, drops & anomalies instantly",
                  },
                ].map(({ bg, stroke, icon, title, sub }) => (
                  <div key={title} className="flex items-start gap-3 bg-[#F7F4EE] border border-[#EDE8E0] rounded-xl px-4 py-3 mb-2.5 last:mb-0">
                    <div className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round">
                        {icon}
                      </svg>
                    </div>
                    <div className="flex-1 mt-0.5">
                      <p className="text-[15px] font-black text-[#1A1814] mb-1">{title}</p>
                      <p className="text-[12px] font-semibold text-[#6B6760] leading-[1.4] pr-2">{sub}</p>
                    </div>
                    <div className="w-[18px] h-[18px] rounded-full bg-[#EAF3DE] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" strokeWidth="3.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                  </div>
                ))}

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#EDE8E0] to-transparent mt-5 mb-4" />

                <div className="flex items-center justify-center">
                  <SwytchCodeLogo hideIcon iconSize="h-3.5" textSize="text-[12px]" withLabel="Powered by" />
                </div>

              </div>
            </div>
          </div>

          {/* ── RIGHT: How It Works ── */}
          <div id="how-it-works" className="flex flex-col">
            <div className="text-left mb-12 lg:pl-4">
              <p className="text-xs tracking-[0.2em] uppercase text-[#7B4A2A] font-medium mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Getting started</p>
              <h2 className="text-3xl md:text-5xl text-[#1A1814] mb-3 font-semibold tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                Up and running in
                <br />
                <span className="italic text-[#7B4A2A]">three steps</span>
              </h2>
            </div>

            <StepsCard />
          </div>

        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer id="about" className="bg-[#14120E] pt-28 pb-12 px-6 border-t border-[#2A2621]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 mb-28 items-start">

            {/* Brand column */}
            <div className="flex flex-col items-start gap-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
                  <Logo iconOnly iconSize="h-8" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white tracking-tighter" style={{ fontFamily: "'Inter', sans-serif" }}>Statsy</span>
                </div>
              </div>
              <p className="text-[#8C8578] max-w-sm text-[18px] leading-[1.6] font-medium tracking-tight">
                Google Analytics simplified. Connect your properties, visualize key metrics, and receive smart weekly alerts — all in one clean dashboard.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[15px] border border-[#2A2621] flex items-center justify-center text-[#8C8578] hover:bg-[#2A2621] hover:text-white transition-all duration-300 cursor-pointer group">
                  <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="w-12 h-12 rounded-[15px] border border-[#2A2621] flex items-center justify-center text-[#8C8578] hover:bg-[#2A2621] hover:text-white transition-all duration-300 cursor-pointer group">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <a href="https://github.com/Lakshaycodes08/google-analytics-app" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-[15px] border border-[#2A2621] flex items-center justify-center text-[#8C8578] hover:bg-[#2A2621] hover:text-white transition-all duration-300 cursor-pointer group">
                  <Github size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* About content */}
            <div className="flex flex-col items-start max-w-lg">
              <p className="text-[12px] font-black uppercase tracking-[0.25em] text-[#C4956A] mb-8">
                About Statsy
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tighter mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                Analytics that actually<br />
                <span className="italic font-serif text-[#C4956A]">makes sense</span>
              </h2>
              <div className="space-y-6 text-[17px] text-[#8C8578] font-medium leading-[1.7] tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>
                  Statsy is a clean, no-nonsense Google Analytics dashboard built for teams who
                  want clarity, not complexity. Connect your GA properties in seconds and get
                  your data visualised the way it should be.
                </p>
                <p>
                  We built Statsy because most analytics tools are overwhelming. Statsy strips it
                  back to what matters — who&apos;s visiting, where they&apos;re from, and what they&apos;re
                  doing.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-[#2A2621] flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[14px] text-[#524B40] font-bold tracking-tight">
              © {new Date().getFullYear()} Statsy.in. All rights reserved.
            </p>
            <div className="flex items-center flex-wrap gap-6">
              <Link href="/privacy" className="text-[14px] text-[#524B40] hover:text-white transition-colors duration-200 underline underline-offset-2">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[14px] text-[#524B40] hover:text-white transition-colors duration-200 underline underline-offset-2">
                Terms of Service
              </Link>
              <SwytchCodeLogo hideIcon iconSize="h-4" textSize="text-[14px]" theme="dark" withLabel="Built with" />
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}