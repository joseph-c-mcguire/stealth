import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../styles/App.css'; // Import component-specific styles

const Header = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    window.open(`https://www.google.com/search?q=site:"your-freelance-website-978ead7cfaa9.herokuapp.com" ${query}`, '_blank');
  };

  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="company-info">
          <h1>Company Name</h1>
          <p>Slogan goes here</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <form className="search-bar" onSubmit={handleSearch}>
          <button type="submit">🔍</button> 
          <input type="text" name="search" placeholder="Test..." />
        </form>
      </nav>
    </header>
  );
};

export default Header;