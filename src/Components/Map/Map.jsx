import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { useMediaQuery } from "@material-ui/core";
const Map = () => {
    const matches = useMediaQuery("(min-width:600px)");
    const classes = useStyles();

  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <googleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_THETRAVELLINGGUIDE,
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={(50, 50, 50, 50)}
        options={""}
        onChange={""}
        onChildClick={""} //when we will click on any restaurant or hotel
      ></googleMapReact>
    </div>
  );
};
export default Map;
