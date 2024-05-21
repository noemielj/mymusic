import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SnapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to SnapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SnapScreen;
