
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
    blue: "border-blue-500/10 text-blue-600 bg-blue-500/[0.02]",
    red: "border-red-500/10 text-red-600 bg-red-500/[0.02]",
    amber: "border-amber-500/10 text-amber-600 bg-amber-500/[0.02]",
    emerald: "border-emerald-500/10 text-emerald-600 bg-emerald-500/[0.02]",
  };

  const iconThemes = {
    blue: "bg-blue-600 text-white shadow-blue-500/20",
    red: "bg-red-600 text-white shadow-red-500/20",
    amber: "bg-amber-500 text-white shadow-amber-500/20",
    emerald: "bg-emerald-600 text-white shadow-emerald-500/20",
  }

  return (
    <div className={`glass-card rounded-[2.5rem] p-8 flex flex-col justify-between h-full group ${themes[accentColor]}`}>
      <div>
        <div className="flex justify-between items-start mb-8">
          <div className={`p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500 ${iconThemes[accentColor]}`}>
            {/* Fix: Use React.isValidElement and cast to React.ReactElement with proper props type to resolve 'size' property error */}
            {React.isValidElement(icon) 
              ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 28 }) 
              : icon}
          </div>
          {subtitle && (
            <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 px-3 py-1 bg-slate-900/5 rounded-full">
              {subtitle}
            </span>
          )}
        </div>
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-3">{title}</h3>
        <p className="text-2xl font-extrabold text-slate-900 leading-tight tracking-tight">
          {value}
        </p>
      </div>
      <div className="mt-8 overflow-hidden h-1 w-full bg-slate-100 rounded-full relative">
        <div className={`absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-1000 ease-out bg-current opacity-40`} />
      </div>
    </div>
  );
};
