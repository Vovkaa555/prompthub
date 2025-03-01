// useStore.ts
import { create } from 'zustand';

interface Store {
  storedApiKey: string;
  setApiKeyToStore: (key: string) => void;
}

export const useStore = create<Store>((set) => ({
  storedApiKey: '',
  setApiKeyToStore: (key) => set({ storedApiKey: key }),
}));
