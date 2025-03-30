import OpenAI from 'openai';

export const validateApiKey = async (apiKey: string): Promise<boolean> => {
  try {
    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

    await openai.models.list(); // Attempt to fetch models, which requires a valid key

    return true;
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return false;
  }
};
