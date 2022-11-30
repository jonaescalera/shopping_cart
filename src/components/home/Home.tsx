import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Product } from "../../types/Product";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../header/Header";
import Menu from "../Menu";

//const API_KEY = process.env.REACT_APP_API_KEY;
const BASEURL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  let [productsFiltered, setProductsFiltered] = useState<Product[] | undefined>(
    []
  );
  const url = `${BASEURL}/products`;
  let { data, loading, error } = useFetch(url);

  if (loading) {
    <div data-testid="products-empty">Is Loading...</div>;
  }

  const handleItems = (event: string) => {
    const filterArray = productsFiltered?.filter((item) =>
      item.title.toUpperCase().includes(event.toUpperCase())
    );

    setProductsFiltered(filterArray);
  };

  return (
    <div className="container" data-testid="home-display">
      {/* <Header handleItems={handleItems} />
      <Menu />
      <Footer /> */}
      <Header items={data} handleItems={handleItems} />
      <Menu />
      <Content products={data} />

      <Footer />
    </div>
  );
};

export default Home;
