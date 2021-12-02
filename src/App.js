import { CssBaseline, Grid } from '@material-ui/core';
import './App.css';
import List from './Components/List/List';
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import  getPlacesData  from './API/api';

import Api from './Components/Api';
import { useEffect, useState } from 'react';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
  const [bounds, setBounds] = useState({});
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
      setCoordinates({lat: latitude, lng: longitude});
    })
  },[])
  useEffect(()=>{
    getPlacesData(bounds.sw, bounds.ne).then((data=>{
      console.log(data);
      setPlaces(data);
    }))
  
  },[coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={PlaceDetails}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
          {/* passing props*/}
        
        </Grid>
      </Grid>
    </>
  );
}

export default App;
