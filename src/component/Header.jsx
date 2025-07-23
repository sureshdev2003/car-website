import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/auth');
  };

  return (
    <header className="header">
      <div className="logo">Dr.Drivers</div>
      <nav className="nav-links">
        <Link to="/booking">Booking</Link>
        <a href="/about">About us</a>
        <a href="/fleet">Services</a>
        <a href="/footer">Contact us</a>
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/auth">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
