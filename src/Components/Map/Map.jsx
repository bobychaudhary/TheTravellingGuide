import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { useMediaQuery } from "@material-ui/core";
const Map = (setCoordinates, setBounds, coordinates) => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_THETRAVELLINGGUIDE,
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={(50, 50, 50, 50)}
        options={""}
        onChange={(e)=>{
          setCoordinates=({lat:e.center.lat, lng:e.center.lng});
          setBounds=({ne:e.marginBounds.ne, sw:e.marginBounds.sw});
        }} //when anything will change on the map
        onChildClick={""} //when we will click on any restaurant or hotel
      ></GoogleMapReact>
    </div>
  );
};
export default Map;
