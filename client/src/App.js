import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import './styles/Header.css';
import './styles/HomePage.css';
import './styles/Footer.css';
import './styles/ContactPage.css';
import './styles/BlogPage.css';
import './styles/AboutPage.css';
import './styles/PortfolioPage.css';
import './styles/ServicesPage.css';

// Import the image
import logo from './images/logo.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
