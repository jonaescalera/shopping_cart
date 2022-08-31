import { Movie } from "../types/Movie";

interface ContentProps {
  movies: Array<Movie>;
}

const BASEURLIMAGE = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

const Content = ({ movies }: ContentProps) => {
  return (
    <div className="content">
      <div className="content_movies">
        {movies &&
          movies.map((item) => (
            <div className="card" key={item.id}>
              <h4 className="title_movie">{item.original_title}</h4>
              <img src={`${BASEURLIMAGE}${item?.backdrop_path}`} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Content;
