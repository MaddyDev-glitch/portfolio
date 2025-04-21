import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 1000);
      }, 100);
    }
  }, []);

  return <div id="preloader" style={{ 
    position: 'fixed', 
    zIndex: 9999, 
    background: '#fff', 
    width: '100%', 
    height: '100%',
    transition: 'opacity 1s ease-out'
  }} />;
};

export default Preloader;
