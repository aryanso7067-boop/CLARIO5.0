import React, { useState, useEffect } from 'react';

// --- Embedded SVG Icons ---
const WindowsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);
const AppleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.67.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.61 1.54-1.31 2.91-2.53 4.08zM12.03 7.25C11.85 4.3 14.15 1.7 16.94 1.5c.29 3.06-2.55 5.86-4.91 5.75z"/>
  </svg>
);
const LinuxIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.66 0C8.5 0 6.64 2.87 6.64 6.74c0 1.25.15 2.35.43 3.32-.98.54-1.8 1.48-2.39 2.65-.67 1.34-1.09 2.89-1.09 4.39 0 2.83 1.52 4.97 3.54 5.99.71.36 1.5.6 2.32.74a7.28 7.28 0 0 0 2.21.17c1.39-.14 2.67-.62 3.79-1.35a6.6 6.6 0 0 0 5.4-6.44c0-2.33-1.09-4.48-2.85-5.91-.01-.76-.11-1.45-.29-2.06A6.16 6.16 0 0 0 16.7 3.6C15.65 1.38 13.88 0 11.66 0zM10.13 6.94c.35 0 .66.19.86.5.21.32.26.71.14 1.07-.11.36-.38.65-.72.8A1.17 1.17 0 0 1 9.27 9c-.35 0-.66-.19-.85-.5a1.18 1.18 0 0 1-.15-1.07c.12-.36.38-.65.73-.81.35-.15.76-.11 1.13.32zM15.42 7.2c.4 0 .76.2.98.54.22.35.26.77.1 1.15-.15.38-.49.7-.87.84a1.21 1.21 0 0 1-1.32-.32c-.39-.4-.53-.98-.36-1.5.15-.49.57-.86 1.08-.94.13-.02.26-.01.39.23z"/>
  </svg>
);
const AndroidIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 9.48l1.84-3.18c.16-.28.06-.63-.22-.79-.27-.16-.62-.06-.78.21L16.58 8.9c-1.34-.63-2.92-1-4.58-1-1.66 0-3.24.37-4.58 1l-1.86-3.18c-.16-.27-.51-.37-.78-.21-.28.16-.38.51-.22.79l1.84 3.18C3.07 11.3 1 14.88 1 19h22c0-4.12-2.07-7.7-5.4-9.52zM7.5 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

