import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import PortfolioPage from "./components/PortfolioPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import './index.css'; // Import global styles
import './styles/App.css'; // Import component-specific styles

// Import the image
import logo from './images/logo.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route path="*" component={HomePage} /> {/* Wildcard route */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
