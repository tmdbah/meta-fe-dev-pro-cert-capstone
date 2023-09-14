import logo from "../assets/img/little-lemon-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../App.css";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="nav-container">
      <img className="logo" height={25} src={logo} alt="Logo" />
      <nav ref={navRef}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#orderOnline">Order Online</a>
        <a href="#login">Login</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
