
import React from 'react';

interface InfoCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  subtitle?: string;
  accentColor?: 'blue' | 'red' | 'amber' | 'emerald';
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon, subtitle, accentColor = "blue" }) => {
  const themes = {
    blue: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    red: "text-red-400 border-red-500/20 bg-red-500/5",
    amber: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    emerald: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  };

  return (
    <div className={`glass-card border-glow rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 group ${themes[accentColor]}`}>
      <div className="flex justify-between items-center mb-6">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        {subtitle && (
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 px-3 py-1 bg-white/5 rounded-full">
            {subtitle}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-2">{title}</h3>
        <p className="text-4xl font-extrabold text-white tracking-tighter leading-none group-hover:stats-gradient transition-all">
          {value}
        </p>
      </div>
      <div className="mt-4 h-1 w-0 group-hover:w-full bg-current transition-all duration-700 opacity-20"></div>
    </div>
  );
};
