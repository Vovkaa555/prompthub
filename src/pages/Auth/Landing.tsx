import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import WindAnimation from '../../components/Animations/WaveAnimation';
import { useStore } from '../../store/useStore';
import { apiKeyValidation } from '../../helpers/validationHelpers';
import { validateApiKey } from '../../core/requests/requests';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { setApiKeyToStore: setApiKeyInStore } = useStore();
  const [showError, setShowError] = useState(false);

  const formik = useFormik({
    initialValues: { apiKey: '' },
    validationSchema: apiKeyValidation,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const isValid = await validateApiKey(values.apiKey);

      if (isValid) {
        setApiKeyInStore(values.apiKey);
        setSubmitting(false);
        resetForm();
        navigate('/home');
      } else {
        setShowError(true);
        setSubmitting(false);
      }
    },
  });

  // Show error message only after submission if the key is invalid
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden w-full">
      {/* Background Animation */}
      <WindAnimation />
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mt-4 mb-16">
          <h1 className="text-6xl font-bold text-white drop-shadow-md">
            Prompt
            <span className="bg-orange-600 text-white rounded-[10px] px-5 py-1 ml-2">
              HUB
            </span>
          </h1>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center"
        >
          <div className="flex items-center relative">
            <input
              type="text"
              name="apiKey"
              placeholder="Enter OpenAI API Key"
              value={formik.values.apiKey}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="px-4 mr-[16px] py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 w-60"
            />
            <button
              type="submit"
              className="px-6 py-2 text-white bg-violet-600 rounded-md hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Validating...' : 'Submit'}
            </button>
            {showError && (
              <div className="absolute -top-14 left-0 mt-2 w-full text-red-500 bg-gray-800 p-2 rounded shadow">
                Invalid API Key. Please try again.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;
