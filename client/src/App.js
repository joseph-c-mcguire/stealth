import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ServicePage from "./components/ServicePage";
import SearchPage from "./components/SearchPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/services" component={ServicePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog" component={BlogPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;