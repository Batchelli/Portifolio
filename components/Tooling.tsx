import React from 'react';
import { TOOLS } from '../constants';
import { Tool } from '../types';
import SectionTitle from './SectionTitle';

const ToolingCard: React.FC<{ tool: Tool }> = ({ tool }) => {
  const Icon = tool.icon;
  return (
    <div className="bg-[#1A2332] p-4 rounded-lg flex items-center justify-center gap-4 transition-all duration-300 ease-in-out hover:bg-[#202B40] hover:-translate-y-2 border-b-2 border-transparent hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20">
      <Icon className="w-6 h-6 text-slate-200" />
      <span className="text-slate-200 font-medium">{tool.name}</span>
    </div>
  );
};

const Tooling = (): React.ReactNode => {
  return (
    <section className="py-24">
      <div className="text-center">
        <SectionTitle>Tooling</SectionTitle>
      </div>
      <div className="bg-[#1A2332]/70 p-8 rounded-2xl border border-gray-700/50">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {TOOLS.map((tool) => (
            <ToolingCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tooling;
