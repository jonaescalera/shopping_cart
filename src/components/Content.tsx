import { Movie } from "../types/Movie";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

interface ContentProps {
  movies: Array<Movie>;
}

const BASEURLIMAGE = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

const Content = ({ movies }: ContentProps) => {
  const selectMovie = (id: number) => {};
  return (
    <div className="content">
      <div className="content_movies">
        {movies &&
          movies.map((item) => (
            // <div className="card" key={item.id}>
            //   <h4 className="title_movie">{item.original_title}</h4>
            //   <img src={`${BASEURLIMAGE}${item?.backdrop_path}`} alt="" />
            // </div>
            <Card
              key={item.id}
              sx={{ margin: "10px", backgroundColor: "#fff" }}
            >
              <CardHeader
                titleTypographyProps={{
                  whiteSpace: "nowrap",
                  fontSize: 15,
                  width: "250px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={item.original_title}
              />
              <CardMedia
                component="img"
                height="194"
                src={`${BASEURLIMAGE}${item?.backdrop_path}`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.overview}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Content;
