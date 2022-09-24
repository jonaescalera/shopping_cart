import { headerProps } from "../header/Header";

const SearchProduct = ({ handleItems }: headerProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //console.log(e.currentTarget.value);
      handleItems(e.currentTarget.value);
    }
  };

  return (
    <div data-testid="search-component">
      <input
        className="searchBar"
        data-testid="input"
        type="text"
        placeholder="Search products, brands..."
        onKeyPress={handleKeyPress}
        //onChange={handleItems}
        // onClick={handleItems}
      />
    </div>
  );
};

export default SearchProduct;
