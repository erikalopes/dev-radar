import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PermissionsAndroid,
    TouchableOpacity,
    Alert
} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

function Main() {
    const [position, setPosition] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    
      const request_location_runtime_permission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Permissão de Localização',
              message: 'A aplicação precisa da permissão de localização.',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.getCurrentPosition(
              pos => {
                setPosition({
                  ...position,
                  latitude: pos.coords.latitude,
                  longitude: pos.coords.longitude,
                });
              },
              error => {
                console.log(error);
                Alert.alert('Houve um erro ao pegar a latitude e longitude.');
              },
              {forceRequestLocation: true, enableHighAccuracy: true}
            );
          } else {
            Alert.alert('Permissão de localização não concedida');
          }
        } catch (err) {
          console.log(err);
        }
      };

  

    return (
        <>
        <TouchableOpacity
        style={styles.locationButton}
        onPress={request_location_runtime_permission}>
            <Text>Clickme</Text>
      </TouchableOpacity>

    <MapView
    style={styles.map}
    region={position}
    onPress={e =>
      setPosition({
        ...position,
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      })
    }/>
    </>
    )
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})
export default Main;
