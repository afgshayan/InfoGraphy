
import React from 'react';
import { 
  Users, ShieldAlert, Target, TrendingUp, DollarSign, Network, 
  History, Info, Zap, MapPin, Globe, Activity, Crosshair, 
  Search, Flag, AlertCircle, Radio, Award
} from 'lucide-react';
import { ActivityChart, AttackTypePie, FundingPie } from './components/StatsCharts';
// Import InfoCard component
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
    <div className="min-h-screen pb-20 pt-20 px-4 md:px-8 max-w-[1400px] mx-auto space-y-24">
      {/* Header Section */}
      <header className="text-center space-y-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-tight stats-gradient max-w-6xl mx-auto uppercase">
          Tehrik-i-Taliban Pakistan (TTP)
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-[2rem] text-left border-l-8 border-l-blue-600">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Formation</h3>
            <p className="text-xl font-bold text-slate-900">2007, alliance of formerly separate militant groups</p>
          </div>
          <div className="glass-card p-8 rounded-[2rem] text-left border-l-8 border-l-red-600">
            <h3 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Founder</h3>
            <p className="text-xl font-bold text-slate-900">Baitullah Mehsud</p>
          </div>
        </div>
      </header>

      {/* Leadership Timeline */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4">
          <div className="p-3 glass-card rounded-2xl text-blue-600 shadow-none"><Users size={24} /></div>
          <h2 className="text-4xl font-heading font-black text-slate-900">LEADERSHIP TIMELINE</h2>
        </div>
        <div className="relative pt-8 pb-12 overflow-x-auto custom-scrollbar">
          <div className="flex min-w-[800px] justify-between items-start">
            {[
              { year: '2007–2009', name: 'Baitullah Mehsud' },
              { year: '2009–2013', name: 'Hakimullah Mehsud' },
              { year: '2013–2018', name: 'Mullah Fazlullah' },
              { year: '2018–present', name: 'Noor Wali Mehsud' }
            ].map((leader, i) => (
              <div key={i} className="flex-1 relative px-4 text-center group">
                {i < 3 && <div className="absolute top-[10px] left-1/2 w-full h-0.5 bg-slate-200 -z-10 group-hover:bg-blue-600/30 transition-colors" />}
                <div className="w-5 h-5 rounded-full bg-blue-600 mx-auto mb-6 ring-8 ring-blue-600/10 group-hover:scale-125 transition-transform" />
                <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-1">{leader.year}</p>
                <p className="text-xl font-black text-slate-900">{leader.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Profile */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoCard 
          title="TTP Fighters" 
          value="6,000" 
          icon={<Target size={32} />} 
          accentColor="red"
        />
        <InfoCard 
          title="Ideology" 
          value="Radical Deobandi, influenced by Salafism" 
          icon={<Award size={32} />} 
          accentColor="blue"
        />
        <InfoCard 
          title="Objective" 
          value="Overthrow Pakistan’s secular state to establish an Islamic state" 
          icon={<Flag size={32} />} 
          accentColor="amber"
        />
        <InfoCard 
          title="Strategic Shift" 
          value="From civilians to security forces" 
          icon={<Activity size={32} />} 
          accentColor="blue"
        />
      </section>

      {/* Organizational Structure - Dark Background Section */}
      <section className="dark-section-card p-16 rounded-[4rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <Network size={400} className="absolute -bottom-20 -right-20" />
        </div>
        <div className="relative z-10">
          <Network size={56} className="mx-auto text-blue-400 mb-8" />
          <h2 className="text-4xl font-heading font-black mb-6 uppercase tracking-tight">Shadow Governance</h2>
          <p className="text-3xl font-bold text-slate-300 max-w-3xl mx-auto leading-tight">TTP has 9 shadow provinces with ministries and governors.</p>
        </div>
      </section>

      {/* Operational Footprint */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4">
          <div className="p-3 glass-card rounded-2xl text-amber-600"><MapPin size={24} /></div>
          <h2 className="text-4xl font-heading font-black text-slate-900 uppercase">Operational Footprint</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 space-y-6">
            {[
              { province: "KPK", status: "Epicenter", desc: "Remains the epicenter of TTP activity.", color: "bg-red-600" },
              { province: "Balochistan", status: "Secondary Presence", desc: "Attacks fluctuate between 5–24 annually.", color: "bg-orange-500" },
              { province: "Punjab", status: "New Theater", desc: "9 attacks in 2023, rising to 19 in 2024.", color: "bg-amber-500" },
              { province: "Sindh", status: "Fewer Incidents", desc: "2 attacks in 2023, 5 in 2024, mostly in Karachi.", color: "bg-yellow-500" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-7 rounded-[2rem] border-l-[12px]" style={{ borderLeftColor: item.color.replace('bg-', '') === 'red-600' ? '#dc2626' : item.color.replace('bg-', '') === 'orange-500' ? '#f97316' : item.color.replace('bg-', '') === 'amber-500' ? '#f59e0b' : '#eab308' }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-black text-slate-900">{item.province}</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white ${item.color}`}>{item.status}</span>
                </div>
                <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-7 glass-card p-12 rounded-[3rem] relative overflow-hidden bg-slate-100 flex flex-col justify-center border-none shadow-inner">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                <Globe size={400} />
             </div>
             <div className="space-y-8 relative z-10">
                <h3 className="text-2xl font-black italic text-slate-900">Pakistan map heatmap distribution</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
                      <div className="w-4 h-4 rounded-full bg-red-600 shrink-0" />
                      <p className="text-sm font-bold text-slate-700">Dark red = most attacks (KPK)</p>
                   </div>
                   <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
                      <div className="w-4 h-4 rounded-full bg-orange-500 shrink-0" />
                      <p className="text-sm font-bold text-slate-700">Orange = medium (Punjab)</p>
                   </div>
                   <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
                      <div className="w-4 h-4 rounded-full bg-yellow-500 shrink-0" />
                      <p className="text-sm font-bold text-slate-700">Yellow = low (Sindh)</p>
                   </div>
                   <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
                      <Zap size={18} className="text-blue-600 shrink-0" />
                      <p className="text-sm font-bold text-slate-700">Add small attack icons per province</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* TTP Activity Data - Dark Background Section */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4">
          <div className="p-3 glass-card rounded-2xl text-red-600"><TrendingUp size={24} /></div>
          <h2 className="text-4xl font-heading font-black text-slate-900 uppercase">TTP Activity</h2>
        </div>
        <div className="dark-section-card p-12 md:p-16 rounded-[4rem] space-y-12 shadow-2xl">
          <div className="flex items-center space-x-4 text-emerald-400 font-bold bg-white/5 w-fit px-6 py-3 rounded-full border border-white/10">
            <ShieldAlert size={20} />
            <span className="text-lg">Deadliest group in Pakistan: 52% of all terrorism-related deaths in 2024</span>
          </div>
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
            <ActivityChart data={activityData} />
            <p className="text-center text-xs text-slate-500 mt-6 font-bold uppercase tracking-[0.2em]">Infographic: Dual-line graph (Attacks: Black/Gray | Deaths: Red)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
               <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Historical Peak</h4>
               <p className="text-xl font-bold">Attacks at highest ever; deaths at highest since 2011</p>
            </div>
            <div className="p-8 bg-red-600/20 rounded-3xl border border-red-500/30">
               <h4 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">2024 Context</h4>
               <p className="text-4xl font-black text-white">482 Attacks</p>
               <p className="text-2xl font-bold text-red-200 mt-1">558 Deaths</p>
            </div>
            <div className="p-8 bg-blue-600/20 rounded-3xl border border-blue-500/30">
               <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">2025 Context</h4>
               <p className="text-4xl font-black text-white">605 Attacks</p>
               <p className="text-2xl font-bold text-blue-200 mt-1">217 Deaths</p>
            </div>
          </div>
        </div>
      </section>

      {/* Attack Dynamics */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-card p-12 rounded-[3.5rem] space-y-8">
          <h2 className="text-3xl font-heading font-black text-slate-900 uppercase flex items-center">
            <Zap className="mr-3 text-amber-500" /> Types of Attacks
          </h2>
          <AttackTypePie />
        </div>
        <div className="glass-card p-12 rounded-[3.5rem] space-y-8">
          <h2 className="text-3xl font-heading font-black text-slate-900 uppercase flex items-center">
            <Crosshair className="mr-3 text-red-600" /> Targets of Attacks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[300px] overflow-y-auto custom-scrollbar pr-2">
            {[
              { label: "Security Forces", desc: "Police & military; KP/FATA; ↑ attacks 2018–2021", color: "red" },
              { label: "Politicians", desc: "Targeted during 2018 elections", color: "blue" },
              { label: "Healthcare Workers", desc: "Polio teams attacked; KP & Balochistan, 2019", color: "emerald" },
              { label: "Civilians & Activists", desc: "Women & development workers intimidated, 2019–2021", color: "amber" },
              { label: "Urban & High-Profile Sites", desc: "Hotels, mosques, shrines (Quetta 2020–21, Lahore 2019)", color: "purple" },
              { label: "Check posts", desc: "Strategic installations", color: "slate" },
              { label: "Shia scholars & community", desc: "Sectarian targeting", color: "pink" }
            ].map((target, i) => (
              <div key={i} className={`p-5 rounded-2xl bg-slate-100 border-l-4 border-l-${target.color === 'red' ? 'red-600' : target.color}-500 flex flex-col`}>
                <span className="font-bold text-slate-900 text-sm mb-1">{target.label}</span>
                <span className="text-[10px] text-slate-500 leading-relaxed">{target.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Sources */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4">
          <div className="p-3 glass-card rounded-2xl text-emerald-600"><DollarSign size={24} /></div>
          <h2 className="text-4xl font-heading font-black text-slate-900 uppercase">Funding Sources</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 glass-card p-12 rounded-[3.5rem] border-none shadow-xl">
            <FundingPie />
            <p className="text-center text-[10px] font-bold text-slate-400 mt-8 uppercase tracking-widest">Pie chart for approximate percentages</p>
          </div>
          <div className="lg:col-span-7 space-y-6 overflow-y-auto max-h-[600px] custom-scrollbar pr-4">
             {[
               { title: "1. Criminal Activities (≈20%)", items: ["Kidnappings, bank robberies, other crimes"], color: "red" },
               { title: "2. Domestic & international donations (≈50%)", items: ["Protection/ extortion demands:", "Rs 8M from KP Minister Atif Khan", "$36,350 from former KP governor"], color: "emerald" },
               { title: "3. Drug-Related Activities (≈30%)", items: ["Heroin trade via Karachi → US, Europe, Malaysia, Singapore, China, UAE", "Profits sent to Taliban commanders & families of arrested militants"], color: "blue" },
               { title: "4. Taxes & Extortion in Controlled Areas", items: ["“Jizya” tax on non-Muslims", "“Zakat” tax on local businesses", "Extortion operations in Swat & Karachi"], color: "amber" },
               { title: "5. Support from Other Terrorist Groups", items: ["Lashkar-e-Jhangvi & Harakat-ul-Mujahideen", "Past Afghan Taliban support ($70,000 to Baitullah Mehsud, 2006)", "Al-Qaeda: $15M via Al-Hara-main Foundation (Saudi Arabia)"], color: "indigo" },
               { title: "6. Exploitation of Natural Resources & Archaeological Sites", items: ["Sale of precious stones, minerals, timber ($100M+ from Swat Valley timber)", "Illegal excavation & smuggling of antiquities", "Control of mines & quarries"], color: "slate" }
             ].map((source, i) => (
               <div key={i} className="glass-card p-8 rounded-[2rem] border-t-4" style={{ borderTopColor: source.color === 'red' ? '#dc2626' : source.color === 'emerald' ? '#10b981' : source.color === 'blue' ? '#2563eb' : source.color === 'amber' ? '#f59e0b' : source.color === 'indigo' ? '#4f46e5' : '#475569' }}>
                  <h4 className="font-black text-slate-900 text-lg mb-4">{source.title}</h4>
                  <ul className="space-y-2">
                    {source.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Weapons & Lethality */}
      <section className="glass-card p-16 rounded-[4rem] relative overflow-hidden group border-none shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
          <ShieldAlert size={200} className="text-slate-900" />
        </div>
        <div className="relative z-10 space-y-12">
          <h2 className="text-5xl font-heading font-black text-slate-900 uppercase">Weapons & Lethality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
               <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">Modern Sniper Units</p>
               <p className="text-2xl font-black text-slate-900">M24 sniper rifles (thermal scope)</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
               <p className="text-xs font-black text-amber-600 uppercase tracking-widest mb-3">Advanced Carbines</p>
               <p className="text-2xl font-black text-slate-900">M4 carbines with Trijicon ACOG scopes</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
               <p className="text-xs font-black text-red-600 uppercase tracking-widest mb-3">Assault Systems</p>
               <p className="text-2xl font-black text-slate-900">M16A4 rifles with thermal scope</p>
            </div>
          </div>
        </div>
      </section>

      {/* Camps & Airstrikes - Dark Background Section */}
      <section className="dark-section-card p-16 rounded-[4rem] relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-red-600/5 pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-10">
             <h2 className="text-5xl font-heading font-black uppercase leading-tight">TTP Camps & Pakistani Airstrikes (Dec 2024)</h2>
             <div className="bg-white/5 p-10 rounded-[3rem] space-y-8 border border-white/10">
                <div className="flex items-center space-x-6">
                   <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-red-600/30">!!</div>
                   <div>
                      <p className="font-bold text-2xl text-white">Target: TTP camps in Paktika</p>
                      <p className="text-red-400 font-black text-lg">Result: 71 militants reportedly killed</p>
                   </div>
                </div>
                <div className="space-y-6 pt-8 border-t border-white/10">
                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Destroyed sites include:</h4>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      <li className="flex items-center space-x-3 text-base">
                         <span className="w-2 h-2 bg-red-500 rounded-full" />
                         <span className="text-slate-200">Suicide jacket factory</span>
                      </li>
                      <li className="flex items-center space-x-3 text-base">
                         <span className="w-2 h-2 bg-blue-500 rounded-full" />
                         <span className="text-slate-200">Umar Media (TTP media wing)</span>
                      </li>
                      <li className="flex items-center space-x-3 text-base">
                         <span className="w-2 h-2 bg-slate-400 rounded-full" />
                         <span className="text-slate-200">Camp of Sher Zaman (Mukhlis Yar)</span>
                      </li>
                      <li className="flex items-center space-x-3 text-base">
                         <span className="w-2 h-2 bg-slate-400 rounded-full" />
                         <span className="text-slate-200">Abu Hamza & Akhtar Muhammad camps</span>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
          <div className="lg:col-span-5 bg-red-950/20 border-2 border-red-900/40 rounded-[3.5rem] p-12 text-center min-h-[400px] flex flex-col justify-center items-center shadow-inner">
             <Search size={64} className="text-red-500 mb-8 animate-pulse" />
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-400 mb-4">Strike Intelligence Context</p>
             <p className="text-2xl font-bold italic text-white max-w-sm">Small map pinpoint for airstrikes active in Paktika region</p>
          </div>
        </div>
      </section>

      {/* Notable Attacks Timeline */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4">
          <div className="p-3 glass-card rounded-2xl text-red-600"><History size={24} /></div>
          <h2 className="text-4xl font-heading font-black text-slate-900 uppercase">Notable Attacks</h2>
        </div>
        <div className="space-y-6">
          {[
            { date: "March 2009", title: "Police academy attack in Lahore", impact: "8 killed, 100 wounded" },
            { date: "October 2009", title: "World Food Programme HQ in Islamabad", impact: "Strategic strike" },
            { date: "July 2010", title: "Relief distribution office in Mohmand Agency", impact: "50+ killed" },
            { date: "December 2010", title: "Administrative building in Mohmand Agency", impact: "40+ killed" },
            { date: "February 2011", title: "Pakistan army compound in Mardan", impact: "31 killed" },
            { date: "May 2011", title: "Mehran naval base in Karachi", impact: "≥10 security officers killed" },
            { date: "October 2012", title: "TTP’s shooting of Malala Yousafzai", impact: "International outrage" },
            { date: "December 2014", title: "APS Peshawar attack", impact: "130+ students killed" }
          ].map((attack, i) => (
            <div key={i} className="glass-card p-8 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center border-l-[12px] border-l-red-600 group hover:shadow-xl transition-all duration-300">
              <span className="text-red-600 font-black text-2xl min-w-[200px] tracking-tight">{attack.date}</span>
              <div className="flex-1">
                <h4 className="font-black text-2xl text-slate-900 group-hover:text-red-600 transition-colors">{attack.title}</h4>
                <p className="text-lg text-slate-500 font-medium italic mt-1">{attack.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* International Operations - Dark Background Section */}
      <section className="dark-section-card p-16 rounded-[4rem] border-none shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <Globe size={500} className="absolute -top-40 -left-40" />
         </div>
         <div className="relative z-10 space-y-12">
            <div className="flex items-center space-x-6">
               <Globe size={48} className="text-blue-400" />
               <h2 className="text-5xl font-heading font-black uppercase tracking-tight">International Operations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/[0.08] transition-colors">
                  <p className="text-blue-400 font-black text-3xl mb-4">May 2010</p>
                  <h4 className="font-bold text-2xl text-white mb-4 leading-snug">Attempted bombing in Times Square, New York, USA</h4>
                  <p className="text-lg text-slate-400 font-medium italic">Transnational operational reach attempt.</p>
               </div>
               <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/[0.08] transition-colors">
                  <p className="text-blue-400 font-black text-3xl mb-4">April 2010</p>
                  <h4 className="font-bold text-2xl text-white mb-4 leading-snug">Attack on U.S. Consulate in Peshawar</h4>
                  <p className="text-lg text-slate-400 font-medium italic">≥6 killed, 20 wounded.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Sources & References */}
      <footer className="pt-16 border-t border-slate-200 space-y-12">
        <div className="flex items-center space-x-4">
          <Info size={24} className="text-slate-400" />
          <h2 className="text-2xl font-heading font-black uppercase text-slate-400 tracking-widest">Sources / References</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12 text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
           {[
             "United Nations Security Council, 2011",
             "Taylor & Francis, 2023",
             "Combating Terrorism Center at West Point (CTC Sentinel), 2023",
             "Al Jazeera English, 2 February 2023",
             "The Diplomat, 2025",
             "Center for Research & Security Studies (CRSS)",
             "United States Institute of Peace (USIP), 2021",
             "Pak Institute for Peace Studies (PIPS), 2021",
             "CESCUBE, 2023",
             "Pak Institute for Peace Studies (PIPS), 2023",
             "Geo News, 9th Sep, 2025",
             "Geo News, 6th Mar 2025",
             "Institute for Economics & Peace (IEP), 2025",
             "Institute for Economics & Peace (IEP), 2024",
             "Combating Terrorism Center at West Point (CTC Sentinel), 2025",
             "Pak Institute for Peace Studies (PIPS), 2025",
             "Al Jazeera, 21 December 2023"
           ].map((source, i) => (
             <div key={i} className="flex items-center space-x-3">
               <span className="w-2 h-2 bg-slate-200 rounded-full shrink-0" />
               <span>{source}</span>
             </div>
           ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
