import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";

export type headerProps = {
  handleItems: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = (/*{ handleItems }: headerProps*/) => {
  const handleItems = (event: ChangeEvent<HTMLInputElement>) => {
    // const moviesFiltered = movies.filter((item) =>
    //   item.title.toUpperCase().includes(event.target.value.toUpperCase())
    // );
    // setMoviesFiltered(moviesFiltered);
  };

  return (
    <div className="header">
      <div>Shopping Cart</div>

      <div className="header-main">
        <SearchProduct handleItems={handleItems} />
        <nav className="navbar">
          <ul>
            <li style={{ cursor: "pointer" }}>
              <Link to="/detail">Category</Link>
            </li>
            <li>Offers</li>
            <li>History</li>
            <li>Clothes</li>
            <li>Help</li>
          </ul>
        </nav>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
