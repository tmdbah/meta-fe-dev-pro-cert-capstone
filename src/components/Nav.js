import logo from "../assets/img/little-lemon-logo.png";

function Nav() {
  return (
    <nav>
      <ul className="nav-container">
        <li>
          <a href="#home">
            <img height={25} src={logo} alt="Logo" />
          </a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <a href="#orderOnline">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
