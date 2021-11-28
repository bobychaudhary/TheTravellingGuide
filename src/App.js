import { CssBaseline, Grid } from '@material-ui/core';
import './App.css';
import List from './Components/List/List';
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";



function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
