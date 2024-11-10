import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ServicePage from "./components/ServicePage";
import SearchPage from "./components/SearchPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/services" component={ServicePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route path="*" component={HomePage} /> {/* Wildcard route */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
