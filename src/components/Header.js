import foodPlatter from "../assets/img/reserve-table.jpg";

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">Little Lemon</h1>
        <h2 className="header-subTitle">Chicago</h2>
        <p className="header-description">
          Donec interdum, metus et hendrerit aliquet, dolor diam sagittis
          ligula, eget egestas libero turpis vel mi. Nulla porta dolor. Etiam
          iaculis nunc ac metus. Etiam rhoncus. Quisque rutrum. Etiam feugiat
          lorem non metus. Aenean tellus metus.
        </p>
        <button className="header-reserveTableButton">Reserve a Table</button>
        <img
          className="header-headerImg"
          height={350}
          src={foodPlatter}
          alt="Food Platter"
        />
      </div>
    </header>
  );
}

export default Header;
