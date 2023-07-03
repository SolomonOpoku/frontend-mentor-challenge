import { useEffect, useState } from 'react';

function ResizeWindow() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerWidth
    });

    useEffect(() => {
        // Event listener callback to update window size state
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
    };
}, []);

return windowSize;
};

export default ResizeWindow;