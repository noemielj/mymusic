import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function MapScreen() {
  // const navigation = useNavigation();

  // const handleGoBackHome = () => {
  //   navigation.navigate("Home");
  // };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/map.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  returnButton: {
    backgroundColor: "red",
  },
});
