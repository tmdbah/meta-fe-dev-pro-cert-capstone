import logo from "../assets/img/little-lemon-logo.png";
import { FaBars, FaTimes, FaCartPlus } from "react-icons/fa";
import { useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="nav-container">
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <img className="logo" src={logo} alt="Logo" />
      <button className="nav-btn">
        <FaCartPlus />
      </button>
      <nav ref={navRef}>
        <Link to="/Homepage">Home</Link>
        <Link to="/Chicago">About</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Reservations">Reservations</Link>
        <Link to="/OrderOnline">Order Online</Link>
        <Link to="/Login">Login</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
