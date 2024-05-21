import React from "react";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import _FontAwesome from "react-native-vector-icons/FontAwesome";
import { savePhotoUri } from "../reducers/user";
import { useDispatch } from "react-redux";

export default function SnapScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState<FlashMode>(FlashMode.off);
  const isFocused = useIsFocused();
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const FontAwesome = _FontAwesome as React.ElementType;
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const toggleCameraType = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  };
  console.log(type);
  const toggleFlash = () => {
    setFlashMode(flashMode === FlashMode.off ? FlashMode.torch : FlashMode.off);
  };

  if (!hasPermission || !isFocused) {
    return <View></View>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      dispatch(savePhotoUri(uri));
      console.log(uri);
    }
  };

  return (
    <Camera
      flashMode={flashMode}
      type={type}
      ref={(ref) => setCameraRef}
      style={styles.camera}
    >
      <TouchableOpacity
        onPress={() => toggleCameraType()}
        style={styles.toggleButton}
      >
        <FontAwesome name="rotate-right" size={25} color="#ffffff" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => toggleFlash()}
        style={styles.flashButton}
      >
        <FontAwesome
          name={flashMode === FlashMode.torch ? "flash" : "flash"}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      <View style={styles.snapContainer}>
        <TouchableOpacity onPress={() => takePicture()}>
          <FontAwesome name="circle-thin" size={80} color="white" />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 50,
  },
  flashButton: {
    position: "absolute",
    top: 20,
    right: 20,
    marginTop: 50,
  },
  toggleButton: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 20,
    left: 20,
    marginTop: 50,
  },
  snapContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 25,
  },
});
