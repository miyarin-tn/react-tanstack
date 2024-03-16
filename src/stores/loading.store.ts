import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
  isLoading?: boolean
}

type Actions = {
  setLoading: (isLoading: boolean) => void
}

type CustomMutator = [['zustand/devtools', never]];

export const useLoadingStore = create<State & Actions, CustomMutator>(devtools((set) => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set((state) => ({ ...state, isLoading: isLoading })),
}), { name: 'loadingStore' }));
