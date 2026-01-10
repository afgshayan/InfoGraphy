
import React from 'react';
import { 
  Users, TrendingUp, DollarSign, Network, History, Info, Zap, MapPin, 
  Globe, Activity, Crosshair, Flag, ChevronRight, Skull, AlertTriangle, 
  Layers, ShieldCheck, Target, HeartPulse, Building2, Landmark, 
  Flame, Bomb, Plane, ExternalLink, Briefcase, Gem
} from 'lucide-react';
import { ActivityChart, FundingPie, AttackTypePie } from './components/StatsCharts';
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
    <div className="min-h-screen">
      {/* PROFESSIONAL LIGHT HEADER */}
      <header className="relative w-full pt-20 pb-28 px-4 md:px-12 overflow-hidden border-b border-slate-200 bg-slate-100">
        <div className="absolute inset-0 z-0 topo-bg opacity-100"></div>
        <div className="absolute inset-0 z-0 hero-gradient-light"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-500/20">
            Intelligence Dossier: TTP Profile
          </div>
          
          <h1 className="flex flex-col items-center mb-8">
            <span className="text-4xl md:text-6xl lg:text-8xl font-heading font-black tracking-tighter leading-none header-title-gradient uppercase">
              Tehrik-i-Taliban Pakistan
            </span>
            <span className="mt-4 text-3xl md:text-4xl lg:text-5xl text-red-600 title-spacing font-mono font-black">
              (T T P)
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
            <div className="glass-card p-8 rounded-[2rem] text-left flex items-center space-x-6">
              <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-xl">
                <History size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Formation</p>
                <p className="text-2xl font-black text-slate-900">Dec 2007</p>
                <p className="text-xs text-slate-500">Alliance of militant groups</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-[2rem] text-left flex items-center space-x-6">
              <div className="p-4 bg-red-600 text-white rounded-2xl shadow-xl">
                <Users size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Founder</p>
                <p className="text-2xl font-black text-slate-900">Baitullah Mehsud</p>
                <p className="text-xs text-slate-500">Centralized Command</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* LEADERSHIP TIMELINE */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-32 space-y-40">
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-heading font-black text-slate-900 tracking-tight uppercase">Leadership Succession</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Tracking the shift in high command since inception</p>
          </div>
          
          <div className="relative pt-10 pb-16 overflow-x-auto custom-scrollbar">
            <div className="flex min-w-[1000px] justify-between relative px-10">
              <div className="absolute top-[32px] left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10" />
              {[
                { year: '2007–2009', name: 'Baitullah Mehsud', status: 'Founder / Killed' },
                { year: '2009–2013', name: 'Hakimullah Mehsud', status: 'Killed in Drone Strike' },
                { year: '2013–2018', name: 'Mullah Fazlullah', status: 'Killed in Airstrike' },
                { year: '2018–Present', name: 'Noor Wali Mehsud', status: 'Current Emir' }
              ].map((leader, i) => (
                <div key={i} className="flex-1 text-center px-4">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-xl transition-all duration-300 ${i === 3 ? 'bg-red-600 text-white' : 'bg-slate-900 text-white'}`}>
                    <Skull size={24} />
                  </div>
                  <p className="text-red-600 font-bold text-xs uppercase mb-1">{leader.year}</p>
                  <p className="text-xl font-black text-slate-900 leading-tight">{leader.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{leader.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE PROFILE GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoCard title="Operational Strength" value="~6,000 Fighters" icon={<Skull />} accentColor="red" subtitle="Combat Ready" />
          <InfoCard title="Primary Ideology" value="Radical Deobandi" icon={<Layers />} accentColor="blue" subtitle="Theological" />
          <InfoCard title="Core Objective" value="Establish Islamic State" icon={<Flag />} accentColor="amber" subtitle="Overthrow Secular Gov" />
          <InfoCard title="Strategic Shift" value="Targeting Security" icon={<Target />} accentColor="emerald" subtitle="Since 2018" />
        </section>

        {/* SHADOW GOVERNANCE */}
        <section className="dark-section-card p-16 md:p-24 rounded-[3rem] relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-10 opacity-10"><Network size={400} /></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase">Shadow Governance</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Operating a parallel state with <span className="text-white font-bold">9 shadow provinces</span>. Each managed by appointed governors, ministries, and specialized judicial courts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {['Interior', 'Finance', 'Propaganda', 'Judiciary', 'Intelligence', 'Health'].map(m => (
                <span key={m} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest">{m} Ministry</span>
              ))}
            </div>
          </div>
        </section>

        {/* GEOGRAPHY HEATMAP */}
        <section className="space-y-16">
          <div className="flex items-center space-x-6">
            <div className="p-4 glass-card rounded-2xl text-amber-600"><MapPin size={32} /></div>
            <h2 className="text-4xl font-heading font-black text-slate-900 uppercase">Operational Footprint</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card p-8 rounded-[2rem] flex items-center justify-between border-l-8 border-red-600">
                <div>
                  <h4 className="text-xl font-black">Khyber Pakhtunkhwa</h4>
                  <p className="text-sm text-slate-500">Core Epicenter & Base</p>
                </div>
                <div className="px-4 py-2 bg-red-100 text-red-600 font-black rounded-xl">HEATMAP: HIGH</div>
              </div>
              <div className="glass-card p-8 rounded-[2rem] flex items-center justify-between border-l-8 border-orange-500">
                <div>
                  <h4 className="text-xl font-black">Balochistan</h4>
                  <p className="text-sm text-slate-500">5–24 attacks annually</p>
                </div>
                <div className="px-4 py-2 bg-orange-100 text-orange-600 font-black rounded-xl">MED</div>
              </div>
              <div className="glass-card p-8 rounded-[2rem] flex items-center justify-between border-l-8 border-yellow-500">
                <div>
                  <h4 className="text-xl font-black">Punjab</h4>
                  <p className="text-sm text-slate-500">9 in '23 → 19 in '24</p>
                </div>
                <div className="px-4 py-2 bg-yellow-100 text-yellow-600 font-black rounded-xl">NEW THEATER</div>
              </div>
              <div className="glass-card p-8 rounded-[2rem] flex items-center justify-between border-l-8 border-yellow-300">
                <div>
                  <h4 className="text-xl font-black">Sindh (Karachi)</h4>
                  <p className="text-sm text-slate-500">2 in '23 → 5 in '24</p>
                </div>
                <div className="px-4 py-2 bg-yellow-50 text-yellow-400 font-black rounded-xl">LOW</div>
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-inner flex flex-col justify-center text-center space-y-8">
              <Globe className="mx-auto text-slate-200" size={120} />
              <div>
                <h3 className="text-2xl font-black mb-4 uppercase">Regional Attack Distribution</h3>
                <p className="text-slate-500">Visualizing the spread from tribal border regions to urban centers like Lahore and Karachi.</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl">
                   <AlertTriangle className="mx-auto mb-2 text-red-600" />
                   <p className="text-[10px] font-black uppercase tracking-widest">KPK: Red Zone</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                   <Target className="mx-auto mb-2 text-orange-500" />
                   <p className="text-[10px] font-black uppercase tracking-widest">Balochistan Sector</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                   <Activity className="mx-auto mb-2 text-yellow-500" />
                   <p className="text-[10px] font-black uppercase tracking-widest">Punjab Front</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVITY STATS */}
        <section className="space-y-16">
          <div className="flex items-center space-x-6">
            <div className="p-4 glass-card rounded-2xl text-red-600"><TrendingUp size={32} /></div>
            <h2 className="text-4xl font-heading font-black text-slate-900 uppercase">Trend Analysis (2019-2025)</h2>
          </div>
          
          <div className="dark-section-card p-12 md:p-20 rounded-[3rem] space-y-12">
            <div className="flex items-center space-x-4 p-6 bg-red-600/10 border border-red-600/20 rounded-2xl text-red-400">
              <AlertTriangle />
              <p className="text-lg font-bold">52% of all terrorism-related deaths in Pakistan (2024) linked to TTP.</p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5">
              <ActivityChart data={activityData} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">2024 Historical Peak</p>
                <p className="text-4xl font-black">482 Attacks</p>
                <p className="text-slate-400 mt-2">Highest ever frequency; deaths highest since 2011.</p>
              </div>
              <div className="p-8 bg-red-600 rounded-3xl text-white shadow-xl shadow-red-500/20">
                <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-4">Total 2024 Fatalities</p>
                <p className="text-4xl font-black">558 Killed</p>
                <p className="opacity-80 mt-2">Significant surge in lethality.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">2025 Projections</p>
                <p className="text-4xl font-black">605 Attacks</p>
                <p className="text-slate-400 mt-2">Estimated activity based on current momentum.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ATTACK METHODS & TARGETS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
             <div className="flex items-center space-x-4">
               <div className="p-3 bg-red-100 text-red-600 rounded-xl"><Bomb /></div>
               <h3 className="text-3xl font-black uppercase">Types of Attacks</h3>
             </div>
             <div className="glass-card p-10 rounded-[3rem]">
               <AttackTypePie />
               <div className="mt-8 grid grid-cols-2 gap-4 text-xs font-bold text-slate-600">
                 <p>• Suicide Bombing</p>
                 <p>• Sniper / Shooting</p>
                 <p>• IED Explosions</p>
                 <p>• Quadcopter Drones</p>
               </div>
             </div>
          </div>
          
          <div className="space-y-12">
             <div className="flex items-center space-x-4">
               <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Crosshair /></div>
               <h3 className="text-3xl font-black uppercase">Primary Targets</h3>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Security Forces", icon: <ShieldCheck />, desc: "Police & military in KP/FATA." },
                  { label: "Politicians", icon: <Building2 />, desc: "High intensity during 2018 elections." },
                  { label: "Healthcare Teams", icon: <HeartPulse />, desc: "Polio workers in KP & Balochistan." },
                  { label: "Minorities", icon: <Landmark />, desc: "Shia scholars and community." },
                  { label: "Checkposts", icon: <MapPin />, desc: "Strategic frontier locations." },
                  { label: "Urban Centers", icon: <Globe />, desc: "Hotels, mosques, and shrines." }
                ].map((t, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-3xl flex items-start space-x-4">
                    <div className="text-slate-400">{t.icon}</div>
                    <div>
                      <p className="font-black text-slate-900 leading-none mb-1">{t.label}</p>
                      <p className="text-xs text-slate-500 leading-tight">{t.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* FUNDING SOURCES */}
        <section className="space-y-16">
          <div className="flex items-center space-x-6">
            <div className="p-4 glass-card rounded-2xl text-emerald-600"><DollarSign size={32} /></div>
            <h2 className="text-4xl font-heading font-black text-slate-900 uppercase">Financing Insurgency</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 glass-card p-12 rounded-[3rem] border-none shadow-xl flex flex-col justify-between">
              <FundingPie />
              <div className="mt-8 space-y-4">
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black uppercase text-slate-400 mb-2">High Profile Extortion</p>
                    <p className="text-sm font-bold">Rs 8M from KP Minister Atif Khan</p>
                    <p className="text-sm font-bold">$36,350 from former KP governor</p>
                 </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              {[
                { title: "Domestic & International Patronage (50%)", desc: "Protection rackets and global donations via networks like Al-Qaeda ($15M via Al-Hara-main).", icon: <ExternalLink /> },
                { title: "Narcotics Trafficking (30%)", desc: "Heroin trade via Karachi to global markets (USA, EU, China, UAE). Profits support families of prisoners.", icon: <Activity /> },
                { title: "Criminal Economy (20%)", desc: "Kidnappings, bank robberies, 'Jizya' tax on non-Muslims, and 'Zakat' on businesses.", icon: <Briefcase /> },
                { title: "Natural Resources & Smuggling", desc: "$100M+ from Swat timber. Illegal mining, smuggling antiquities, and quarry control.", icon: <Gem /> }
              ].map((f, i) => (
                <div key={i} className="glass-card p-8 rounded-[2.5rem] flex items-start space-x-6">
                   <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">{f.icon}</div>
                   <div>
                     <h4 className="text-xl font-black text-slate-900 mb-2">{f.title}</h4>
                     <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WEAPONS & LETHALITY */}
        <section className="dark-section-card p-16 md:p-24 rounded-[3.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-110 transition-transform duration-1000"><Zap size={400} /></div>
          <div className="relative z-10 space-y-16">
            <div className="space-y-4">
              <h2 className="text-5xl font-heading font-black uppercase">Advanced Weaponry</h2>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">Modernization of tactical gear has significantly increased night-fighting and precision capabilities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                 <p className="text-red-500 font-bold mb-2">M24 Sniper Rifles</p>
                 <p className="text-sm text-slate-400">Equipped with Thermal Scopes for precision strikes in total darkness.</p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                 <p className="text-blue-500 font-bold mb-2">M4 Carbines</p>
                 <p className="text-sm text-slate-400">Fitted with Trijicon ACOG scopes for high-accuracy urban warfare.</p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                 <p className="text-emerald-500 font-bold mb-2">M16A4 Platforms</p>
                 <p className="text-sm text-slate-400">Integrated thermal imaging for long-range target acquisition.</p>
               </div>
            </div>
          </div>
        </section>

        {/* AIRSTRIKES UPDATE */}
        <section className="glass-card p-12 md:p-20 rounded-[3rem] border-l-[16px] border-l-blue-600 bg-blue-50/30">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="p-8 bg-blue-600 text-white rounded-[2rem] shadow-2xl shadow-blue-500/30">
                <Plane size={64} />
              </div>
              <div className="space-y-6">
                <div className="px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full w-fit">Dec 2024 Operations</div>
                <h3 className="text-4xl font-black text-slate-900 uppercase italic">Airstrikes in Paktika</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-3xl font-black text-blue-600">71 Militants</p>
                    <p className="text-sm font-bold text-slate-500">Reportedly killed in strategic strikes across TTP camps.</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-black uppercase tracking-widest text-slate-400">Infrastructure Destroyed:</p>
                    <ul className="text-sm font-bold text-slate-600 space-y-1">
                      <li>• Suicide jacket manufacturing plant</li>
                      <li>• Umar Media wing (TTP propaganda HQ)</li>
                      <li>• Key command centers (Sher Zaman / Abu Hamza)</li>
                    </ul>
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* NOTABLE ATTACKS TIMELINE */}
        <section className="space-y-16">
          <div className="flex items-center space-x-6">
            <div className="p-4 glass-card rounded-2xl text-red-600"><Flame size={32} /></div>
            <h2 className="text-4xl font-heading font-black text-slate-900 uppercase">Incident Timeline</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:left-[1.85rem] before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-100">
            {[
              { date: "Mar 2009", title: "Lahore Police Academy", res: "8 killed, 100 wounded." },
              { date: "Oct 2009", title: "World Food Programme HQ", res: "Islamabad HQ targeted." },
              { date: "Dec 2010", title: "Mohmand Agency Admin", res: "40+ killed in bombing." },
              { date: "May 2011", title: "Mehran Naval Base", res: "Karachi base attack; 10+ officers dead." },
              { date: "Oct 2012", title: "Malala Yousafzai Shooting", res: "Global outrage; attempt on activist." },
              { date: "Dec 2014", title: "APS Peshawar Massacre", res: "130+ students martyred; darkest day." },
              { date: "April 2021", title: "Quetta Hotel Bombing", res: "Targeting high-profile foreign guests." }
            ].map((a, i) => (
              <div key={i} className="relative pl-20 group">
                <div className="absolute left-6 top-2 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-red-600 transition-colors" />
                <div className="glass-card p-6 rounded-3xl hover:border-red-200 transition-all duration-300">
                  <span className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-1 block">{a.date}</span>
                  <h4 className="text-xl font-black text-slate-900">{a.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{a.res}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 glass-card rounded-[3rem] bg-slate-900 text-white space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tight">International Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-6 bg-white/5 rounded-2xl">
                  <p className="text-red-400 font-bold mb-2">Times Square Attempt (2010)</p>
                  <p className="text-sm opacity-80 leading-relaxed">Failed bombing in New York City, USA, linked to TTP training camps.</p>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl">
                  <p className="text-red-400 font-bold mb-2">US Consulate Peshawar (2010)</p>
                  <p className="text-sm opacity-80 leading-relaxed">Direct assault involving suicide bombers; 6 killed, 20 wounded.</p>
               </div>
            </div>
          </div>
        </section>

        {/* FOOTER & SOURCES */}
        <footer className="pt-24 border-t border-slate-200 space-y-12">
          <div className="text-center space-y-2">
            <Info size={24} className="mx-auto text-slate-300" />
            <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.4em]">Intelligence Reference Index</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
             {[
               "UN Security Council 2011", "CTC Sentinel 2023/2025", "Al Jazeera Investigative Unit",
               "The Diplomat Intelligence Brief", "CRSS Pakistan Audit", "USIP Strategic Report 2021",
               "PIPS Terrorism Report 2023/25", "Geo News OSINT Briefings", "IEP Global Terror Index 2025",
               "CESCUBE Security Analysis", "SATP Incident Database"
             ].map((s, i) => (
               <div key={i} className="flex items-center space-x-2">
                 <div className="w-1 h-1 bg-slate-200 rounded-full" />
                 <span>{s}</span>
               </div>
             ))}
          </div>
          <p className="text-center text-[9px] font-black text-slate-300 uppercase tracking-[1em] py-12">End of Dossier</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
