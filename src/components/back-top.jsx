import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 1200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`back-to-top ${visible ? 'visible' : ''}`} 
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        cursor: 'pointer',
        zIndex: 1000
      }}
    >
      <i className="fa fa-arrow-up" />
    </div>
  );
};

export default BackToTop;
