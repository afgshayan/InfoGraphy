
import React from 'react';

interface InfoCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  subtitle?: string;
  accentColor?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon, subtitle, accentColor = "blue" }) => {
  const colorMap: Record<string, string> = {
    blue: "text-blue-400 bg-blue-400/10",
    red: "text-red-400 bg-red-400/10",
    amber: "text-amber-400 bg-amber-400/10",
    slate: "text-slate-400 bg-slate-400/10",
  };

  return (
    <div className="glass rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2.5 rounded-xl ${colorMap[accentColor]}`}>
          {icon}
        </div>
        {subtitle && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-800 px-2 py-1 rounded">
            {subtitle}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{title}</h3>
        <p className="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">{value}</p>
      </div>
    </div>
  );
};
