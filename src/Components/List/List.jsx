import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { createRef, useEffect, useState } from "react";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";


const List = ({ places, rating, setRating, type, setType, childClicked }) => {
  const [elRefs, setElRefs] = useState([]);

  const dummy = [{name: "dcbbhwbhb"}];
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  console.log(places);
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
          <MenuItem value="flights">Flights</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setType(e.target.value)}>
          <MenuItem value={0}>ALL</MenuItem>
          <MenuItem value={3}> Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={5.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) =>( 
          <Grid ref={elRefs[i]} key={i} item xs={12}>
            <PlaceDetails
              selected={Number(childClicked) === i}
              refProp={elRefs[i]}
              place={place}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
