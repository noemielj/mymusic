import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/home-image.jpg")}
      />
      <Text> Welcome to Locapic </Text>
      <TextInput style={styles.input} placeholder="Nickname" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TabNavigator")}
      >
        <Text style={styles.buttonText}>Go to map</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: "50%",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ec6e5b",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
