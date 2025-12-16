import React from 'react';
import { CANVAS_DATA } from '../constants';

export const CanvasView: React.FC = () => {
  return (
    <section className="animate-fade-in">
      <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold mb-2 font-serif">O Canvas da Guilda</h2>
        <p className="text-gray-600">
          Este painel resume a estrutura lógica do nosso negócio. O objetivo é transformar 
          informação bruta em poder e lucro. Explore os blocos abaixo para ver os detalhes 
          de cada segmento do nosso modelo de negócios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CANVAS_DATA.map((item, index) => (
          <div 
            key={index}
            className={`
              bg-white p-5 rounded shadow hover:shadow-lg transition-all duration-300 
              border-t-4 ${item.color} group cursor-default hover:-translate-y-1
            `}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-2xl transition-transform group-hover:scale-110 ${item.iconColor}`}>
                <item.icon size={24} />
              </span>
              <h3 className="font-bold font-serif text-lg text-gray-800">{item.title}</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              {item.content.map((li, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-gray-400 font-bold">•</span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};