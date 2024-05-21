import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

export default function App() {
  const [placeName, setPlaceName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [markers, setMarkers] = useState([]);

  //   const markers = [
  //     { placeName: "London", latitude: 51.507359, longitude: -0.136439 },
  //     { placeName: "Lyon", latitude: 40.416775, longitude: -3.70379 },
  //     { placeName: "Marseille", latitude: 41.902783, longitude: 12.496366 },
  //   ];

  const handleAddCity = () => {
    if (placeName && latitude && longitude) {
      const lat = parseFloat(latitude);
      const lon = parseFloat(longitude);
      const newMarkers = [
        ...markers,
        { title: placeName, coordinates: { latitude: lat, longitude: lon } },
      ];
      setMarkers(newMarkers);
      setPlaceName("");
      setLatitude("");
      setLongitude("");
    }
  };
  return (
    <View>
      <SafeAreaView style={styles.inputSection}>
        <TextInput
          placeholder="Place Name"
          style={styles.input}
          onChangeText={(value) => setPlaceName(value)}
        />
        <TextInput
          placeholder="Latitude"
          style={styles.input}
          onChangeText={(value) => setLatitude(value)}
        />
        <TextInput
          placeholder="Longitude"
          style={styles.input}
          onChangeText={(value) => setLongitude(value)}
        />
        <Pressable style={styles.button} onPress={handleAddCity}>
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 5,
          longitude: 5,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        style={styles.map}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinates}
            title={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "70%",
  },
  inputSection: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    borderColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 10,
  },
  button: {
    marginTop: 5,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: "#16C172",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
});
