import { useEffect, useState } from 'react';

const useResize = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getScreenSize = () =>
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });

    getScreenSize();

    setTimeout(() => {
      window.addEventListener('resize', getScreenSize);
    }, 500);

    return () => window.removeEventListener('resize', getScreenSize);
  }, []);

  return screenSize;
};

export default useResize;