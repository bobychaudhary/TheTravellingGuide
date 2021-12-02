import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
const PlaceDetails = ({ place }) => {
  //props from List.jsx line 55

    const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : "sdf"}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => {
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            textAlign="center"
          >
            <img src={award.image.snall} alt={award.displa_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.displa_name}
            </Typography>
          </Box>;
          // for cusine of restaurant
          // chip means tag
        })}
        {place?.cusine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {/* for address of the restaurant */}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="secondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="secondary"
            className={classes.spacing}
          >
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
