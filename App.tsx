
import React from 'react';
import { 
  Users, 
  ShieldAlert, 
  Target, 
  TrendingUp, 
  DollarSign, 
  Network, 
  Mic2, 
  History,
  Info,
  ArrowUpRight,
  Globe,
  Zap,
  Lock,
  Layers
} from 'lucide-react';
import { InfoCard } from './components/InfoCard';
import { StatsCharts } from './components/StatsCharts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-32">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-slate-950/50 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black italic">T</div>
          <span className="font-heading font-bold tracking-tighter text-xl">INTEL-DB</span>
        </div>
        <div className="hidden md:flex space-x-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#" className="hover:text-blue-400 transition-colors">Overview</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Tactics</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Finance</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Chronology</a>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest animate-pulse">
          Live Threat Level: High
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-3 mb-8 py-2 px-5 glass-card rounded-full border-blue-500/20">
            <Globe size={14} className="text-blue-400 animate-spin-slow" />
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">Operational Intelligence Report 2024</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tighter leading-none mb-10">
            <span className="opacity-40">INSIDE THE</span><br/>
            <span className="stats-gradient">TTP NETWORK</span>
          </h1>
          
          <p className="max-w-3xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
            A deep-dive into the command structure, financial veins, and tactical shifts of the <span className="text-white">Tehrik-i-Taliban Pakistan</span> amidst their 2024 operational surge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center group">
              Download Full Dossier <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </button>
            <button className="px-10 py-5 glass-card hover:bg-white/5 text-white font-bold rounded-2xl transition-all">
              Interactive Map
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Rapid Response Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard 
            title="Active Commands" 
            value="35,000" 
            icon={<Users size={20} />} 
            subtitle="Personnel"
            accentColor="blue"
          />
          <InfoCard 
            title="Attack Frequency" 
            value="482" 
            icon={<Zap size={20} />} 
            subtitle="2024 Count"
            accentColor="red"
          />
          <InfoCard 
            title="Shadow Districts" 
            value="26" 
            icon={<Layers size={20} />} 
            subtitle="Governance"
            accentColor="amber"
          />
          <InfoCard 
            title="Status Rating" 
            value="TIER 1" 
            icon={<ShieldAlert size={20} />} 
            subtitle="Security Level"
            accentColor="emerald"
          />
        </section>

        {/* Tactical Shift Analysis */}
        <section className="glass-card rounded-[3rem] p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[100px]" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="text-4xl font-heading font-black mb-4">TACTICAL SURGE</h2>
                <p className="text-slate-500 font-medium">Casualty metrics indicate a <span className="text-red-500 font-bold">+91%</span> escalation compared to previous annual cycles.</p>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400 text-sm font-bold">2023 Casualties</span>
                  <span className="text-xl font-bold">293</span>
                </div>
                <div className="p-5 bg-red-500/10 rounded-2xl border border-red-500/20 flex items-center justify-between">
                  <span className="text-red-400 text-sm font-bold">2024 Casualties</span>
                  <span className="text-2xl font-black">558</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <StatsCharts deaths2023={293} deaths2024={558} share={52} />
            </div>
          </div>
        </section>

        {/* Detailed Assets Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card rounded-[2.5rem] p-10 group cursor-default">
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 border border-emerald-500/20">
                <DollarSign size={28} />
              </div>
              <h3 className="text-2xl font-heading font-black">FINANCIAL ARTERIES</h3>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Core Support</span>
                  <span className="text-emerald-400 font-black">$43k / month</span>
                </div>
                <p className="text-sm text-slate-400 italic">Discreet funding via the Mehsud familial network within the Afghan border regions.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 glass-card rounded-2xl border-white/5 hover:border-white/10 transition-all">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Taxation</p>
                  <p className="font-bold text-white">Extortion Ops</p>
                </div>
                <div className="p-5 glass-card rounded-2xl border-white/5 hover:border-white/10 transition-all">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Logistics</p>
                  <p className="font-bold text-white">Illegal Trade</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[2.5rem] p-10">
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 border border-blue-500/20">
                <Network size={28} />
              </div>
              <h3 className="text-2xl font-heading font-black">CHAIN OF COMMAND</h3>
            </div>
            <div className="space-y-6">
              {[
                { title: "Rehnama-i-Shura", label: "Supreme Decision-Making Body" },
                { title: "Special Istishhadi", label: "Elite Readiness & Training Unit" },
                { title: "Umar Studio", label: "Propaganda & Media Commission" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-4 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center font-black text-slate-700 bg-slate-800 rounded-xl">0{idx+1}</div>
                  <div>
                    <p className="text-sm font-black text-white">{item.title}</p>
                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Propaganda Section */}
        <section className="relative overflow-hidden rounded-[3rem] p-16 bg-slate-900 border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 text-blue-400 mb-6 font-black text-xs uppercase tracking-[0.3em]">
                <Mic2 size={16} />
                <span>Media Warfare</span>
              </div>
              <h2 className="text-5xl font-heading font-black mb-8 leading-tight">THE DIGITAL<br/>FRONTLINE</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                TTP's propaganda has evolved into a highly coordinated system, utilizing multiple languages and digital platforms to maintain radicalization corridors.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Urdu', 'Pashto', 'English', 'Arabic'].map(lang => (
                  <span key={lang} className="px-5 py-2 glass-card rounded-xl text-xs font-bold text-slate-300">{lang}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 glass-card rounded-3xl border-blue-500/10">
                <Lock className="text-blue-500 mb-4" size={24} />
                <h4 className="font-black mb-2 text-xl">Umar Studio</h4>
                <p className="text-slate-500 text-sm">Founded in 2006, it serves as the core content production hub.</p>
              </div>
              <div className="p-8 glass-card rounded-3xl border-amber-500/10">
                <TrendingUp className="text-amber-500 mb-4" size={24} />
                <h4 className="font-black mb-2 text-xl">240+ Releases</h4>
                <p className="text-slate-500 text-sm">Average annual video production count for recruitment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* History Flashpoints */}
        <section>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-heading font-black text-white mb-4">CHRONOLOGY OF ATTACK</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="space-y-10">
            {[
              { year: "2012", title: "Target: Malala Yousafzai", desc: "A brutal assassination attempt that sparked global outrage and defined the TTP's stance on education.", color: "blue" },
              { year: "2014", title: "APS Peshawar Massacre", desc: "130+ students killed. The deadliest incident in Pakistani history, fundamentally altering counter-terror strategy.", color: "red" }
            ].map((event, idx) => (
              <div key={idx} className="group relative glass-card p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center border-l-4 transition-all duration-500" style={{ borderLeftColor: event.color === 'red' ? '#ef4444' : '#3b82f6' }}>
                <div className={`text-6xl font-black italic opacity-20 ${event.color === 'red' ? 'text-red-500' : 'text-blue-500'}`}>{event.year}</div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black mb-2">{event.title}</h4>
                  <p className="text-slate-400 max-w-2xl">{event.desc}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white transition-colors">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-8 h-8 glass-card rounded-lg flex items-center justify-center font-black text-[10px]">WA</div>
            <p className="text-xs font-bold uppercase tracking-widest">World Anti-Extremism Network © 2024</p>
          </div>
          <div className="flex space-x-12 items-center">
            <div className="text-center md:text-right">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Data Integrity</p>
              <p className="text-xs font-bold text-blue-400">Verified Intel Ops</p>
            </div>
            <div className="p-3 glass-card rounded-xl">
              <Info size={18} />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
