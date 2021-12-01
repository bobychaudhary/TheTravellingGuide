import { Box, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const PlaceDetails = ({ place }) => {
  //props from List.jsx line 55
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : "sdf"}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
            <Box display="flex" justifyContent="space-between"></Box>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
