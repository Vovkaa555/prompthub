import React, { useEffect, useState } from 'react';

const ResponseAnimation: React.FC<{
  response: string | null;
  isLoading: boolean;
}> = ({ response, isLoading }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div className="relative w-full h-[30px] flex items-center justify-center">
      {isLoading ? (
        <div className="text-white text-lg w-full text-black">
          Reasoning{dots}
        </div>
      ) : (
        <div className="text-white text-lg w-full">{response}</div>
      )}
    </div>
  );
};

export default ResponseAnimation;
