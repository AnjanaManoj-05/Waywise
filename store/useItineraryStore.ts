import { create } from "zustand";

type ItineraryStore = {
  items: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  clearItems: () => void;
};

const useItineraryStore = create<ItineraryStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: state.items.includes(item) ? state.items : [...state.items, item],
    })),
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i !== item),
    })),
  clearItems: () => set({ items: [] }),
}));

export default useItineraryStore;
