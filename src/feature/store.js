import { getProjects } from 'lib/graphql';
import create from 'zustand';

const fetchModels = async (set) => {
  const models = await getProjects();

  set({ models });
};

export const useStore = create((set) => ({
  models: [],
  fetchModels: fetchModels(set),
}));
