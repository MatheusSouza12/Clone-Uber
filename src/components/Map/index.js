import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';


// import styles from './styles';

export default class Map extends Component {
  render() {
    return (
        <View style= {{ flex: 1}}>
            <MapView 
            style={{ flex: 1}}
                region={{
                    latitude: -8.0959027,
                    longitude: -34.9286146,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134,
                }}
                
                showsUserLocation
                loadingEnabled
            />
        </View>
        );
  }
}
