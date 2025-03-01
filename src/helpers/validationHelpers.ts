import * as Yup from 'yup';

export const apiKeyValidation = Yup.object({
  apiKey: Yup.string()
    .matches(/^sk-[A-Za-z0-9_-]+$/, 'Invalid OpenAI API key')
    .required('API Key is required'),
});
