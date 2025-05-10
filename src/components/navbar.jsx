import React, { useEffect, useRef } from "react";
import logo1 from "../img/mylogo.png";
import logo2 from "../img/mylogo.png";
const handleClick = (e) => {
  e.preventDefault();
  window.open(
    "https://docs.google.com/document/d/1-4NCg_mZPggtPREcw5oxdF6-Xq-9kPMm1x8f2UqQRnI/preview",
    "_blank"
  );
};
const Navbar = () => {
  const [logo, setLogo] = React.useState(logo1);
  const navRef = useRef(null);

  useEffect(() => {
    // Smooth scrolling
    const handleClick = (e) => {
      if (e.target.classList.contains('js-scroll')) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        if (target) {
          const navHeight = navRef.current.offsetHeight;
          window.scrollTo({
            top: target.offsetTop - navHeight + 5,
            behavior: 'smooth'
          });
        }
      }
    };
  
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <nav 
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" 
      id="mainNav"
      ref={navRef}
    >
      {/* Keep your existing JSX structure */}
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src={logo} alt="logo" style={{ maxWidth: "130px" }} />
        </a>
        
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDefault"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleClick}>My Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
