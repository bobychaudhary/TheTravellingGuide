import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Map extends Component{
    static defaultProps={
        center:{
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render(){
        return (
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_THETRAVELLINGGUIDE,
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="Humari Website"
              />
            </GoogleMapReact>
          </div>
        );}
    }


export default Map
