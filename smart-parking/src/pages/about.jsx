import React from 'react';
import './About.css';
import Header from '../pages/Header.jsx';
import Footer from '../pages/Footer.jsx';

function About() {
    return (<>
    <Header/>
        <div className="about-container">
            <h1>About Smart Parking</h1>
            <div className="about-content">
                <p>
                    Smart Parking is an innovative solution designed to revolutionize the way we park our vehicles.
                    Our system provides real-time parking availability, easy payment options, and a seamless user experience.
                </p>
                <h2>Our Mission</h2>
                <p>
                    To make parking stress-free and efficient for everyone, reducing traffic congestion and environmental impact
                    through smart technology solutions.
                </p>
                <h2>Features</h2>
                <ul>
                    <li>Real-time parking availability</li>
                    <li>Easy online payments</li>
                    <li>Mobile app integration</li>
                    <li>24/7 customer support</li>
                </ul>
            </div>
        </div>
        
        <Footer/>
        </>
    )
}

export default About;
