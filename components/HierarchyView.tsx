import React, { useState } from 'react';
import { HIERARCHY_DATA } from '../constants';
import { RoleKey } from '../types';

export const HierarchyView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleKey | null>(null);

  const roleInfo = selectedRole ? HIERARCHY_DATA[selectedRole] : null;

  // Common classes for pyramid levels
  const levelBaseClass = "transition-all duration-300 cursor-pointer hover:scale-105 hover:brightness-110 flex items-center justify-center text-white font-bold shadow-md";

  return (
    <section className="animate-fade-in">
      <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border-l-4 border-red-600">
        <h2 className="text-2xl font-bold mb-2 font-serif">A Estrutura de Poder</h2>
        <p className="text-gray-600">
          Uma organização eficiente precisa de uma cadeia de comando clara. 
          Nossa hierarquia é desenhada para proteger o topo (O Arquivo) enquanto maximiza 
          o alcance da base (Os Olhos e Patos).
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Pyramid Visual */}
        <div className="w-full max-w-sm flex flex-col items-center space-y-1 py-8 select-none">
          {/* Top */}
          <div 
            onClick={() => setSelectedRole('archive')} 
            className={`${levelBaseClass} w-24 h-20 bg-gray-800 text-amber-50 text-xs z-50 shadow-lg relative`}
            style={{ clipPath: 'polygon(50% 0, 0% 100%, 100% 100%)' }}
          >
            <span className="mt-4">O ARQUIVO</span>
          </div>
          {/* Mid 1 */}
          <div 
            onClick={() => setSelectedRole('hands')} 
            className={`${levelBaseClass} w-40 h-16 bg-red-700 text-sm`}
            style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }}
          >
            MÃOS
          </div>
          {/* Mid 2 */}
          <div 
            onClick={() => setSelectedRole('mouths')} 
            className={`${levelBaseClass} w-56 h-16 bg-amber-600 text-sm`}
            style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }}
          >
            BOCAS
          </div>
          {/* Base 1 */}
          <div 
            onClick={() => setSelectedRole('eyes')} 
            className={`${levelBaseClass} w-72 h-16 bg-blue-600 text-sm`}
            style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }}
          >
            OLHOS
          </div>
          {/* Base 2 */}
          <div 
            onClick={() => setSelectedRole('ducks')} 
            className={`${levelBaseClass} w-full h-16 bg-green-600 text-sm`}
            style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }}
          >
            PATOS
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-200 min-h-[300px] flex flex-col justify-center">
          {!roleInfo ? (
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold border-b pb-2 mb-4 text-gray-800 font-serif">Selecione um nível hierárquico</h3>
              <p className="text-gray-500 italic">Clique na pirâmide para ver as responsabilidades e exemplos de cada posto.</p>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-3 h-3 rounded-full ${roleInfo.color}`}></span>
                <h3 className={`text-2xl font-bold font-serif ${roleInfo.textColor}`}>{roleInfo.title}</h3>
              </div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 border-b pb-2">
                {roleInfo.subtitle}
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                {roleInfo.desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};