import { create } from 'zustand';

export type Role =
  | 'function'
  | 'user'
  | 'developer'
  | 'system'
  | 'assistant'
  | 'tool';

interface Store {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  storedApiKey: string;
  setApiKeyToStore: (key: string) => void;
  openAIVersion: string;
  setOpenAIVersion: (version: string) => void;
  selectedRole: Role;
  setSelectedRole: (role: Role) => void;
  selectedContent: string;
  setSelectedContent: (content: string) => void;
  contentDescriptions: { [key: string]: string }; // Store content title and description
  setContentDescriptions: (descriptions: { [key: string]: string }) => void;
}

export const useStore = create<Store>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  storedApiKey: '',
  setApiKeyToStore: (key) => set({ storedApiKey: key }),
  openAIVersion: 'gpt-3.5',
  setOpenAIVersion: (version: string) => set({ openAIVersion: version }),
  selectedRole: 'user',
  setSelectedRole: (role) => set({ selectedRole: role }),
  selectedContent: '',
  setSelectedContent: (content: string) => set({ selectedContent: content }),
  contentDescriptions: {
    story:
      'A short story generator that creates engaging narratives in various genres.',
    code: 'A tool that provides detailed code explanations for better understanding.',
    email:
      'Helps draft professional and personalized email templates for various occasions.',
    poem: 'Generates poetic verses, whether for fun, sentiment, or art.',
    recipe:
      'Suggests creative recipes based on available ingredients or desired cuisine.',
    advice: 'Gives personal advice and tips on a range of topics.',
    summary: 'Summarizes lengthy content into concise overviews.',
    translation: 'Translates text between different languages with accuracy.',
    product:
      'Generates product descriptions that are compelling and informative.',
    question:
      'Provides a Q&A format for queries or discussions in specific topics.',
  },
  setContentDescriptions: (descriptions) =>
    set({ contentDescriptions: descriptions }),
}));
