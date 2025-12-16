import React, { useState } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, Tooltip, Cell, Label } from 'recharts';
import { FACADE_DATA } from '../constants';
import { FacadeData } from '../types';

export const FacadesView: React.FC = () => {
  const [selectedFacadeId, setSelectedFacadeId] = useState<string | null>(null);

  const chartData = Object.values(FACADE_DATA).map(f => ({
    x: f.risk,
    y: f.reward,
    z: 1, // Uniform size for bubbles
    name: f.id,
    fill: f.color
  }));

  const activeFacade: FacadeData | undefined = selectedFacadeId ? FACADE_DATA[selectedFacadeId] : undefined;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded text-xs">
          <p className="font-bold">{data.name}</p>
          <p>Risco: {data.x}</p>
          <p>Retorno: {data.y}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="animate-fade-in">
      <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border-l-4 border-amber-600">
        <h2 className="text-2xl font-bold mb-2 font-serif">Fachadas & Unidades de Negócio</h2>
        <p className="text-gray-600">
          Nossas operações são mascaradas por negócios legítimos. Abaixo, analisamos o equilíbrio entre 
          o valor estratégico da informação obtida e o risco operacional de cada fachada. 
          Interaja com o gráfico para ver detalhes específicos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Chart Section */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-center font-bold text-gray-700 mb-4 font-serif">Análise: Risco vs. Retorno de Informação</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
                <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="Risco" 
                    domain={[0, 10]} 
                    tickCount={6}
                    label={{ value: 'Risco Operacional (0-10)', position: 'insideBottom', offset: -10, style: { fill: '#666', fontSize: 12 } }}
                />
                <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="Retorno" 
                    domain={[0, 12]} 
                    tickCount={7}
                    label={{ value: 'Valor da Informação (0-10)', angle: -90, position: 'insideLeft', style: { fill: '#666', fontSize: 12 } }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                <Scatter 
                    name="Fachadas" 
                    data={chartData} 
                    fill="#8884d8" 
                    onClick={(e: any) => setSelectedFacadeId(e.name)}
                    cursor="pointer"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={selectedFacadeId === entry.name ? 4 : 1} stroke="#fff" />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-center text-gray-400 mt-2 italic">Toque nas bolhas para ver detalhes.</p>
        </div>

        {/* Detail Card */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gray-800 h-full min-h-[300px] flex flex-col justify-center transition-all duration-300">
          {!activeFacade ? (
            <div className="text-center text-gray-400 py-10 animate-fade-in">
              <span className="text-4xl block mb-2">🔍</span>
              <p>Selecione uma unidade no gráfico ao lado para revelar seus segredos.</p>
            </div>
          ) : (
            <div className="animate-fade-in w-full">
              <h3 className={`text-2xl font-bold mb-1 font-serif`} style={{ color: activeFacade.color }}>
                {activeFacade.title}
              </h3>
              <div className="flex gap-2 mb-4 text-xs font-bold uppercase tracking-wide text-gray-400">
                <span>Risco: {activeFacade.risk}/10</span>
                <span>•</span>
                <span>Retorno: {activeFacade.reward}/10</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 text-sm uppercase">Fachada Pública</h4>
                  <p className="text-gray-600 text-sm bg-gray-50 p-2 rounded border border-gray-100">
                    {activeFacade.publicRole}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm uppercase">Propósito Oculto</h4>
                  <p className="text-gray-600 text-sm bg-gray-50 p-2 rounded border border-gray-100">
                    {activeFacade.hiddenRole}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm uppercase">Monetização</h4>
                  <p className="text-gray-600 text-sm italic">
                    {activeFacade.monetization}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};