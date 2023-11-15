import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer bg-black">
      <div className="container">
        <p className="made-by text-center">Made by Your Name</p>
      </div>
      <div className="social-icons">
        <div>
          <a className="github-link">
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
          </a>
        </div>
        <div>
          <a className="linkedin-link">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
          </a>
        </div>
        <div>
          <Link className="linkedin-link" to="credits">
            Credits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
