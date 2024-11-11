import React from 'react';
import { Link } from 'react-router-dom';
import josephMcguire from '../images/joseph-mcguire.jpg';
import travisKessler from '../images/travis-kessler.jpg';
import lucasDomulevicz from '../images/lucas-domulevicz.jpg';
import heroImage from '../images/hero-image.jpg';
import logo from '../images/logo.jpg';

const HomePage = () => {
    return (
        <main>
            <section id="introduction">
                <h1>Welcome to Our Consulting Services</h1>
                <p>We specialize in providing top-notch services in machine learning, software development, and technical writing. Our team of experts is dedicated to helping your business thrive in the digital age.</p>
            </section>
            <section className="gradient-section">
                <h2>Our Services</h2>
                <p>Explore the wide range of services we offer.</p>
            </section>
            <section className="image-overlay-section">
                <div className="image-overlay">
                    <img src={logo} alt="Service" />
                    <div className="overlay-content">
                        <h3>Service 1</h3>
                        <p>Details about service 1.</p>
                    </div>
                </div>
                <div className="image-overlay">
                    <img src={logo} alt="Service" />
                    <div className="overlay-content">
                        <h3>Service 2</h3>
                        <p>Details about service 2.</p>
                    </div>
                </div>
            </section>
            <section id="about">
                <h2>About Us</h2>
                <div className="history">
                    <h3>Our History</h3>
                    <p>Founded in 2024, Consulting Business has been providing top-notch consulting services for over two decades.</p>
                </div>
                <div className="mission-vision">
                    <h3>Our Mission</h3>
                    <p>To empower businesses to achieve their full potential through expert consulting services.</p>
                    <h3>Our Vision</h3>
                    <p>To be the leading consulting firm recognized for our innovative solutions and exceptional client service.</p>
                </div>
                <div className="team">
                    <h3>Meet Our Team</h3>
                    <div className="headshots">
                        <div className="team-member">
                            <img src={josephMcguire} alt="Joseph McGuire, co-Founder" className="headshot" />
                            <h4>Joseph McGuire, M.S.</h4>
                            <p>co-Founder</p>
                            <p>Joseph McGuire - CEO</p>
                        </div>
                        <div className="team-member">
                            <img src={travisKessler} alt="Dr. Travis Kessler, co-Founder" className="headshot" />
                            <h4>Travis Kessler, Ph.D.</h4>
                            <p>co-Founder</p>
                            <p>Travis Kessler - CTO</p>
                        </div>
                        <div className="team-member">
                            <img src={lucasDomulevicz} alt="Dr. Lucas Domulevicz, co-Founder" className="headshot" />
                            <h4>Lucas Domulevicz, Ph.D.</h4>
                            <p>co-Founder</p>
                            <p>Lucas Domulevicz - CFO</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="newsletter">
                <h2>Subscribe to Our Newsletter</h2>
                <form id="newsletter-form">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
            <section id="contact">
                <h2>Contact Us</h2>
                <p>Get in touch with us for more information.</p>
            </section>
        </main>
    );
};

export default HomePage;