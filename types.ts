import { LucideIcon } from 'lucide-react';

export type TabId = 'canvas' | 'facades' | 'hierarchy' | 'strategy';

export interface CanvasItem {
  title: string;
  icon: LucideIcon;
  content: string[];
  color: string;
  iconColor: string;
}

export interface FacadeData {
  id: string;
  title: string;
  publicRole: string;
  hiddenRole: string;
  monetization: string;
  risk: number;
  reward: number;
  color: string;
}

export interface RoleData {
  title: string;
  subtitle: string;
  desc: string;
  color: string;
  textColor: string;
}

export type RoleKey = 'archive' | 'hands' | 'mouths' | 'eyes' | 'ducks';