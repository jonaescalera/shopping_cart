import { Link } from "react-router-dom";
import { Product } from "../../types/Product";
import SearchProduct from "../search/SearchProduct";

export type headerProps = {
  handleItems: (event: string) => void;
  items?: Product[];
};

const Header = ({ handleItems, items }: headerProps) => {
  return (
    <div className="header" data-testid="header-page">
      <div>Shopping Cart</div>

      <div className="header-main">
        <SearchProduct items={items} handleItems={handleItems} />
        <nav className="navbar">
          <ul>
            <li style={{ cursor: "pointer" }}>
              <Link to="/detail">Category</Link>
            </li>
            <li>Offers</li>
            <li>History</li>
            <li>Clothes</li>
            <li data-testid="someID" style={{ cursor: "pointer" }}>
              <Link to="/help">Help</Link>
            </li>
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
