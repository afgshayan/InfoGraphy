
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from 'recharts';

interface DualLineChartProps {
  data: any[];
}

export const ActivityChart: React.FC<DualLineChartProps> = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
          <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} label={{ value: 'Attacks', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
          <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#ef4444', fontSize: 12}} label={{ value: 'Deaths', angle: 90, position: 'insideRight', fill: '#ef4444' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
            itemStyle={{ fontSize: '12px', fontWeight: 'bold', color: '#fff' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Line yAxisId="left" type="monotone" dataKey="attacks" stroke="#94a3b8" strokeWidth={3} dot={{ r: 4, fill: '#94a3b8' }} name="Attacks (Black/Gray)" />
          <Line yAxisId="right" type="monotone" dataKey="deaths" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: '#ef4444' }} name="Deaths (Red)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const AttackTypePie: React.FC = () => {
  const data = [
    { name: 'Suicide Bombing', value: 15 },
    { name: 'Shootings', value: 25 },
    { name: 'IED attacks', value: 20 },
    { name: 'Drone/Quadcopter', value: 10 },
    { name: 'Explosive attacks', value: 10 },
    { name: 'Grenade/Mortar', value: 10 },
    { name: 'Vehicle-ramming', value: 10 },
  ];
  const COLORS = ['#ef4444', '#3b82f6', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#06b6d4'];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        {/* Fix: Added missing 'right' and 'left' properties to the margin prop to comply with Recharts Margin type */}
        <PieChart margin={{ top: 20, right: 0, bottom: 20, left: 0 }}>
          <Pie data={data} cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />)}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }} 
            itemStyle={{ color: '#fff' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const FundingPie: React.FC = () => {
  const data = [
    { name: 'Domestic/Intl Donations', value: 50 },
    { name: 'Drug-Related', value: 30 },
    { name: 'Criminal Activities', value: 20 },
  ];
  const COLORS = ['#10b981', '#3b82f6', '#ef4444'];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 30, bottom: 30, left: 10, right: 10 }}>
          <Pie 
            data={data} 
            cx="50%" 
            cy="50%" 
            innerRadius={55} 
            outerRadius={75} 
            paddingAngle={5} 
            dataKey="value"
            label={({ value }) => `${value}%`}
          >
            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />)}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }} 
            itemStyle={{ color: '#fff' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
