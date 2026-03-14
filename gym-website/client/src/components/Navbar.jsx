import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check login state on component mount and location change
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!(token && user));
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          {/* Logo - Left */}
          <div className="nav-brand">
            <Link to="/" className="brand-logo" onClick={closeMenu}>
              <span className="logo-icon">💪</span>
              <span className="brand-name">PowerFit</span>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/packages" 
                  className={`nav-link ${location.pathname === '/packages' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link 
                  to="/workouts" 
                  className={`nav-link ${location.pathname === '/workouts' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Workouts
                </Link>
              </li>
              <li>
                <Link 
                  to="/trainers" 
                  className={`nav-link ${location.pathname === '/trainers' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Trainers
                </Link>
              </li>
              <li>
                <Link 
                  to="/bmi" 
                  className={`nav-link ${location.pathname === '/bmi' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/join" 
                  className={`nav-link ${location.pathname === '/join' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Join
                </Link>
              </li>
            </ul>

            {/* Auth Buttons - Right */}
            <div className="nav-auth">
              <div className="auth-buttons">
                {isLoggedIn ? (
                  <button className="btn btn-logout" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="btn btn-outline" onClick={closeMenu}>
                      Login
                    </Link>
                    <Link to="/signup" className="btn btn-primary" onClick={closeMenu}>
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="nav-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
