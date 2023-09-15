import foodPlatter from "../assets/img/reserve-table.jpg";
import "../App.css";

function Header() {
  return (
    <header className="header-container">
      <h1 className="header-title">Little Lemon</h1>
      <h2 className="header-subTitle">Chicago</h2>
      <p className="header-description">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <button className="header-reserveTableButton">Reserve a table</button>
      <img
        className="header-headerImg"
        height={350}
        src={foodPlatter}
        alt="Food Platter"
      />
    </header>
  );
}

export default Header;
