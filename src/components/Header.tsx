import SearchProduct from "./SearchProduct";

const Header = () => {
  return (
    <div className="header">
      <div>Shopping Cart</div>

      <div className="header-main">
        <SearchProduct />
        <nav className="navbar">
          <ul>
            <li>Category</li>
            <li>Offers</li>
            <li>History</li>
            <li>Clothes</li>
            <li>Help</li>
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
