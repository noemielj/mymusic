import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useState } from "react";
import { updateEmail } from "../reducers/user";
import { useDispatch } from "react-redux";

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const HomeScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const EMAIL_REGEX: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;

  const dispatch = useDispatch();

  const handleValidateEmail = () => {
    if (EMAIL_REGEX.test(email)) {
      dispatch(updateEmail(email));
      navigation.navigate("TabNavigator", { screen: "Gallery" });
    } else {
      setEmailError(true);
    }
  };

  return (
    // <KeyboardAvoidingView
    //   style={styles.container}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/camera.png")} />
      <Text>FaceUP</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />

      {emailError && (
        <Text style={styles.errorText}> Invalid email adress</Text>
      )}
      <Button title="Go to Gallery" onPress={handleValidateEmail} />
    </View>
    //</KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "50%",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default HomeScreen;
