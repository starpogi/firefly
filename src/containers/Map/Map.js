// @flow

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'leaflet/dist/leaflet.css';

import { 
  Map as LeafletMap, 
  TileLayer,  
} from 'react-leaflet';

const useStyles = makeStyles(theme => ({
  map: {
    width: '100%',
    height: 600
  }
}));

type MapProps = {
  latitude?: number,
  longitude?: number,
  zoom?: number
}

const Map = ({
  latitude = 37.772279,
  longitude = -122.451734,
  zoom = 13
}: MapProps) => {
  const classes = useStyles();
  const position = [latitude, longitude];
  
  return (
    <LeafletMap 
      className={classes.map}
      center={position}
      zoom={zoom}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
    </LeafletMap>
  );
}

export default Map;
