"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Shield, Activity, BarChart3, Smartphone } from "lucide-react";

// --- Components ---

// 1. The Aurora Background
const Aurora = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-900/30 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
    <div className="absolute top-[20%] right-[-5%] w-[30rem] h-[30rem] bg-violet-900/20 rounded-full blur-[100px] mix-blend-screen" />
    <div className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] bg-cyan-900/20 rounded-full blur-[100px] mix-blend-screen" />
    <div className="absolute inset-0 bg-noise opacity-[0.03] z-10" />
  </div>
);

// 2. The Glass Card (Reusable)
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);

// 3. The Shine Button
const ShineButton = ({ text }: { text: string }) => {
  return (
    <button className="group relative px-8 py-3 rounded-full bg-white text-black font-medium overflow-hidden transition-transform active:scale-95">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out z-10" />
      <span className="relative z-20 flex items-center gap-2">
        {text} <ArrowRight size={16} />
      </span>
    </button>
  );
};

// 4. Mock Visuals (Code-based graphics)
const MockCandlestick = () => (
  <div className="flex items-end gap-1 h-24 w-full justify-center opacity-80">
    {[40, 60, 30, 80, 55, 90, 45, 100].map((h, i) => (
      <div key={i} className="flex flex-col items-center gap-1">
        <div className={`w-[1px] h-full ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ height: `${h + 20}%` }} />
        <div className={`w-3 rounded-sm ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ height: `${h}%` }} />
      </div>
    ))}
  </div>
);

const MockSwipeCard = () => (
  <div className="relative w-32 h-48 bg-charcoal-800 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl rotate-6">
      <div className="absolute inset-x-0 top-4 px-2 flex justify-between">
         <div className="w-2 h-2 rounded-full bg-red-500/50" />
         <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      <Activity className="text-white/20" size={32} />
      <div className="absolute bottom-4 text-[10px] text-zinc-500 font-mono">BTC/USD</div>
  </div>
);

