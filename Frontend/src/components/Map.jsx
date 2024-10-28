import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = { height: '100%', width: '100%' };
const defaultCenter = { lat: -34.397, lng: 150.644 };

const Map = () => (
  <LoadScript
    googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
  >
    <GoogleMap
      mapContainerStyle={mapStyles}
      center={defaultCenter}
      zoom={10}
    >
      {/* Add markers, info windows, etc. here */}
    </GoogleMap>
  </LoadScript>
);

export default Map;
