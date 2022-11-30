import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";

interface ContentProps {
  products?: Product[];
}

//const BASEURLIMAGE = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

const Content = ({ products }: ContentProps) => {
  const selectMovie = (id: number) => {};
  return (
    <div className="content">
      <div className="content_movies">
        {products &&
          products.map((item) => (
            <Card
              key={item.id}
              sx={{ margin: "10px", backgroundColor: "#fff" }}
            >
              <CardActionArea component="div" disableRipple>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${item.id}`}
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
                    src={`${item?.image}`}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
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
