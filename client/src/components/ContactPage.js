import React from 'react';

const ContactPage = () => {
    return (
        <main>
            <h1>Contact Us</h1>
            <p>Get in touch with us for more information.</p>
            <form id="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </main>
    );
};

export default ContactPage;