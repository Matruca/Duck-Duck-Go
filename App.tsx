import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CanvasView } from './components/CanvasView';
import { FacadesView } from './components/FacadesView';
import { HierarchyView } from './components/HierarchyView';
import { StrategyView } from './components/StrategyView';
import { TabId } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('canvas');

  const renderContent = () => {
    switch (activeTab) {
      case 'canvas':
        return <CanvasView />;
      case 'facades':
        return <FacadesView />;
      case 'hierarchy':
        return <HierarchyView />;
      case 'strategy':
        return <StrategyView />;
      default:
        return <CanvasView />;
    }
  };

  return (
    <>
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full animate-fade-in">
        {renderContent()}
      </main>
      
      <Footer />
    </>
  );
};

export default App;