import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const navAboutMe = () => {
    navigate('/portfolio-website');
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  const navProjects = () => {
    navigate('/portfolio-website');
    setTimeout(() => {
      const projectSection = document.getElementById('projects');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/portfolio-website">
            <img className="nav-logo" src={logo} />
          </NavLink>
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <button className="navbar-link" onClick={navAboutMe}>
                About Me
              </button>
            </li>
            <li>
              <button className="navbar-link" onClick={navProjects}>
                Projects
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
