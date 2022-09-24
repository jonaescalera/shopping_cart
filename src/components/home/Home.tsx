import React, {
  useEffect,
  useState,
  KeyboardEvent,
  memo,
  useCallback,
} from "react";
import { Route, Routes } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Movie } from "../../types/Movie";
import Content from "../Content";
import Detail from "../Detail";
import Footer from "../Footer";
import Header from "../header/Header";
import Login from "../Login";
import Menu from "../Menu";

// export type HomeProps = {
//   // items: string[];
//   onChange:(event: ChangeEvent<HTMLInputElement>) => void;
// }

// type Movie = {
//   id: number;
//   i: {
//     imageUrl: string;
//     height: number;
//   };
//   //i: object;
//   l: string;
// };

//const items: HomeProps = ['Spider-man', 'SuperMan', 'Batman'];

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "9aa50225d9mshb5062c41eb34d54p1e1d87jsn037ddc72f5f6",
//     "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
//   },
// };

const API_KEY = "994c547c82db3ec8fddb4fee9896a41d";
const BASEURL = "https://api.themoviedb.org/3";

const Home = () => {
  //let [movies, setMovies] = useState<Movie[]>([]);
  let [moviesFiltered, setMoviesFiltered] = useState<Movie[] | undefined>([]);

  const url = `${BASEURL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
  // movies = useFetch(url);
  // moviesFiltered = useFetch(url);
  const [movies, isLoading, error] = useFetch<Movie>(url);
  //let [moviesFiltered] = useFetch<Movie>(url);

  if (isLoading) {
    <div data-testid="movies-empty">Is Loading...</div>;
  }

  useEffect(() => {
    if (!isLoading) setMoviesFiltered(movies);
  }, [movies]);

  // if (!isLoading) {
  //   console.log(results);
  // }

  //setMovies(resp => useFetch(url))
  //const moviesFiltered = useFetch(url);
  // setMovies(results);
  // setMoviesFiltered(results);
  // const movies = useFetch(url);
  // const moviesFiltered = useFetch(url);

  // useEffect(() => {
  //   const url = `${BASEURL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setMovies(response.results);
  //       setMoviesFiltered(response.results);
  //       console.log(response.results);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  const handleItems = (event: string) => {
    const filterArray = movies?.filter((item) =>
      item.title.toUpperCase().includes(event.toUpperCase())
    );
    //Object.assign(moviesFiltered, filterArray);
    setMoviesFiltered(filterArray);
  };

  return (
    <div className="container" data-testid="home-display">
      {/* <Header handleItems={handleItems} />
      <Menu />
      <Footer /> */}
      <Header handleItems={handleItems} />
      <Menu />
      <Content movies={moviesFiltered} />

      <Footer />
    </div>
  );
};

export default Home;
