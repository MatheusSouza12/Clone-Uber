import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => ( 
    <MapViewDirections 
        destination= {destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyCopks5PipBuuZutOVerdg2Xd805MYsudc"
        strokeWidth={3}
        stronkeColor="#222"
    />
);
export default Directions;
