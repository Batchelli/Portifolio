import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold text-white text-center mb-12 relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gray-500"></span>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/4 h-0.5 bg-cyan-400"></span>
    </h2>
  );
};

export default SectionTitle;
