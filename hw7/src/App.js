import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import skyImg from './pexels-johannes-rampp-1618846-18603287.jpg';
import homeImg from '/workspaces/ET712_SPRING2026/hw7/src/pexels-wolfgang-weiser-467045605-29491832.jpg'
import houseimg from './pexels-efrem-efre-2786187-18686684.jpg';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/sky">Space</Link>
    <Link to="/house">House</Link>
  </nav>
);

const Home = () => (
  <div className="page">
    <h1>Welcome to Our Discovery Portal</h1>
    <img src={homeImg} alt="Discovery" />
    <p>
      React Single Page Applications (SPA) allow routing to happen instantly 
      without a full page reload!
    </p>
  </div>
);

const Sky = () => (
  <div className="page">
    <h1>The Sky</h1>
    <img src={skyImg} alt="SKY" />
    <p>
      Gliding through the sky is a dream that has fascinated humanity for centuries.
    </p>
  </div>
);

const House = () => (
  <div className="page">
    <h1>My House</h1>
    <img src={houseimg} alt="House" />
    <p>
      This is my house.
    </p>
  </div>
);

const NotFound = () => (
  <div className="page">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for doesn't exist.</p>
    <Link to="/">Go back Home</Link>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sky" element={<Sky />} />
        <Route path="/house" element={<House />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;