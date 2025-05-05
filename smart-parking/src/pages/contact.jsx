import React from 'react';
import './Contact.css';
import Header from '../pages/Header.jsx';
import Footer from '../pages/Footer.jsx';

function Contact() {
    return (<>
    <Header/>
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Email: info@smartparking.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Parking Street, City, Country</p>
                </div>
                <div className="contact-form">
                    <h2>Send us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact;
