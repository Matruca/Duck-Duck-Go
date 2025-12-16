import { Handshake, Zap, Gem, Heart, Target, BrickWall, Megaphone, Coins, Wallet } from 'lucide-react';
import { CanvasItem, FacadeData, RoleData, RoleKey } from './types';

export const CANVAS_DATA: CanvasItem[] = [
  { 
    title: "Parceiros Chave", 
    icon: Handshake, 
    content: ["Donos de tavernas endividados", "Barmans e Garçons", "Mendigos e 'Invisíveis'", "Órfãos (Futuro)", "Fornecedores da droga 'Noite'"], 
    color: "border-gray-500",
    iconColor: "text-gray-600"
  },
  { 
    title: "Atividades Chave", 
    icon: Zap, 
    content: ["Coleta: Escuta, furto, interrogação", "Análise: Cruzamento de dados", "Disseminação: Rumores controlados", "Infiltração: Longo prazo"], 
    color: "border-blue-500",
    iconColor: "text-blue-600"
  },
  { 
    title: "Proposta de Valor", 
    icon: Gem, 
    content: ["Informação Privilegiada", "Logística e Rotas", "Discrição (Disfarces)", "Influência Política"], 
    color: "border-amber-500",
    iconColor: "text-amber-600"
  },
  { 
    title: "Relacionamento", 
    icon: Heart, 
    content: ["Chantagem (Hostis)", "Dependência (Nobres)", "Anonimato Total", "Proteção (Rede)"], 
    color: "border-purple-500",
    iconColor: "text-purple-600"
  },
  { 
    title: "Segmentos de Clientes", 
    icon: Target, 
    content: ["Nobres em disputa", "Comerciantes ricos", "Oficiais militares", "Mercenários", "Guildas Rivais"], 
    color: "border-green-500",
    iconColor: "text-green-600"
  },
  { 
    title: "Recursos Chave", 
    icon: BrickWall, 
    content: ["O Arquivo (Dados)", "A Rede (Pessoas)", "Fachadas (Locais)", "Patos (Mensageiros)"], 
    color: "border-indigo-500",
    iconColor: "text-indigo-600"
  },
  { 
    title: "Canais", 
    icon: Megaphone, 
    content: ["Tavernas (Boca a boca)", "Barbearias (Sussurros)", "Mensagens Criptografadas", "Pombos/Patos correio"], 
    color: "border-pink-500",
    iconColor: "text-pink-600"
  },
  { 
    title: "Estrutura de Custos", 
    icon: Wallet, 
    content: ["Compra de dívidas", "Subornos", "Manutenção", "Treinamento"], 
    color: "border-red-500",
    iconColor: "text-red-600"
  },
  { 
    title: "Fontes de Renda", 
    icon: Coins, 
    content: ["Venda de Informações", "Venda de Mapas", "Serviços de Luxo", "Venda de Itens (Futuro)"], 
    color: "border-emerald-500",
    iconColor: "text-emerald-600"
  }
];

export const FACADE_DATA: Record<string, FacadeData> = {
  "Tavernas": {
      id: "Tavernas",
      title: "🍺 A Rede de Tavernas",
      publicRole: "Venda de bebidas e comida para aventureiros e guardas.",
      hiddenRole: "Coleta de rumores brutos. Barmans treinados como 'Ouvidos'.",
      monetization: "Bebidas cobrem custos. Sala VIP vende boatos.",
      risk: 2, 
      reward: 3,
      color: "#d97706" // amber-600
  },
  "Barbearia": {
      id: "Barbearia",
      title: "✂️ O Corte Real",
      publicRole: "Estética de luxo para a alta sociedade e nobres.",
      hiddenRole: "Confissionário involuntário. Instalação de escutas em roupas.",
      monetization: "Serviços caros + Venda de segredos de estado.",
      risk: 5, 
      reward: 8,
      color: "#b91c1c" // red-700
  },
  "Cartografia": {
      id: "Cartografia",
      title: "🗺️ Rosa dos Ventos",
      publicRole: "Venda de mapas e guias para viajantes.",
      hiddenRole: "Mapeamento de rotas de fuga e infraestrutura militar.",
      monetization: "Venda de mapas 'públicos' e mapas 'reais'.",
      risk: 3, 
      reward: 6,
      color: "#2563eb" // blue-600
  },
  "Escolas": {
      id: "Escolas",
      title: "🧸 As Escolas & Orfanatos",
      publicRole: "Educação para nobres e cuidado para órfãos.",
      hiddenRole: "Doutrinação e criação de agentes adormecidos (Long Game).",
      monetization: "Investimento agora para controle total em 15 anos.",
      risk: 8, 
      reward: 10,
      color: "#16a34a" // green-600
  }
};

export const HIERARCHY_DATA: Record<RoleKey, RoleData> = {
  archive: { 
    title: "O Arquivo", 
    subtitle: "Sócios Fundadores", 
    desc: "Vocês. O cérebro da operação. Quem conecta os pontos, gerencia o banco de dados central e toma as decisões estratégicas.", 
    color: "bg-gray-800", 
    textColor: "text-gray-800" 
  },
  hands: { 
    title: "Mãos", 
    subtitle: "Operativos", 
    desc: "A força bruta cirúrgica. Responsáveis por roubo, intimidação, entrega de 'mensagens físicas' e eliminação de ameaças.", 
    color: "bg-red-700", 
    textColor: "text-red-700" 
  },
  mouths: { 
    title: "Bocas", 
    subtitle: "Disseminadores", 
    desc: "Bardos, pregoeiros, cortesãs. Sua função é espalhar desinformação ou verdades convenientes para manipular o mercado e a política.", 
    color: "bg-amber-600", 
    textColor: "text-amber-600" 
  },
  eyes: { 
    title: "Olhos", 
    subtitle: "Observadores", 
    desc: "A linha de frente passiva. Barmans, mendigos, barbeiros. Eles apenas observam, escutam e relatam. Não agem.", 
    color: "bg-blue-600", 
    textColor: "text-blue-600" 
  },
  ducks: { 
    title: "Patos", 
    subtitle: "Recursos", 
    desc: "A base descartável ou logística. Animais mensageiros, informantes de baixo nível ou pessoas usadas sem saber que servem à guilda.", 
    color: "bg-green-600", 
    textColor: "text-green-600" 
  }
};