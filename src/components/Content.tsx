import { Movie } from "../types/Movie";
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

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
            <Card
              key={item.id}
              sx={{ margin: "10px", backgroundColor: "#fff" }}
            >
              <CardActionArea component="div" disableRipple>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/detail/${item.id}`}
                >
                  <CardHeader
                    titleTypographyProps={{
                      whiteSpace: "nowrap",
                      fontSize: 15,
                      width: "250px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    title={item.title}
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
                </Link>
              </CardActionArea>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Content;
