import { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [size, setSize] = useState(0);
  
    useEffect(() => {
      const updateSize = () => {
        setSize(window.innerWidth);
      };
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    
    return size;
};

export default useWindowWidth