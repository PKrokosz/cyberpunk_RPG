import { Resources } from '../context/ResourceContext';

export function canAfford(current: Resources, cost: Partial<Resources>): boolean {
  return Object.entries(cost).every(([k, v]) => (current as any)[k] >= (v || 0));
}
