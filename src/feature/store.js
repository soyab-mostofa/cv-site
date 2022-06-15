import { main } from 'lib/contentful';
import create from 'zustand';

const fetchModels = async (set) => {
  const models = await main();
  set({ models: models.modelCollection.items });
};

export const useStore = create((set) => ({
  models: [],
  fetchModels: fetchModels(set),
}));
