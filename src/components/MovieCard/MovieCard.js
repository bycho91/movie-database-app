import React from "react";
import "./MovieCard.scss";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Typography,
  CardHeader,
} from "@material-ui/core";

const MovieCard = ({
  movie: { id, image, title, runningTimeInMinutes, year, principals },
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={year}
          title={title}
          subheader={`Duration: ${runningTimeInMinutes} mins`}
        />
        <CardMedia
          image={image?.url}
          style={{ height: "600px", paddingTop: "56%", objectFit: "contain" }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Main Cast:
          </Typography>
          {principals?.map((actor) => (
            <Typography variant="body1" gutterBottom>
              {actor.name} as {actor.characters[0]}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
