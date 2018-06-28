import React, { Component } from "react";
import { 
  Marker
} from "react-mapbox-gl";
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';

const MapMarker = ({coordinates, onClick}) => (
  <Marker
    coordinates={coordinates}
    anchor="bottom"
    onClick={onClick}
  >
    <CommunicationLocationOn color='red'/>
  </Marker>
);

export default MapMarker;