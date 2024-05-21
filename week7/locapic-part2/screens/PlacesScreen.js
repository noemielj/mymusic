import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { addCity, removeCity } from "../reducers/user";

export default function PlacesScreen() {
  const dispatch = useDispatch();
  const [citySearch, setCitySearch] = useState(""); // stocker la requête de recherche de la ville
  const user = useSelector((state) => state.user.value);

  const handleAddCity = () => {
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${citySearch}`)
      .then((response) => response.json())
      .then((data) => {
        const name = data.features[0].properties.name;
        const latitude = data.features[0].geometry.coordinates[1];
        const longitude = data.features[0].geometry.coordinates[0];
        dispatch(
          addCity({ name: name, latitude: latitude, longitude: longitude })
        );
        setCitySearch("");
      });
  };

  const handleDeleteCity = (name) => {
    dispatch(removeCity(name));
  };

  const userNickname = useSelector((state) => state.user.value);

  const places = user.cities.map((place, i) => {
    return (
      <View key={i} style={styles.card}>
        <View>
          <Text style={styles.name}>{place.name}</Text>
          <Text>
            LAT : {place.latitude} LON : {place.longitude}
          </Text>
        </View>
        <FontAwesome
          name="trash-o"
          size={25}
          color="#ec6e5b"
          onPress={() => handleDeleteCity(place.name)}
        />
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{userNickname.username}'s places</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New city"
          value={citySearch}
          onChangeText={(value) => setCitySearch(value)}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => handleAddCity()}
        >
          <Text style={styles.textButton}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {places}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 20,
  },
  scrollView: {
    alignItems: "center",
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    backgroundColor: "#ffffff",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    backgroundColor: "#ffffff",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  input: {
    width: "65%",
    marginTop: 6,
    borderBottomColor: "#ec6e5b",
    borderBottomWidth: 1,
    fontSize: 16,
  },
  button: {
    width: "30%",
    alignItems: "center",
    paddingTop: 8,
    backgroundColor: "#ec6e5b",
    borderRadius: 10,
  },
  textButton: {
    color: "#ffffff",
    height: 24,
    fontWeight: "600",
    fontSize: 15,
  },
});
