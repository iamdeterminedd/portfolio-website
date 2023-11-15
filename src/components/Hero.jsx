import React from 'react';
import profilePic from '../assets/profilepic.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-profile-pic">
          <img src={profilePic} />
        </div>
        <div className="hero-content">
          <h1 className="hero-heading text-xxl">Your Name</h1>
          <p className="hero-text text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            dolore!
          </p>
          <div className="hero-buttons">
            <Link to="contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      <Link id="scroll-btn" to="about"></Link>
    </section>
  );
};

export default Hero;
