import React from 'react';
import { Link } from 'react-router-dom';

/* Import the logo */
import logo from '../images/logo.jpg';

const Header = () => {
  return (
    <main>
      <section className="banner">
        {/* Banner content */}
      </section>
      <nav>
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;