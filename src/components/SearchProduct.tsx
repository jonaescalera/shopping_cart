import { headerProps } from "./Header";

const SearchProduct = ({ handleItems }: headerProps) => {
  // const handleItems = (e) => {

  // };

  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search products, brands..."
        onChange={handleItems}
        // onClick={handleItems}
      />
    </div>
  );
};

export default SearchProduct;
