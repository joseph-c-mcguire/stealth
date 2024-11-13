import React from 'react';
import josephMcguire from '../images/joseph-mcguire.jpg';
import travisKessler from '../images/travis-kessler.jpg';
import lucasDomulevicz from '../images/lucas-domulevicz.jpg';
import '../styles/App.css'; // Import component-specific styles

const HomePage = () => {
    return (
        <main>
            <section id="introduction">
                <h1>Welcome to Our Consulting Services</h1>
                <p>We specialize in providing top-notch services in machine learning, software development, and technical writing. Our team of experts is dedicated to helping your business thrive in the digital age.</p>
            </section>
            <section className="card-container">
                <div className="card">
                    <h3>Service 1</h3>
                    <p>Details about service 1.</p>
                </div>
                <div className="card">
                    <h3>Service 2</h3>
                    <p>Details about service 2.</p>
                </div>
                <div className="card">
                    <h3>Service 3</h3>
                    <p>Details about service 3.</p>
                </div>
            </section>
            <section id="about">
                <h2>About Us</h2>
                <div className="about-us-container">
                    <div className="about-us-card">
                        <h3>Our History</h3>
                        <p>Founded in 2024, Consulting Business has been providing top-notch consulting services for over two decades.</p>
                    </div>
                    <div className="about-us-card">
                        <h3>Our Mission</h3>
                        <p>To empower businesses to achieve their full potential through expert consulting services.</p>
                    </div>
                    <div className="about-us-card">
                        <h3>Our Vision</h3>
                        <p>To be the leading consulting firm recognized for our innovative solutions and exceptional client service.</p>
                    </div>
                </div>
                <div className="team">
                    <div className="team-banner">
                        <h3>Meet Our Team</h3>
                        <div className="headshots">
                            <div className="team-member">
                                <img src={josephMcguire} alt="Joseph McGuire, co-Founder" className="headshot" />
                                <h4>Joseph McGuire, M.S.</h4>
                                <p>co-Founder</p>
                                <p>
                                Seasoned Data Science professional with over 5 years of experience and a Master’s in Applied Mathematics from Cal Poly, San Luis Obispo, with expertise in machine learning, DevOps/MLOps, web app development, and technical writing.
                                </p>
                            </div>
                            <div className="team-member">
                                <img src={travisKessler} alt="Dr. Travis Kessler, co-Founder" className="headshot" />
                                <h4>Travis Kessler, Ph.D.</h4>
                                <p>co-Founder</p>
                                <p>
                                PhD in Computer Engineering from UMass Lowell with over 9 years of experience in machine learning, data science, and software engineering, specializing in predictive models, algorithm optimization, and data pipelines.
                                </p>
                            </div>
                            <div className="team-member">
                                <img src={lucasDomulevicz} alt="Dr. Lucas Domulevicz, co-Founder" className="headshot" />
                                <h4>Lucas Domulevicz, Ph.D.</h4>
                                <p>co-Founder</p>
                                <p>
                                    PhD in Electrical and Computer Engineering from UC Davis with over 8 years of experience in machine learning, deep learning, and high-dimensional data analysis for applications in nanoelectronics and spectroscopic signal classification. 
                                </p>

                            </div>
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
                <div className="contact-us-container">
                    <div className="contact-us-card">
                        <h3>Contact Information</h3>
                        <p>Email: info@consultingbusiness.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div className="contact-us-card">
                        <h3>Office Location</h3>
                        <p>123 Consulting St, Suite 100</p>
                        <p>Business City, BC 12345</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;