import React from 'react';
import { TabId } from '../types';

interface NavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: TabId; label: string }[] = [
    { id: 'canvas', label: 'O Modelo (Canvas)' },
    { id: 'facades', label: 'Fachadas & Operações' },
    { id: 'hierarchy', label: 'Hierarquia' },
    { id: 'strategy', label: 'Estratégia' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-8 py-3 text-sm md:text-base font-medium text-gray-600 font-serif">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onTabChange(tab.id)}
                className={`
                  px-3 py-2 rounded-md transition-colors border-b-2
                  ${activeTab === tab.id 
                    ? 'bg-amber-50 text-amber-800 border-amber-600' 
                    : 'hover:bg-amber-50 hover:text-amber-800 border-transparent'}
                `}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};