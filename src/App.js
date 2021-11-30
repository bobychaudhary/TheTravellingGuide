import { CssBaseline, Grid } from '@material-ui/core';
import './App.css';
import List from './Components/List/List';
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import { getPlaceData } from './API/api';

import Api from './Components/Api';
import { useEffect, useState } from 'react';

function App() {
  const [place, setPlace] = useState([]);
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
  const [bounds, setBounds] = useState(null);
  useEffect(()=>{
    console.log(coordinates, bounds);
    getPlaceData()
    .then((data)=>{
      console.log(data);
      setPlace(data);
    })
  },[coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
          {/* passing props*/}
          {/* <Api/> */}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
