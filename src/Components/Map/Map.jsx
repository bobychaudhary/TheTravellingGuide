import React from "react";
import googleMapReact from "google-map-react";
import useStyles from "./styles";
import { useMediaQuery } from "@material-ui/core";
const Map = () => {
  const classes = useStyles();
  const isSmallDevice = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.map}>
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
