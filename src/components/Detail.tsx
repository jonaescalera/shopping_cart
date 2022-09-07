import { Card, CardHeader, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../types/Movie";
const API_KEY = "994c547c82db3ec8fddb4fee9896a41d";
const BASEURL = "https://api.themoviedb.org/3";

const BASEURLIMAGE = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

const Detail = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const url = `${BASEURL}/movie/${movie_id}?&api_key=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);

        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);
  const styles = {
    media: {
      height: 400,
      width: 250,
      // paddingTop: "56.25%", // 16:9,
      margin: "30px",
    },
  };

  return (
    <div
      className="content"
      // style={{ background: "white", padding: "100px" }}
    >
      <div className="container_detail_movie">
        <Card>
          {/* <CardHeader
          titleTypographyProps={{
            whiteSpace: "nowrap",
            //fontSize: 15,
            width: "250px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={movie?.title}
        /> */}
          <CardMedia
            //className={classes.media}
            //height="294"
            style={styles.media}
            component="img"
            src={`${BASEURLIMAGE}${movie?.poster_path}`}
          />
        </Card>
        <div className="synapses">
          <h1>{movie?.title}</h1>
          <h3 style={{ marginBottom: "10px" }}>Synapses:</h3>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
