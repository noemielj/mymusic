import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/home.jpg")}
      />
      <Text style={styles.title}> FoodApp</Text>
      <TextInput style={styles.input} placeholder="Go" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DrawerNavigator")}
      >
        <Text style={styles.buttonText}>Let's go ! </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#655074",
  },

  image: {
    width: "100%",
    height: "60%",
    marginBottom: 20,
    marginTop: 0,
    borderBottomLeftRadius: 90,
  },
  title: {
    fontSize: 60,
    textAlign: "right",
    marginTop: "10%",
    color: "#fff",
  },
  buttonText: {
    color: "#fff",
    textAlign: "right",
  },
});
