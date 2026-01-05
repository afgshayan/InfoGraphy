
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
  ArrowRight,
  ExternalLink,
  Map,
  Activity
} from 'lucide-react';
import { InfoCard } from './components/InfoCard';
import { StatsCharts } from './components/StatsCharts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 bg-[#020617]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full" />
      </div>

      {/* Hero Header */}
      <header className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-bounce">
              <Activity size={14} />
              <span>2024 Intelligence Briefing</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
              <span className="text-white">UNDERSTANDING</span><br/>
              <span className="gradient-text">THE TTP THREAT</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              An analytical visual exploration of <span className="text-white italic">Tehrik-i-Taliban Pakistan</span> — its evolution, operations, and the 2024 security landscape.
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center group">
                Full Report <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="glass-light hover:bg-white/5 text-slate-300 font-bold px-8 py-4 rounded-full transition-all">
                Methodology
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Profile Section */}
        <section className="relative -mt-20 z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <InfoCard 
              title="Operational Head" 
              value="Noor Wali Mehsud" 
              icon={<Users size={20} />} 
              subtitle="Current Amir"
              accentColor="blue"
            />
            <InfoCard 
              title="Force Projection" 
              value="35,000+" 
              icon={<Target size={20} />} 
              subtitle="Active Militants"
              accentColor="red"
            />
            <InfoCard 
              title="District Reach" 
              value="26 Areas" 
              icon={<Map size={20} />} 
              subtitle="Influence Zone"
              accentColor="amber"
            />
            <InfoCard 
              title="Global Rating" 
              value="Tier 1" 
              icon={<ShieldAlert size={20} />} 
              subtitle="Threat Level"
              accentColor="slate"
            />
          </div>
        </section>

        {/* Data Analytics Display */}
        <section className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-4xl font-black text-white tracking-tight">DATA VISUALIZATION</h2>
              <p className="text-slate-500 font-medium mt-1">Comparing 2023 performance metrics against 2024 surges.</p>
            </div>
            <div className="flex space-x-4">
               <div className="text-right">
                  <p className="text-xs font-bold text-slate-500 uppercase">Growth</p>
                  <p className="text-xl font-black text-red-400">+91%</p>
               </div>
               <div className="text-right">
                  <p className="text-xs font-bold text-slate-500 uppercase">Incidents</p>
                  <p className="text-xl font-black text-blue-400">482</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
             <div className="lg:col-span-8">
                <StatsCharts deaths2023={293} deaths2024={558} share={52} />
             </div>
             <div className="lg:col-span-4 glass p-8 rounded-3xl flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <ShieldAlert size={200} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-4">Strategic Shifts</h3>
                   <div className="space-y-6">
                      <div className="flex space-x-4">
                         <div className="w-1 bg-red-500 rounded-full" />
                         <div>
                            <p className="text-sm font-bold text-slate-200 uppercase">Target Expansion</p>
                            <p className="text-sm text-slate-400">Shift from purely military to tactical government infrastructure.</p>
                         </div>
                      </div>
                      <div className="flex space-x-4">
                         <div className="w-1 bg-blue-500 rounded-full" />
                         <div>
                            <p className="text-sm font-bold text-slate-200 uppercase">Urban Penetration</p>
                            <p className="text-sm text-slate-400">Increasing operations within settled districts of Peshawar and Swat.</p>
                         </div>
                      </div>
                   </div>
                </div>
                <button className="mt-8 text-blue-400 font-bold text-sm flex items-center hover:underline">
                  Read Analysis <ArrowRight size={14} className="ml-1" />
                </button>
             </div>
          </div>
        </section>

        {/* Core Assets: Finance & Structure */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-[#0f172a] rounded-[2.5rem] p-10 border border-slate-800">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500">
                    <Network size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-white italic">The Network</h3>
                </div>
                <div className="space-y-8">
                  {[
                    { label: 'Supreme Council', desc: 'Rehnama-i-Shura oversees all political and military wings.' },
                    { label: 'Intelligence Wing', desc: 'Specialized units for surveillance and counter-espionage.' },
                    { label: 'Logistics', desc: 'Cross-border supply lines active through established corridors.' }
                  ].map((item, i) => (
                    <div key={i} className="flex space-x-4">
                      <span className="text-slate-700 font-black text-xl">0{i+1}</span>
                      <div>
                        <p className="text-slate-200 font-bold">{item.label}</p>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
           </div>

           <div className="space-y-8">
              <h2 className="text-5xl font-black text-white leading-none">ECONOMY OF<br/><span className="text-emerald-400 underline decoration-emerald-400/20">INSURGENCY</span></h2>
              <p className="text-slate-400 text-lg">Detailed ledger tracking of clandestine funding sources and financial resilience.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="glass-light p-6 rounded-2xl">
                    <DollarSign className="text-emerald-400 mb-4" size={24} />
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">External Grants</p>
                    <p className="text-2xl font-black text-white">$43k<span className="text-sm font-medium text-slate-500 ml-1">/mo</span></p>
                 </div>
                 <div className="glass-light p-6 rounded-2xl">
                    <TrendingUp className="text-blue-400 mb-4" size={24} />
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Extortion Tax</p>
                    <p className="text-2xl font-black text-white">Multi-M</p>
                 </div>
              </div>

              <div className="p-6 border border-slate-800 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-slate-700 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Funding Report 2024</p>
                    <p className="text-xs text-slate-500 italic">PDF Download • 4.2MB</p>
                  </div>
                </div>
                <ArrowRight className="text-slate-600 group-hover:text-white transition-colors" />
              </div>
           </div>
        </section>

        {/* Timeline - Editorial Style */}
        <section className="mt-40">
           <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-white mb-4">CRITICAL FLASHPOINTS</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto" />
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden lg:block" />
              
              <div className="lg:text-right relative">
                 <div className="hidden lg:block absolute -right-10 top-2 w-4 h-4 rounded-full bg-blue-500 ring-8 ring-blue-500/10" />
                 <p className="text-blue-500 font-black text-4xl mb-2">2012</p>
                 <h4 className="text-2xl font-bold text-white mb-4 italic">The Swat Silencing</h4>
                 <p className="text-slate-400 leading-relaxed max-w-md ml-auto">
                    The targeted attack on Malala Yousafzai served as a brutal declaration of the group's stance against educational emancipation in the region.
                 </p>
              </div>

              <div className="relative pt-12 lg:pt-0">
                 <div className="hidden lg:block absolute -left-10 top-2 w-4 h-4 rounded-full bg-red-600 ring-8 ring-red-600/10" />
                 <p className="text-red-500 font-black text-4xl mb-2">2014</p>
                 <h4 className="text-2xl font-bold text-white mb-4 italic">APS Peshawar Siege</h4>
                 <p className="text-slate-400 leading-relaxed max-w-md">
                    A watershed moment in Pakistani history. The brutality of the school attack forced a total realignment of national security doctrine.
                 </p>
              </div>
           </div>
        </section>

        {/* Propaganda Engine */}
        <section className="mt-40 rounded-[3rem] p-12 bg-gradient-to-br from-slate-900 to-black border border-slate-800 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://picsum.photos/800/800?grayscale')] opacity-10 bg-cover mix-blend-overlay" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <div className="p-3 bg-blue-600/10 w-fit rounded-2xl text-blue-500 mb-6">
                  <Mic2 size={32} />
                </div>
                <h2 className="text-4xl font-black text-white mb-6">THE MEDIA<br/>APPARATUS</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Evolution from local pamphlets to a sophisticated digital media network including 'Umar Studio'.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  {['Digital', 'Satellite', 'FM Radio', 'Print'].map(item => (
                    <div key={item} className="px-4 py-2 border border-slate-700 rounded-xl text-xs font-bold text-slate-300 uppercase tracking-widest">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-[2rem] border-white/5">
                <p className="text-blue-400 font-bold mb-4 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                  Umar Studio Stats
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                    <span className="text-slate-500">Video Releases / Year</span>
                    <span className="text-xl font-bold text-white">240+</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                    <span className="text-slate-500">Language Coverage</span>
                    <span className="text-xl font-bold text-white">Pashto, Urdu, English</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                    <span className="text-slate-500">Network Nodes</span>
                    <span className="text-xl font-bold text-white">5 Sections</span>
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="mt-40 pb-20 border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white">WA</div>
            <div>
              <p className="text-white font-bold text-sm">World Anti-Extremism Network</p>
              <p className="text-slate-500 text-xs tracking-widest uppercase">Intelligence Division</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-12">
            <div className="text-center md:text-right">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Update Status</p>
              <p className="text-white font-black">ACTIVE MONITORING</p>
            </div>
            <div className="flex space-x-4">
               <div className="p-2 glass-light rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer">
                 <Info size={20} />
               </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
