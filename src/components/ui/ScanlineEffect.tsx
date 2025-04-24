import React from 'react';

const ScanlineEffect: React.FC = () => {
  return (
    <>
      <div className="scanline" aria-hidden="true"></div>
      <div 
        className="fixed inset-0 pointer-events-none z-50 bg-gradient-to-b from-transparent to-dark-900/20"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 1px, rgba(110, 66, 184, 0.03) 1px, rgba(110, 66, 184, 0.03) 2px)'
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default ScanlineEffect;