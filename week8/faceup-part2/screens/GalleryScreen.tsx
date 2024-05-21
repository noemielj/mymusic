import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  updateEmail,
  UserState,
  savePhotoUri,
  deletePhotoUri,
} from "../reducers/user";

import _FontAwesome from "react-native-vector-icons/FontAwesome";

export default function GalleryScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state: { user: UserState }) => state.user.value);
  const photoUris = useSelector(
    (state: { user: UserState }) => state.user.value.photoUris
  );

  const FontAwesome = _FontAwesome as React.ElementType;

  const handleDeletePhoto = (uri: string) => {
    dispatch(deletePhotoUri(uri));
  };

  const addPhotoUri = (uri: string) => {
    dispatch(savePhotoUri(uri));
  };

  const photos = user.photoUris.map((uri: string, i: number) => {
    return (
      <View key={i} style={styles.photoContainer}>
        <TouchableOpacity onPress={() => handleDeletePhoto(uri)}>
          <FontAwesome
            name="times"
            size={20}
            color="#000000"
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
        <Image source={{ uri }} style={styles.photo} />
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      {user && user.email && (
        <Text style={styles.text}>Logged as: {user.email}</Text>
      )}

      <ScrollView contentContainerStyle={styles.galleryContainer}>
        {photoUris.map((uri: string, index: number) => (
          <Image key={index} source={{ uri }} style={styles.photo} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  galleryContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  photoContainer: {
    alignItems: "flex-end",
  },
  photo: {
    margin: 10,
    width: 150,
    height: 150,
  },
  title: {
    fontFamily: "Futura",
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    color: "black",
  },
  deleteIcon: {
    marginRight: 10,
  },
  text: {
    marginBottom: 15,
  },
});
