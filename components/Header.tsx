import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-amber-50 shadow-lg border-b-4 border-amber-600">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider font-serif">🦆 DUCK’ADO</h1>
            <p className="text-sm md:text-base text-amber-200 mt-1 italic font-serif">
              "Informação vale mais que ouro."
            </p>
          </div>
          <div className="mt-4 md:mt-0 bg-gray-700 px-4 py-2 rounded-lg border border-gray-600">
            <span className="text-xs uppercase tracking-widest text-gray-400 block">Estágio Atual</span>
            <div className="text-lg font-bold text-green-400">Fundação & Networking</div>
          </div>
        </div>
      </div>
    </header>
  );
};