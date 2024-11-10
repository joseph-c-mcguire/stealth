import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicePage from './components/ServicePage';
import ShopPage from './components/ShopPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/service1" component={() => <ServicePage service="Service 1" />} />
                <Route path="/service2" component={() => <ServicePage service="Service 2" />} />
                <Route path="/service3" component={() => <ServicePage service="Service 3" />} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/blog" component={BlogPage} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;