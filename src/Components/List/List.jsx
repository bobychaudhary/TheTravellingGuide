import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";


const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [{ name: "Anything you like" }, 
  { name: "Anything you like" },
    { name: "Anything you like"},
    { name: "Anything  like"},
    { name: "Anything you "},
    { name: " you like"},
    { name: "Anything  like"},
    { name: "Anything  like"},
    { name: "Anything you like"},
];
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
        {places.map((place,i) =>(
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
                  </Grid>

        ))}
      </Grid>
    </div>
  );
};

export default List;
