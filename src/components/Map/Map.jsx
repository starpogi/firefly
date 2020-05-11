// @flow

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'leaflet/dist/leaflet.css';

import { 
  Map as LeafletMap, 
  TileLayer,
  ZoomControl
} from 'react-leaflet';


const useStyles = makeStyles(theme => ({
  map: {
    width: '100%',
    height: '100vh'
  }
}));

type MapProps = {
  latitude?: number,
  longitude?: number,
  zoom?: number,
  ...
}

const Map = ({
  latitude = 14.601479,
  longitude = 121.056635,
  zoom = 13,
  ...props
}: MapProps) => {
  const classes = useStyles();
  const position = [latitude, longitude];
  
  return (
    <LeafletMap 
      {...props}
      className={classes.map}
      center={position}
      zoom={zoom}
      zoomControl={false}
    >
      <ZoomControl 
        position="bottomright"   
      />
      <TileLayer
        maxZoom={20}
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution="&copy; <a href=&quot;https://stadiamaps.com/&quot;>Stadia Maps</a>, &copy; <a href=&quot;https://openmaptiles.org/&quot;>OpenMapTiles</a> &copy; <a href=&quot;http://openstreetmap.org&quot;>OpenStreetMap</a> contributors"
      />
    </LeafletMap>
  );
}

export default Map;
