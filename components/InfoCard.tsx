
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
    blue: "text-blue-600 border-blue-500/10 bg-blue-500/5",
    red: "text-red-600 border-red-500/10 bg-red-500/5",
    amber: "text-amber-600 border-amber-500/10 bg-amber-500/5",
    emerald: "text-emerald-600 border-emerald-500/10 bg-emerald-500/5",
  };

  return (
    <div className={`glass-card rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 group border ${themes[accentColor]}`}>
      <div className="flex justify-between items-center mb-6">
        <div className="p-3 rounded-2xl bg-slate-900/5 border border-slate-900/10 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        {subtitle && (
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 px-3 py-1 bg-slate-900/5 rounded-full">
            {subtitle}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-2">{title}</h3>
        <p className="text-4xl font-extrabold text-slate-900 tracking-tighter leading-none group-hover:text-blue-600 transition-all">
          {value}
        </p>
      </div>
      <div className="mt-4 h-1 w-0 group-hover:w-full bg-current transition-all duration-700 opacity-20"></div>
    </div>
  );
};
