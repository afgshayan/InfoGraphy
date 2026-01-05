
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface StatsChartsProps {
  deaths2023: number;
  deaths2024: number;
  share: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-2xl">
        <p className="text-xs font-bold text-slate-400 uppercase mb-1">{label}</p>
        <p className="text-lg font-black text-white">{payload[0].value} <span className="text-xs font-normal text-slate-500">Casualties</span></p>
      </div>
    );
  }
  return null;
};

export const StatsCharts: React.FC<StatsChartsProps> = ({ deaths2023, deaths2024, share }) => {
  const trendData = [
    { name: 'Q1 2023', deaths: deaths2023 * 0.2 },
    { name: 'Q2 2023', deaths: deaths2023 * 0.25 },
    { name: 'Q3 2023', deaths: deaths2023 * 0.25 },
    { name: 'Q4 2023', deaths: deaths2023 * 0.3 },
    { name: 'Q1 2024', deaths: deaths2024 * 0.2 },
    { name: 'Q2 2024', deaths: deaths2024 * 0.3 },
    { name: 'Q3 2024', deaths: deaths2024 * 0.5 },
  ];

  const pieData = [
    { name: 'TTP Share', value: share },
    { name: 'Others', value: 100 - share },
  ];

  const COLORS = ['#3b82f6', 'rgba(255,255,255,0.05)'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <div className="glass p-6 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M0 100 L20 40 L40 60 L60 20 L80 80 L100 0" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <h3 className="text-sm font-bold text-slate-300 mb-6 uppercase tracking-widest flex items-center">
          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
          Escalation Trend (2023-2024)
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorDeaths" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="deaths" 
                stroke="#3b82f6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorDeaths)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass p-6 rounded-3xl flex flex-col items-center justify-center">
        <h3 className="text-sm font-bold text-slate-300 mb-6 uppercase tracking-widest self-start">Casualty Dominance</h3>
        <div className="h-64 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={95}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
             <span className="text-4xl font-black text-white">{share}%</span>
             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">TTP Attribution</p>
          </div>
        </div>
      </div>
    </div>
  );
};
