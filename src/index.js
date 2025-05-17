import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import

// Import CSS in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
// import 'lightbox2/dist/css/lightbox.min.css';
import './style.css';

// Import JS libraries
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
// import 'popper.js/dist/popper.min.js';
import './libs/easing.js';
// import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

// Import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';

// Create root element
const container = document.getElementById('root');
const root = createRoot(container); // Modern root API

// Render application
root.render(
  <React.Fragment>
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <div id="stars4" />
    <div id="stars5" />
    <Navbar />
    <Intro />
    <About />
    <Portfolio />
    <Contact />
    <BackToTop />
    <Preloader />
  </React.Fragment>
);

// Service worker setup
serviceWorker.unregister();