export default function ClarioLandingPage() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-white font-sans selection:bg-[#2ECC71]/30 selection:text-white overflow-x-hidden">
      
      {/* Dynamic Background Blurs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] rounded-full bg-[#2ECC71]/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] rounded-full bg-[#D8B4E2]/10 blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#2ECC71] to-[#60E296] shadow-[0_0_20px_rgba(46,204,113,0.4)] flex items-center justify-center p-[2px]">
            <div className="w-full h-full bg-[#070709] rounded-[14px] flex items-center justify-center">
              <div className="w-4 h-4 bg-[#2ECC71] rounded-full shadow-[0_0_10px_rgba(46,204,113,0.8)]" />
            </div>
          </div>
          <span className="font-outfit font-bold text-2xl tracking-tight text-white">Clario</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium text-neutral-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#methodology" className="hover:text-white transition-colors">Methodology</a>
          <a href="#download" className="hover:text-white transition-colors">Download Apps</a>
        </div>
        <a href="#download" className="px-6 py-2.5 rounded-full bg-white text-black font-inter text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all">
          Get Started
        </a>
      </nav>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-32">
        
        {/* HERO SECTION */}
        <section className="pt-16 lg:pt-28 pb-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 flex flex-col items-start w-full lg:max-w-xl relative">
            <div className="inline-flex flex-row items-center gap-3 px-4 py-2 rounded-full border border-white/10 glass-button text-xs font-semibold text-neutral-300 font-inter mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECC71] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ECC71]"></span>
              </span>
              Digital Wellbeing Reimagined
            </div>

            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-black leading-[1.05] tracking-tight font-outfit text-white">
              Reclaim your<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#D8B4E2]">dopamine.</span>
            </h1>
            
            <p className="mt-8 text-xl text-neutral-400 font-inter leading-relaxed max-w-lg">
              Clario is a suite of tools designed to break your doom-scrolling habits. 
              Schedule focus, block distracting apps, and intervene before you fall into the trap.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full">
              <a href="#download" className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#2ECC71] text-black font-bold font-inter text-lg shadow-[0_0_30px_rgba(46,204,113,0.3)] hover:shadow-[0_0_50px_rgba(46,204,113,0.5)] hover:scale-105 transition-all text-center">
                Download Free
              </a>
              <a href="#features" className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 text-white font-bold font-inter text-lg hover:bg-white/5 transition-all text-center">
                Explore Features
              </a>
            </div>
            
            {/* Supported platforms quick peek */}
            <div className="mt-12 flex items-center gap-6 text-neutral-500">
               <span className="text-sm font-semibold uppercase tracking-wider">Available On</span>
               <div className="flex gap-4">
                 <WindowsIcon />
                 <AppleIcon />
                 <LinuxIcon />
                 <AndroidIcon />
               </div>
            </div>
          </div>

          {/* HERO MOCKUP - Emote Agency Premium Design */}
          <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[360px]">
              
              {/* Backglow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71] to-[#D8B4E2] blur-3xl opacity-30 rounded-[3rem] mix-blend-screen scale-110"></div>
              
              {/* Phone Frame */}
              <div className="relative w-full aspect-[1/2] rounded-[3rem] border border-[rgba(255,255,255,0.1)] bg-gradient-to-b from-[#1C1C1E] to-[#0A0A0A] p-2 shadow-2xl backdrop-blur-2xl">
                 
                 {/* Screen */}
                 <div className="w-full h-full bg-[#0D0D0F] rounded-[2.6rem] relative overflow-hidden flex flex-col">
                   
                   {/* Notch */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#000] rounded-b-3xl z-50"></div>
                   
                   {/* UI Top */}
                   <div className="pt-12 px-6 pb-6">
                     <div className="flex justify-between items-center mb-8">
                       <h2 className="text-2xl font-bold font-outfit text-white">Dashboard</h2>
                       <div className="w-10 h-10 rounded-full border border-white/10 p-1 flex items-center justify-center">
                          <img src="https://ui-avatars.com/api/?name=User&background=2ECC71&color=000" className="w-full h-full rounded-full" alt="avatar" />
                       </div>
                     </div>

                     {/* Score Card */}
                     <div className="glass-panel rounded-3xl p-6 mb-6 relative overflow-hidden group border border-[#2ECC71]/30">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ECC71]/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                       <h3 className="text-neutral-400 text-sm font-medium mb-1 font-inter">Today's Focus Score</h3>
                       <div className="flex items-end gap-2 mb-4">
                         <span className="text-4xl font-extrabold text-white font-outfit">85</span>
                         <span className="text-[#2ECC71] text-sm font-bold mb-1">Excellent ↑</span>
                       </div>
                       
                       {/* Activity Bar */}
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex">
                          <div className="h-full bg-[#2ECC71] w-[60%]"></div>
                          <div className="h-full bg-[#D8B4E2] w-[25%]"></div>
                       </div>
                       <div className="flex justify-between gap-2 mt-3 text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
                         <span className="text-[#2ECC71]">Productive</span>
                         <span className="text-[#D8B4E2]">Neutral</span>
                         <span className="text-rose-500">Distracting</span>
                       </div>
                     </div>

                     {/* Blocked Apps Preview */}
                     <h3 className="text-lg font-bold font-outfit text-white mb-4">Focus Mode Active</h3>
                     <div className="space-y-3">
                       
                       <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md">
                         <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-[#1DA1F2]/20 flex items-center justify-center">
                             <div className="w-5 h-5 bg-[#1DA1F2] rounded-md mask-twitter"></div>
                           </div>
                           <div>
                             <p className="font-bold text-sm text-white">X / Twitter</p>
                             <p className="text-xs text-rose-400 font-semibold">Blocked entirely</p>
                           </div>
                         </div>
                         <div className="w-12 h-6 rounded-full bg-[#2ECC71] p-1 flex items-center justify-end shadow-[0_0_10px_rgba(46,204,113,0.4)]">
                           <div className="w-4 h-4 rounded-full bg-white" />
                         </div>
                       </div>

                       <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md">
                         <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-20 flex items-center justify-center p-2 absolute"></div>
                           <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center relative z-10 border border-white/10">
                              <span className="text-xs">📸</span>
                           </div>
                           <div>
                             <p className="font-bold text-sm text-white">Instagram</p>
                             <p className="text-xs text-[#D8B4E2] font-semibold">Mindful lock (15s)</p>
                           </div>
                         </div>
                         <div className="w-12 h-6 rounded-full bg-white/10 p-1 flex items-center justify-start">
                           <div className="w-4 h-4 rounded-full bg-neutral-400" />
                         </div>
                       </div>

                     </div>

                   </div>
                   
                   {/* Bottom Navbar */}
                   <div className="absolute bottom-6 left-6 right-6">
                     <div className="glass-panel h-16 rounded-2xl flex items-center justify-around px-4 border border-white/10 shadow-2xl">
                       <div className="w-8 h-8 rounded-full bg-white/10"></div>
                       <div className="w-8 h-8 rounded-full bg-[#2ECC71] shadow-[0_0_15px_rgba(46,204,113,0.5)]"></div>
                       <div className="w-8 h-8 rounded-full bg-white/10"></div>
                     </div>
                   </div>

                 </div>
              </div>

               {/* Floating Badges */}
               <div className="absolute -left-10 top-1/4 glass-panel px-4 py-3 rounded-2xl border border-white/10 animate-bounce shadow-xl hidden md:block" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <span className="text-[#2ECC71] text-xl">🛡️</span>
                    <div>
                      <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wide">Shield Active</p>
                      <p className="text-sm font-bold text-white">No Distractions</p>
                    </div>
                  </div>
               </div>

               <div className="absolute -right-12 bottom-1/4 glass-panel px-4 py-3 rounded-2xl border border-[#D8B4E2]/30 animate-pulse shadow-xl hidden md:block" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-3">
                    <span className="text-[#D8B4E2] text-xl">🧘‍♂️</span>
                    <div>
                      <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wide">Intervention</p>
                      <p className="text-sm font-bold text-white">Take a breath</p>
                    </div>
                  </div>
               </div>

            </div>
          </div>
        </section>

        {/* BENTO GRID FEATURES SECTION */}
        <section id="features" className="py-24 border-t border-white/5 mt-12 bg-[#0A0A0C]/50 rounded-[3rem] px-6 lg:px-16">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black font-outfit text-white mb-6">Designed for <br/><span className="text-[#2ECC71]">Deep Work</span></h2>
              <p className="text-lg text-neutral-400 font-inter">Standard screen time limits don't work. Clario uses intent-based interventions and strict blocklists to fundamentally alter your digital habits.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
             
             {/* Big Feature: App Blocking */}
             <div className="md:col-span-2 bg-[#1C1C1E]/40 border border-white/5 rounded-[2rem] p-8 md:p-12 hover:bg-[#1C1C1E]/60 transition-all flex flex-col md:flex-row gap-8 items-center overflow-hidden relative group">
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#2ECC71]/10 blur-[80px] group-hover:bg-[#2ECC71]/20 transition-all"></div>
                <div className="flex-1 z-10">
                   <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                      🧱
                   </div>
                   <h3 className="text-3xl font-bold font-outfit mb-4">Hard App Blocking</h3>
                   <p className="text-neutral-400 leading-relaxed font-inter text-lg">
                     We don't just set a timer. We kill the feed. Set strict schedules and block addictive websites or apps completely until your deep work block is finished.
                   </p>
                </div>
                <div className="flex-1 w-full glass-panel border border-[#2ECC71]/20 rounded-2xl p-6 z-10 relative">
                   <div className="bg-[#070709] rounded-xl p-4 border border-white/5">
                     <p className="text-center text-[#2ECC71] font-bold">TikTok Blocked</p>
                     <p className="text-center text-neutral-500 text-xs mt-1">Available in 2h 45m</p>
                   </div>
                </div>
             </div>

             {/* Small Feature: Dopamine Detox */}
             <div className="md:col-span-1 bg-[#1C1C1E]/40 border border-white/5 rounded-[2rem] p-8 hover:bg-[#1C1C1E]/60 transition-all relative overflow-hidden group">
                 <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#D8B4E2]/10 blur-[60px] group-hover:bg-[#D8B4E2]/20 transition-all"></div>
                 <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg z-10 relative">
                    📈
                 </div>
                 <h3 className="text-2xl font-bold font-outfit mb-4 z-10 relative">Screentime Analytics</h3>
                 <p className="text-neutral-400 leading-relaxed font-inter z-10 relative">
                   Track your dopamine versus productive output in a beautiful chart. Keep the streak alive to build a lasting habit.
                 </p>
             </div>

             {/* Small Feature: Mindful Interventions */}
             <div className="md:col-span-1 bg-[#1C1C1E]/40 border border-white/5 rounded-[2rem] p-8 hover:bg-[#1C1C1E]/60 transition-all relative overflow-hidden group">
                 <div className="absolute left-0 top-0 w-32 h-32 bg-blue-500/10 blur-[60px] group-hover:bg-blue-500/20 transition-all"></div>
                 <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg z-10 relative">
                    🌬️
                 </div>
                 <h3 className="text-2xl font-bold font-outfit mb-4 z-10 relative">Mindful Interventions</h3>
                 <p className="text-neutral-400 leading-relaxed font-inter z-10 relative">
                   Force a 15-second breathing exercise before opening social media. Breaking the immediate impulse is half the battle.
                 </p>
             </div>

             {/* Wide Feature: Setup & Sync */}
             <div className="md:col-span-2 bg-gradient-to-r from-[#2ECC71]/10 to-transparent border border-[#2ECC71]/20 rounded-[2rem] p-8 md:p-12 hover:border-[#2ECC71]/40 transition-all relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-md">
                   <h3 className="text-2xl font-bold font-outfit mb-4">Syncs Everything. Everywhere.</h3>
                   <p className="text-neutral-400 leading-relaxed font-inter text-lg">
                     Block a site on your laptop, and your phone won't let you open the app. Clario is universally connected across all OS environments to ensure bulletproof focus.
                   </p>
                </div>
                <div className="mt-8 md:mt-0 flex gap-4 text-white opacity-80">
                  <AppleIcon />
                  <WindowsIcon />
                  <AndroidIcon />
                  <LinuxIcon />
                </div>
             </div>

             {/* Wide Feature: AI Intelligence */}
             <div className="md:col-span-3 bg-[#1C1C1E]/40 border border-[#D8B4E2]/20 rounded-[2rem] p-8 md:p-12 hover:bg-[#1C1C1E]/60 transition-all relative overflow-hidden flex flex-col md:flex-row gap-8 items-center group">
                 <div className="absolute right-0 top-0 w-64 h-64 bg-[#D8B4E2]/10 blur-[80px] group-hover:bg-[#D8B4E2]/20 transition-all"></div>
                 <div className="flex-1 z-10">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                       🧠
                    </div>
                    <h3 className="text-3xl font-bold font-outfit mb-4">Clario AI Engine</h3>
                    <p className="text-neutral-400 leading-relaxed font-inter text-lg mb-4">
                      Our system doesn't just track you, it coaches you. AI Distraction Detection predicts relapse moments, while Smart Scheduling automatically suggests your peak focus hours.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                       <span className="px-3 py-1 bg-[#D8B4E2]/10 border border-[#D8B4E2]/20 rounded-full text-xs font-semibold text-[#D8B4E2]">Adaptive Notifications</span>
                       <span className="px-3 py-1 bg-[#D8B4E2]/10 border border-[#D8B4E2]/20 rounded-full text-xs font-semibold text-[#D8B4E2]">Predictive Planning</span>
                       <span className="px-3 py-1 bg-[#D8B4E2]/10 border border-[#D8B4E2]/20 rounded-full text-xs font-semibold text-[#D8B4E2]">Mood Check-ins</span>
                       <span className="px-3 py-1 bg-[#D8B4E2]/10 border border-[#D8B4E2]/20 rounded-full text-xs font-semibold text-[#D8B4E2]">Voice Commands</span>
                    </div>
                 </div>
                 <div className="flex-1 w-full glass-panel border border-[#D8B4E2]/20 rounded-2xl p-6 z-10 relative bg-[#070709]">
                    <div className="w-8 h-8 rounded-full bg-[#D8B4E2]/20 flex items-center justify-center mb-4 border border-[#D8B4E2]/50">
                       <div className="w-3 h-3 bg-[#D8B4E2] rounded-full animate-pulse shadow-[0_0_10px_#D8B4E2]"></div>
                    </div>
                    <p className="text-xs text-[#D8B4E2] font-semibold mb-2 uppercase tracking-widest">Adaptive Alert</p>
                    <p className="text-sm font-inter text-neutral-300 italic">"3:00 PM — Let's build with Web Workers today. Parallel work = real backend speed. Ship one clear improvement."</p>
                 </div>
             </div>

             {/* Wide Feature: Pro Todo System */}
             <div className="md:col-span-3 bg-[#1C1C1E]/40 border border-[#2ECC71]/20 rounded-[2rem] p-8 md:p-12 hover:bg-[#1C1C1E]/60 transition-all relative overflow-hidden flex flex-col md:flex-row gap-8 items-center group">
                 <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#2ECC71]/10 blur-[80px] group-hover:bg-[#2ECC71]/20 transition-all"></div>
                 <div className="flex-1 w-full glass-panel border border-[#2ECC71]/20 rounded-2xl p-6 z-10 relative bg-[#070709]">
                    <div className="flex items-center justify-between mb-4">
                       <p className="text-base font-bold text-white">Daily Reflection</p>
                       <span className="px-2 py-1 bg-[#2ECC71]/20 text-[#2ECC71] text-[10px] rounded uppercase font-bold border border-[#2ECC71]/30">Done</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-3">
                       <div className="h-full bg-[#2ECC71] w-[85%] shadow-[0_0_10px_rgba(46,204,113,0.8)]"></div>
                    </div>
                    <p className="text-xs text-neutral-400 font-semibold mb-1">85% tasks completed in deep work blocks.</p>
                 </div>
                 <div className="flex-1 z-10 order-first md:order-last">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                       ✅
                    </div>
                    <h3 className="text-3xl font-bold font-outfit mb-4">Structured Todo System</h3>
                    <p className="text-neutral-400 leading-relaxed font-inter text-lg mb-4">
                      Transform a standard to-do list into a proactive schedule. Time-Blocked Day Planning and Outcome Tracking keep you anchored to your biggest goals.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                       <span className="px-3 py-1 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold text-[#2ECC71]">Streaks & Progress</span>
                       <span className="px-3 py-1 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold text-[#2ECC71]">Smart Reminders</span>
                       <span className="px-3 py-1 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold text-[#2ECC71]">Time-Blocked Days</span>
                    </div>
                 </div>
             </div>

           </div>
        </section>

        {/* DOWNLOAD OPTIONS SECTION */}
        <section id="download" className="py-32 relative text-center">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#D8B4E2]/5 blur-[120px] pointer-events-none rounded-full"></div>

          <h2 className="text-4xl md:text-5xl font-black font-outfit text-white mb-6">Take control on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4E2] to-white">any device.</span></h2>
          <p className="text-lg text-neutral-400 font-inter max-w-2xl mx-auto mb-16">
            Download the native Clario app for your operating system. Seamlessly sync your blocked lists, focus sessions, and analytics across all your hardware.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            
            {/* Windows */}
            <a href="#" className="glass-panel hover:bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 transition-all hover:scale-105 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:text-[#2ECC71] transition-colors">
                 <WindowsIcon />
              </div>
              <div>
                <h4 className="font-bold text-white font-outfit">Windows</h4>
                <p className="text-xs text-neutral-500 font-inter mt-1">Windows 10 / 11</p>
              </div>
              <button className="mt-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-full w-full hover:bg-white/20 transition-colors">Download</button>
            </a>

            {/* macOS */}
            <a href="#" className="glass-panel hover:bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 transition-all hover:scale-105 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:text-[#2ECC71] transition-colors">
                 <AppleIcon />
              </div>
              <div>
                <h4 className="font-bold text-white font-outfit">macOS</h4>
                <p className="text-xs text-neutral-500 font-inter mt-1">Apple Silicon & Intel</p>
              </div>
              <button className="mt-2 text-sm font-semibold bg-[#2ECC71] text-black px-4 py-2 rounded-full w-full hover:bg-[#25a95d] transition-colors shadow-[0_0_15px_rgba(46,204,113,0.3)]">Download</button>
            </a>

            {/* Linux */}
            <a href="#" className="glass-panel hover:bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 transition-all hover:scale-105 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:text-[#2ECC71] transition-colors">
                 <LinuxIcon />
              </div>
              <div>
                <h4 className="font-bold text-white font-outfit">Linux</h4>
                <p className="text-xs text-neutral-500 font-inter mt-1">Debian / Ubuntu</p>
              </div>
              <button className="mt-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-full w-full hover:bg-white/20 transition-colors">Download</button>
            </a>

            {/* iOS */}
            <a href="#" className="glass-panel hover:bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 transition-all hover:scale-105 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:text-[#2ECC71] transition-colors">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <div>
                <h4 className="font-bold text-white font-outfit">iOS App</h4>
                <p className="text-xs text-neutral-500 font-inter mt-1">Requires iOS 15+</p>
              </div>
              <button className="mt-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-full w-full hover:bg-white/20 transition-colors">App Store</button>
            </a>

            {/* Android */}
            <a href="#" className="glass-panel hover:bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 transition-all hover:scale-105 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:text-[#2ECC71] transition-colors">
                 <AndroidIcon />
              </div>
              <div>
                <h4 className="font-bold text-white font-outfit">Android</h4>
                <p className="text-xs text-neutral-500 font-inter mt-1">Play Store Download</p>
              </div>
              <button className="mt-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-full w-full hover:bg-white/20 transition-colors">Google Play</button>
            </a>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#070709] py-12">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2ECC71]" />
              <span className="font-bold font-outfit text-white">Clario Focus Systems</span>
            </div>
            <div className="flex gap-6 text-sm text-neutral-400 font-inter flex-wrap justify-center">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Contact Support</a>
            </div>
            <div className="text-xs text-neutral-600 font-inter">
               © {new Date().getFullYear()} Clario. All rights reserved.
            </div>
         </div>
      </footer>

    </div>
  );
}
