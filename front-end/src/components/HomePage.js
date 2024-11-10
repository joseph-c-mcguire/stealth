import React from 'react';

const HomePage = () => {
    return (
        <main>
            <section id="introduction">
                <h1>Welcome to Our Consulting Services</h1>
                <p>We specialize in providing top-notch services in machine learning, software development, and technical writing. Our team of experts is dedicated to helping your business thrive in the digital age.</p>
            </section>
            <section id="services">
                <h2>Our Services</h2>
                <p>We offer a wide range of consulting services to help your business grow.</p>
                <ul>
                    <li><a href="/service1">Service 1</a></li>
                    <li><a href="/service2">Service 2</a></li>
                    <li><a href="/service3">Service 3</a></li>
                </ul>
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
                    <div className="team-member">
                        <img src="images/joseph-mcguire.jpg" alt="Joseph McGuire, co-Founder" />
                        <h4>Joseph McGuire, M.S.</h4>
                        <p>co-Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="images/travis-kessler.jpg" alt="Dr. Travis Kessler, co-Founder" />
                        <h4>Travis Kessler, Ph.D.</h4>
                        <p>co-Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="images/lucas-domulevicz.jpg" alt="Dr. Lucas Domulevicz, co-Founder" />
                        <h4>Lucas Domulevicz, Ph.D.</h4>
                        <p>co-Founder</p>
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