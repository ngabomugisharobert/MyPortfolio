import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IconButton, CardMedia } from "@material-ui/core";

const MYCard = props => {
  const { title, description, imageUrl, link } = props;
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
          
          </IconButton>
        }
        title={title}
      />
      <CardMedia style={{ height: "130px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <a href={link} target="_blank">Checkout the project</a>
      </CardActions>
    </Card>
  );
};

export default MYCard;