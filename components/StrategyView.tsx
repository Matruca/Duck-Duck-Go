import React from 'react';

export const StrategyView: React.FC = () => {
  return (
    <section className="animate-fade-in">
      <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border-l-4 border-green-600">
        <h2 className="text-2xl font-bold mb-2 font-serif">Plano de Ação Estratégico</h2>
        <p className="text-gray-600">
          O caminho para a dominação global é pavimentado em fases. Do estabelecimento de capital imediato 
          através da operação "Noite" até o controle institucional de longo prazo.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto pb-12">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>

        {/* Phase 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 relative z-10">
          <div className="order-1 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md border-t-4 border-gray-800 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg font-serif text-gray-800">🌑 Fase 1: Curto Prazo</h3>
              <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">Imediato</span>
            </div>
            <h4 className="font-bold text-amber-700 mb-2">Operação "Noite"</h4>
            <ul className="text-sm space-y-2 text-gray-600 list-disc pl-4">
              <li><strong>Objetivo:</strong> Capital e Reputação Inicial.</li>
              <li><strong>Investigação:</strong> Mapear fonte da droga e lista de consumidores.</li>
              <li><strong>Ação:</strong> Infiltrar na distribuição para identificar vícios de nobres.</li>
            </ul>
          </div>
          <div className="order-1 md:w-2/12 flex justify-center py-4 md:py-0">
            <div className="w-8 h-8 bg-gray-800 rounded-full border-4 border-white shadow"></div>
          </div>
          <div className="order-1 w-full md:w-5/12 px-6 py-4"></div>
        </div>

        {/* Phase 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 relative z-10">
          <div className="order-1 w-full md:w-5/12 px-6 py-4 hidden md:block"></div>
          <div className="order-1 md:w-2/12 flex justify-center py-4 md:py-0">
            <div className="w-8 h-8 bg-amber-600 rounded-full border-4 border-white shadow"></div>
          </div>
          <div className="order-1 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg font-serif text-gray-800">🏰 Fase 2: Médio Prazo</h3>
              <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">Este Ano</span>
            </div>
            <h4 className="font-bold text-amber-700 mb-2">Estabelecer "O Arquivo"</h4>
            <ul className="text-sm space-y-2 text-gray-600 list-disc pl-4">
              <li><strong>Meta:</strong> Imunidade (Chantagem em 3 autoridades).</li>
              <li><strong>Recrutamento:</strong> Primeiros Olhos e Mãos.</li>
              <li><strong>Logística:</strong> QG Secreto e códigos de comunicação.</li>
            </ul>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full relative z-10">
          <div className="order-1 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg font-serif text-gray-800">🌍 Fase 3: Longo Prazo</h3>
              <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">Próximos Anos</span>
            </div>
            <h4 className="font-bold text-amber-700 mb-2">O Franchising & Expansão</h4>
            <ul className="text-sm space-y-2 text-gray-600 list-disc pl-4">
              <li><strong>Estratégia:</strong> Compra de dívidas de lojas falidas.</li>
              <li><strong>Controle:</strong> Manter donos originais como fachada.</li>
              <li><strong>Rede Neural:</strong> Informação cruzada entre cidades.</li>
            </ul>
          </div>
          <div className="order-1 md:w-2/12 flex justify-center py-4 md:py-0">
            <div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow"></div>
          </div>
          <div className="order-1 w-full md:w-5/12 px-6 py-4"></div>
        </div>
      </div>
    </section>
  );
};