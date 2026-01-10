
import React from 'react';
import { 
  Users, ShieldAlert, Target, TrendingUp, DollarSign, Network, 
  History, Info, Zap, MapPin, Globe, Activity, Crosshair, 
  Flag, ChevronRight, Skull, AlertTriangle, Layers, Maximize, Lock, Eye
} from 'lucide-react';
import { ActivityChart, FundingPie } from './components/StatsCharts';
import { InfoCard } from './components/InfoCard';

const App: React.FC = () => {
  const activityData = [
    { year: '2019', attacks: 82, deaths: 150 },
    { year: '2020', attacks: 46, deaths: 56 },
    { year: '2021', attacks: 87, deaths: 158 },
    { year: '2022', attacks: 179, deaths: 250 },
    { year: '2023', attacks: 210, deaths: 288 },
    { year: '2024', attacks: 482, deaths: 558 },
    { year: '2025', attacks: 605, deaths: 217 }
  ];

  return (
    <div className="min-h-screen pb-32">
      {/* Enhanced Cinematic Full-Width Header */}
      <header className="relative w-full pt-24 pb-32 px-4 md:px-12 overflow-hidden mb-32 min-h-[70vh] flex flex-col justify-center">
        {/* Tactical Background Layer - Full Width */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute inset-0 topo-bg opacity-40"></div>
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="scanline"></div>
          
          {/* Decorative Corner HUD Elements (Icons only as requested) */}
          <div className="absolute top-12 left-12 text-blue-500/20">
            <Maximize size={24} />
          </div>
          <div className="absolute top-12 right-12 text-red-500/20">
            <Lock size={24} />
          </div>
          <div className="absolute bottom-12 left-12 text-slate-500/20">
            <Eye size={24} />
          </div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 text-center space-y-12 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col items-center">
            <div className="w-20 h-1 bg-red-600 mb-10 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
            
            <h1 className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl lg:text-8xl font-heading font-black tracking-tighter leading-none header-title-gradient drop-shadow-2xl uppercase italic">
                Tehrik-i-Taliban Pakistan
              </span>
              <span className="mt-6 text-2xl md:text-3xl lg:text-5xl text-red-600 title-spacing font-mono font-black opacity-100">
                (T T P)
              </span>
            </h1>
            
            <div className="w-64 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent mt-12 opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-20 px-4">
            <div className="group relative">
               <div className="absolute -inset-0.5 bg-blue-600 rounded-[2.5rem] opacity-10 blur-xl group-hover:opacity-30 transition duration-700"></div>
               <div className="relative dark-section-card p-10 rounded-[2.5rem] text-left border border-white/5 flex items-center space-x-8 overflow-hidden backdrop-blur-sm">
                  <div className="shrink-0 p-5 rounded-2xl bg-blue-600/10 text-blue-500 border border-blue-500/10">
                    <History size={32} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-2">Operational Since</h3>
                    <p className="text-3xl font-black text-white leading-tight">Dec 2007</p>
                  </div>
               </div>
            </div>

            <div className="group relative">
               <div className="absolute -inset-0.5 bg-red-600 rounded-[2.5rem] opacity-10 blur-xl group-hover:opacity-30 transition duration-700"></div>
               <div className="relative dark-section-card p-10 rounded-[2.5rem] text-left border border-white/5 flex items-center space-x-8 overflow-hidden backdrop-blur-sm">
                  <div className="shrink-0 p-5 rounded-2xl bg-red-600/10 text-red-500 border border-red-500/10">
                    <Users size={32} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-red-400 uppercase tracking-[0.3em] mb-2">Primary Founder</h3>
                    <p className="text-3xl font-black text-white leading-tight">Baitullah Mehsud</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 space-y-32">
        {/* Leadership Timeline */}
        <section className="space-y-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20"><Users size={24} /></div>
            <h2 className="text-4xl font-heading font-black text-slate-900 tracking-tight">THE LEADERSHIP SUCCESSION</h2>
            <div className="w-24 h-1 bg-blue-600/10 rounded-full" />
          </div>
          
          <div className="relative pt-12 pb-16 overflow-x-auto custom-scrollbar">
            <div className="flex min-w-[1000px] justify-between items-start relative px-10">
              <div className="absolute top-[46px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-600/5 via-blue-600/40 to-blue-600/5 -z-10 rounded-full" />
              
              {[
                { year: '2007–2009', name: 'Baitullah Mehsud', status: 'Killed in CIA Strike' },
                { year: '2009–2013', name: 'Hakimullah Mehsud', status: 'Killed in Drone Strike' },
                { year: '2013–2018', name: 'Mullah Fazlullah', status: 'Killed in Drone Strike' },
                { year: '2018–Present', name: 'Noor Wali Mehsud', status: 'Active Commander' }
              ].map((leader, i) => (
                <div key={i} className="flex-1 relative px-8 text-center group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-blue-600 mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <span className="font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-2">{leader.year}</p>
                  <p className="text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{leader.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{leader.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Profile Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoCard 
            title="Tactical Strength" 
            value="~6,000 Fighters" 
            icon={<Skull size={32} />} 
            accentColor="red"
            subtitle="Estimated"
          />
          <InfoCard 
            title="Primary Ideology" 
            value="Radical Deobandi Salafism" 
            icon={<Layers size={32} />} 
            accentColor="blue"
            subtitle="Theological"
          />
          <InfoCard 
            title="Political Goal" 
            value="Sharia-Based Islamic State" 
            icon={<Flag size={32} />} 
            accentColor="amber"
            subtitle="Strategic"
          />
          <InfoCard 
            title="Operational Shift" 
            value="Targeting Security Forces" 
            icon={<Crosshair size={32} />} 
            accentColor="emerald"
            subtitle="Recent"
          />
        </section>

        {/* Organizational Structure */}
        <section className="dark-section-card p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Network size={600} className="absolute -bottom-40 -right-40 text-blue-500 group-hover:scale-110 transition-transform duration-1000" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="inline-flex p-5 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-4">
              <Network size={40} />
            </div>
            <h2 className="text-5xl font-heading font-black tracking-tight uppercase">Shadow Governance</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-4xl font-bold text-white leading-tight">A Parallel State Infrastructure</p>
              <p className="text-xl text-slate-400 font-medium">Divided into 9 shadow provinces, each managed by appointed governors, specialized ministries, and judicial courts.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
               {["Intelligence", "Finance", "Information", "Education", "Health", "Judiciary"].map((dept, idx) => (
                 <span key={idx} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-slate-300">
                   {dept} Wing
                 </span>
               ))}
            </div>
          </div>
        </section>

        {/* Operational Footprint */}
        <section className="space-y-16">
          <div className="flex items-center space-x-6">
            <div className="p-4 glass-card rounded-2xl text-amber-600 shadow-xl shadow-amber-500/10"><MapPin size={32} /></div>
            <h2 className="text-4xl font-heading font-black text-slate-900 uppercase tracking-tight">Operational Footprint</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              {[
                { province: "Khyber Pakhtunkhwa", status: "Active Epicenter", desc: "Core base of operations and majority of attack volume.", color: "bg-red-600", val: "78%" },
                { province: "Balochistan", status: "Strategic Hub", desc: "Fluctuating intensity (5-24 annual major incidents).", color: "bg-orange-500", val: "14%" },
                { province: "Punjab", status: "Emerging Front", desc: "Rising activity: 9 attacks in 2023 to 19+ in 2024.", color: "bg-amber-500", val: "6%" },
                { province: "Sindh", status: "Isolated Urban", desc: "Mainly focused on financial/targeted strikes in Karachi.", color: "bg-yellow-500", val: "2%" }
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 rounded-[2.5rem] border-l-[10px] flex items-center justify-between" style={{ borderLeftColor: item.color.replace('bg-', '') === 'red-600' ? '#dc2626' : item.color.replace('bg-', '') === 'orange-500' ? '#f97316' : item.color.replace('bg-', '') === 'amber-500' ? '#f59e0b' : '#eab308' }}>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-xl font-black text-slate-900">{item.province}</span>
                      <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full text-white ${item.color}`}>{item.status}</span>
                    </div>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-slate-900">{item.val}</span>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Share</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-7 glass-card p-16 rounded-[4rem] relative overflow-hidden bg-slate-50/50 flex flex-col justify-center border-none shadow-inner border border-slate-200">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                  <Globe size={600} />
               </div>
               <div className="space-y-10 relative z-10">
                  <div className="space-y-2">
                     <h3 className="text-3xl font-black text-slate-900">Regional Threat Density</h3>
                     <p className="text-slate-500 font-medium">Heatmap distribution of TTP operational capability</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4">
                        <div className="w-5 h-5 rounded-full bg-red-600 shadow-lg shadow-red-500/20" />
                        <div>
                          <p className="text-sm font-bold text-slate-900">High Intensity</p>
                          <p className="text-[10px] text-slate-400 uppercase font-black">KPK & Border Areas</p>
                        </div>
                     </div>
                     <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4">
                        <div className="w-5 h-5 rounded-full bg-orange-500 shadow-lg shadow-orange-500/20" />
                        <div>
                          <p className="text-sm font-bold text-slate-900">Medium Intensity</p>
                          <p className="text-[10px] text-slate-400 uppercase font-black">Balochistan Sector</p>
                        </div>
                     </div>
                     <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4">
                        <div className="w-5 h-5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/20" />
                        <div>
                          <p className="text-sm font-bold text-slate-900">Low/Strategic</p>
                          <p className="text-[10px] text-slate-400 uppercase font-black">Punjab & Urban Sindh</p>
                        </div>
                     </div>
                     <div className="p-6 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-500/20 flex items-center space-x-4">
                        <Activity size={24} />
                        <div>
                          <p className="text-sm font-bold">Dynamic Shift</p>
                          <p className="text-[10px] uppercase font-black opacity-80">Increased Lethality</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Activity Stats */}
        <section className="space-y-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="p-4 glass-card rounded-2xl text-red-600 shadow-xl shadow-red-500/10"><TrendingUp size={32} /></div>
              <h2 className="text-4xl font-heading font-black text-slate-900 uppercase tracking-tight">Attack Dynamics (2019-2025)</h2>
            </div>
          </div>
          
          <div className="dark-section-card p-12 md:p-20 rounded-[4rem] space-y-16">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-4 text-emerald-400 font-bold bg-white/5 px-8 py-4 rounded-3xl border border-white/10">
                <AlertTriangle size={24} />
                <span className="text-xl">Highest death toll since 2011 (52% of total domestic terror deaths)</span>
              </div>
            </div>
            
            <div className="bg-white/[0.03] p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
              <div className="absolute top-8 right-8 text-right opacity-40">
                <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-slate-400">Visualization</p>
                <p className="text-xs font-bold text-white">Lethality vs Frequency</p>
              </div>
              <ActivityChart data={activityData} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:bg-white/[0.08] transition-colors">
                 <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Historical Data</h4>
                 <p className="text-2xl font-bold leading-tight">Activity surging to post-2014 levels across all indices</p>
              </div>
              <div className="p-10 bg-red-600 rounded-[2.5rem] shadow-2xl shadow-red-600/20 text-white">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-80">2024 Audit</h4>
                 <p className="text-5xl font-black mb-1">482 Attacks</p>
                 <p className="text-2xl font-bold opacity-90">558 Fatalities</p>
              </div>
              <div className="p-10 bg-blue-600 rounded-[2.5rem] shadow-2xl shadow-blue-600/20 text-white">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-80">2025 Projection</h4>
                 <p className="text-5xl font-black mb-1">605 Attacks</p>
                 <p className="text-2xl font-bold opacity-90">217 Fatalities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Weapons & Military Grade Hardware */}
        <section className="glass-card p-16 md:p-24 rounded-[4rem] relative overflow-hidden group border-none shadow-2xl bg-gradient-to-br from-slate-50 to-white">
          <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
            <ShieldAlert size={300} className="text-slate-900" />
          </div>
          <div className="relative z-10 space-y-16">
            <div className="space-y-4">
               <div className="w-16 h-1 bg-red-600 rounded-full" />
               <h2 className="text-5xl font-heading font-black text-slate-900 uppercase">Weaponry & Technical Lethality</h2>
               <p className="text-xl text-slate-500 font-medium max-w-3xl">Surplus military-grade equipment from NATO withdrawals has significantly enhanced TTP's night-fighting and long-range engagement capabilities.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { label: "Modern Sniper Units", value: "M24 Rifles with Thermal Scopes", color: "blue", desc: "Allows precision strikes in total darkness." },
                { label: "Close Quarters", value: "M4 Carbines with Trijicon ACOG", color: "amber", desc: "Standardized tactical optics for urban warfare." },
                { label: "Heavy Assault", value: "M16A4 Platforms", color: "red", desc: "Long-range semi-automatic fire capability." }
              ].map((weapon, i) => (
                <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                   <div className={`w-10 h-10 rounded-xl mb-6 bg-${weapon.color}-600/10 flex items-center justify-center text-${weapon.color}-600`}>
                     <Zap size={20} />
                   </div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{weapon.label}</p>
                   <p className="text-2xl font-black text-slate-900 mb-3">{weapon.value}</p>
                   <p className="text-sm text-slate-500">{weapon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notable Attacks Timeline (Redesigned) */}
        <section className="space-y-16">
          <div className="flex items-center space-x-6">
            <div className="p-4 glass-card rounded-2xl text-red-600 shadow-xl shadow-red-500/10"><History size={32} /></div>
            <h2 className="text-4xl font-heading font-black text-slate-900 uppercase tracking-tight">Timeline of Major Incidents</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-1 before:bg-slate-100">
            {[
              { date: "March 2009", title: "Lahore Police Academy Attack", impact: "8 Killed, 100+ Wounded", color: "red" },
              { date: "Oct 2012", title: "Shooting of Malala Yousafzai", impact: "Provoked Global Outrage", color: "blue" },
              { date: "Dec 2014", title: "APS Peshawar Massacre", impact: "130+ Students Martyred", color: "red" },
              { date: "April 2021", title: "Quetta Hotel Bombing", impact: "Targeting Foreign Dignitaries", color: "amber" }
            ].map((attack, i) => (
              <div key={i} className="relative pl-24 group">
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full border-4 border-white bg-slate-300 group-hover:bg-red-600 transition-colors z-10" />
                <div className="glass-card p-10 rounded-[3rem] border-l-[12px] border-l-red-600 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <span className="text-red-600 font-mono font-bold text-xl uppercase tracking-tighter bg-red-50 px-4 py-1 rounded-full w-fit">{attack.date}</span>
                    <h4 className="font-black text-3xl text-slate-900">{attack.title}</h4>
                  </div>
                  <p className="text-xl text-slate-500 font-bold italic border-l-4 border-slate-200 pl-6">{attack.impact}</p>
                </div>
              </div>
            ))}
            <div className="pl-24">
              <button className="flex items-center space-x-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.4em] hover:text-red-600 transition-colors">
                <span>View Extended Incident Database</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* Funding Sources */}
        <section className="space-y-16">
          <div className="flex items-center space-x-6">
            <div className="p-4 glass-card rounded-2xl text-emerald-600 shadow-xl shadow-emerald-500/10"><DollarSign size={32} /></div>
            <h2 className="text-4xl font-heading font-black text-slate-900 uppercase tracking-tight">Financing the Insurgency</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 glass-card p-16 rounded-[4rem] border-none shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black mb-8 text-slate-900">Capital Flow Estimates</h3>
                <FundingPie />
              </div>
              <div className="mt-12 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-400">Total estimated annual budget</span>
                  <span className="font-black text-emerald-600">US $150M+</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[85%]" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-8 overflow-y-auto max-h-[700px] custom-scrollbar pr-6">
               {[
                 { title: "Foreign & Domestic Patronage (~50%)", items: ["Protection rackets Targeting KP Ministers", "Extortion demands reaching up to $36k+ per official", "Donations via Al-Qaeda connected networks"], color: "emerald" },
                 { title: "Narcotics Trafficking (~30%)", items: ["Heroin transit via Karachi to global markets", "Distribution network reach into China and UAE", "Laundering profits back to frontline commanders"], color: "blue" },
                 { title: "Shadow Economy Extraction", items: ["'Jizya' and 'Zakat' taxes in border regions", "Exploitation of Swat Valley timber ($100M historical impact)", "Illegal mining of precious stones and minerals"], color: "amber" }
               ].map((source, i) => (
                 <div key={i} className="glass-card p-10 rounded-[3rem] border-t-8 shadow-md" style={{ borderTopColor: source.color === 'emerald' ? '#10b981' : source.color === 'blue' ? '#2563eb' : '#f59e0b' }}>
                    <h4 className="font-black text-slate-900 text-2xl mb-6">{source.title}</h4>
                    <ul className="space-y-4">
                      {source.items.map((item, idx) => (
                        <li key={idx} className="text-base text-slate-600 flex items-start space-x-4">
                          <div className={`w-2 h-2 rounded-full mt-2 shrink-0 bg-${source.color}-500`} />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Sources & References */}
        <footer className="pt-24 border-t border-slate-200 space-y-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <Info size={32} className="text-slate-300" />
            <h2 className="text-xs font-black uppercase text-slate-400 tracking-[0.5em]">Intelligence Dossier Reference</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-6 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
             {[
               "UN Security Council S/2021/486",
               "CTC Sentinel Vol. 16, Issue 4",
               "Center for Research & Security Studies (CRSS)",
               "Global Terrorism Database (GTD)",
               "Pak Institute for Peace Studies (PIPS)",
               "US Institute of Peace Strategic Report",
               "The Diplomat Intelligence Briefings",
               "Al Jazeera Investigative Unit",
               "Institute for Economics & Peace (IEP)",
               "Geo News Open Source Intelligence",
               "South Asia Terrorism Portal (SATP)"
             ].map((source, i) => (
               <div key={i} className="flex items-center space-x-3 group">
                 <span className="w-1.5 h-1.5 bg-slate-200 rounded-full group-hover:bg-blue-600 transition-colors" />
                 <span className="group-hover:text-slate-600 transition-colors">{source}</span>
               </div>
             ))}
          </div>
          
          <div className="text-center pt-12">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[1em]">END OF BRIEFING</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
