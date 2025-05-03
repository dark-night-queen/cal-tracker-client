import { create } from 'zustand';

interface NutrientState {
  caloriesConsumed: number;
  totalCalories: number;
  proteinConsumed: number;
  totalProtein: number;
  carbsConsumed: number;
  totalCarbs: number;
  fatsConsumed: number;
  totalFats: number;
}

export const useNutrientStore = create<NutrientState>((set, get) => ({
  caloriesConsumed: 400,
  totalCalories: 1400,

  proteinConsumed: 15,
  totalProtein: 150,

  carbsConsumed: 45,
  totalCarbs: 300,

  fatsConsumed: 18,
  totalFats: 65,
}));
