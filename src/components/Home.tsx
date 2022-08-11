import React, { useEffect, useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

interface HomeProps {
  items: string[];
}

type Movie = {
  id: number;
  i: {
    imageUrl: string;
    height: number;
  };
  //i: object;
  l: string;
};

//const items: HomeProps = ['Spider-man', 'SuperMan', 'Batman'];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9aa50225d9mshb5062c41eb34d54p1e1d87jsn037ddc72f5f6",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

const Home = ({ items }: HomeProps) => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  // useEffect(() => {
  //   fetch(
  //     "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setMovies(response.d);
  //       console.log(response);
  //       console.log(response.d[0].i.height);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <div className="container">
      {/* <div className="header">header</div> */}
      {/* <div className="container-body"> */}
      {/* <div className="menu">menu</div> */}
      {/* <div className="content">content</div> */}
      <Header />
      <Menu />
      <Content />
      <Footer />
      {/* <div className="footer">footer</div> */}
      {/* </div> */}
      {/* {movies &&
        movies.map((item) => (
          <div className="card" key={item.id}>
            <h4>{item.l}</h4>
            <img src={item.i?.imageUrl} alt="" width="300" height="300" />
          </div>
        ))} */}
    </div>
  );
};

export default Home;
