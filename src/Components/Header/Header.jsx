import React from "react";
// import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import  SearchIcon  from "@material-ui/icons/Search";
import useStyles from "./styles";
import InputBase from "@material-ui/core/InputBase";
import { Autocomplete } from "@material-ui/lab";


const Header = () => {
    const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          The Travelling Guide
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore the world
          </Typography>
        
          
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
            </div>
            
            
        </Box>
      </Toolbar>
      
    </AppBar>
    
  );
};

export default Header;