export default function LandingPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen bg-charcoal-900 text-zinc-200 selection:bg-indigo-500/30 selection:text-white font-sans relative">
      <Aurora />

      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-charcoal-900/60 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif text-2xl font-bold tracking-tight text-white">ScrollStreet.</span>
          <button className="px-5 py-2 text-sm font-medium rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
            Download App
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8">
            Condense 10 Years of Patterns into <br className="hidden md:block"/> 10 Minutes.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10">
            The fastest way to master stock and crypto charts without risking a dollar.
          </p>
          
          <div className="flex justify-center">
            <ShineButton text="Start Training" />
          </div>
        </motion.div>

        {/* 3D Floating Phone Container */}
        <div className="mt-20 md:mt-32 relative z-10 perspective-1000">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[300px] h-[600px] bg-charcoal-800 rounded-[3rem] border-4 border-charcoal-700 shadow-2xl rotate-x-12 rotate-y-[-10deg] rotate-z-2 overflow-hidden mx-auto"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg)' }} // Basic CSS fallback
          >
             {/* Phone Screen Content */}
             <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800 to-black flex flex-col">
                {/* Header */}
                <div className="h-14 border-b border-white/5 flex items-center justify-center pt-4">
                    <span className="text-xs font-mono text-zinc-500">BTC / USD • 15M</span>
                </div>
                {/* Chart Area */}
                <div className="flex-1 flex items-center justify-center p-4 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 to-transparent" />
                    <MockCandlestick />
                    {/* Floating Label */}
                    <div className="absolute bottom-1/4 right-8 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-emerald-400 text-xs">
                        +12.4%
                    </div>
                </div>
                {/* Footer Controls */}
                <div className="h-24 bg-charcoal-900 border-t border-white/5 grid grid-cols-2 gap-px">
                   <div className="flex items-center justify-center border-r border-white/5 text-rose-400 font-serif italic">Short</div>
                   <div className="flex items-center justify-center text-emerald-400 font-serif italic">Long</div>
                </div>
             </div>
             
             {/* Gloss Reflection */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[3rem]" />
          </motion.div>
        </div>
      </section>

      {/* --- Method Section (Z-Pattern) --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl space-y-32">
          <div className="text-center mb-24">
             <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Train Your Instinct.</h2>
             <p className="text-zinc-500">Refine your edge with institutional-grade simulation.</p>
          </div>

          {/* Feature A */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-24"
          >
            <div className="flex-1 space-y-6 text-center md:text-left">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border border-white/10">
                 <BarChart3 className="text-zinc-300" size={20} />
               </div>
               <h3 className="text-3xl font-serif text-white">Real Historical Data</h3>
               <p className="text-zinc-400 leading-relaxed text-lg">
                 Practice with real data from stocks and crypto. No random walks, no simulations. Everything you see actually happened.
               </p>
            </div>
            <GlassCard className="flex-1 w-full h-[300px] flex items-center justify-center bg-gradient-to-br from-charcoal-800 to-black">
               <div className="space-y-2 font-mono text-xs text-zinc-500 p-8">
                  <div className="flex justify-between border-b border-white/5 py-2"><span>OPEN</span> <span className="text-white">42,102.50</span></div>
                  <div className="flex justify-between border-b border-white/5 py-2"><span>HIGH</span> <span className="text-emerald-400">44,200.00</span></div>
                  <div className="flex justify-between border-b border-white/5 py-2"><span>LOW</span> <span className="text-rose-400">41,800.20</span></div>
                  <div className="flex justify-between py-2"><span>VOL</span> <span className="text-zinc-300">12.4M</span></div>
               </div>
            </GlassCard>
          </motion.div>

          {/* Feature B (Reversed) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24"
          >
            <div className="flex-1 space-y-6 text-center md:text-left">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border border-white/10">
                 <Zap className="text-zinc-300" size={20} />
               </div>
               <h3 className="text-3xl font-serif text-white">Swipe to Trade</h3>
               <p className="text-zinc-400 leading-relaxed text-lg">
                 Spot the setup instantly. Swipe right to Long, swipe left to Short. It is the fastest feedback loop in finance.
               </p>
            </div>
            <GlassCard className="flex-1 w-full h-[300px] flex items-center justify-center bg-charcoal-800">
               <MockSwipeCard />
            </GlassCard>
          </motion.div>

          {/* Feature C */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="flex flex-col md:flex-row items-center gap-12 md:gap-24"
          >
            <div className="flex-1 space-y-6 text-center md:text-left">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border border-white/10">
                 <TrendingUp className="text-zinc-300" size={20} />
               </div>
               <h3 className="text-3xl font-serif text-white">Instant Feedback</h3>
               <p className="text-zinc-400 leading-relaxed text-lg">
                 ScrollStreet automatically draws resistance lines and trend traps you missed.
               </p>
            </div>
            <GlassCard className="flex-1 w-full h-[300px] flex items-center justify-center bg-charcoal-800 group">
               <div className="relative w-3/4 h-1/2 border-b border-l border-zinc-700">
                  <div className="absolute top-0 right-0 w-full h-full border-t border-dashed border-red-500/50 flex items-start justify-end p-2">
                    <span className="text-[10px] text-red-400 bg-red-500/10 px-1 rounded">RESISTANCE</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-full border-b border-emerald-500/50" />
               </div>
            </GlassCard>
          </motion.div>

        </div>
      </section>

      {/* --- Bento Grid Section --- */}
      <section className="py-32 px-6 relative z-10 bg-gradient-to-b from-transparent to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <GlassCard className="md:col-span-2 p-8 min-h-[250px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500">
               <div>
                 <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-300">
                   <Activity size={18} />
                 </div>
                 <h3 className="text-2xl font-serif text-white mb-2">Smart Feedback</h3>
                 <p className="text-zinc-400">Don't just lose, learn why. We summarize the verdict on every trade using pattern recognition logic.</p>
               </div>
               <div className="w-full h-1 bg-gradient-to-r from-indigo-500 to-transparent opacity-50 mt-8" />
            </GlassCard>

            {/* Card 2 */}
            <GlassCard className="md:col-span-1 p-8 min-h-[250px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500">
               <Shield className="text-zinc-300 mb-4" size={24} />
               <div>
                 <h3 className="text-xl font-serif text-white mb-2">Risk Free</h3>
                 <p className="text-sm text-zinc-400">No real money. Gain experience without the anxiety of the live market.</p>
               </div>
            </GlassCard>

            {/* Card 3 */}
            <GlassCard className="md:col-span-1 p-8 min-h-[250px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500">
               <Smartphone className="text-zinc-300 mb-4" size={24} />
               <div>
                 <h3 className="text-xl font-serif text-white mb-2">Mobile First</h3>
                 <p className="text-sm text-zinc-400">Designed for your commute. Trade on the train, master the market by work.</p>
               </div>
            </GlassCard>

            {/* Card 4 */}
            <GlassCard className="md:col-span-2 p-8 min-h-[250px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500">
               <div>
                 <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-300">
                   <TrendingUp size={18} />
                 </div>
                 <h3 className="text-2xl font-serif text-white mb-2">High ROI Skill</h3>
                 <p className="text-zinc-400">Turn mindless screen time into a profitable skill set. 10 minutes a day = 300+ charts analyzed.</p>
               </div>
            </GlassCard>

          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-white/5 bg-black text-center px-6">
         <div className="container mx-auto max-w-2xl">
            <span className="font-serif text-xl font-bold text-white block mb-6">ScrollStreet.</span>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-lg mx-auto">
              For educational purposes only. This app is a simulation and uses historical data. 
              No real money is involved. This is not financial advice. 
              Past performance (even in simulation) is not indicative of future results.
            </p>
            <div className="mt-8 text-xs text-zinc-700">
              © {new Date().getFullYear()} ScrollStreet Inc.
            </div>
         </div>
      </footer>
    </div>
  );
}