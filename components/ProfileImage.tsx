import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';

const ProfileImage = () => {

const [imageUri, setImageUri] = useState(null);

  const handleCameraPress = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    
    if (!result.canceled) {
      setImageUri(result.uri);
      // Call the API to upload the image and set the profile picture here
      // Use the "result.uri" to get the local URI of the selected image
      // You need to implement the API call and handle the response accordingly
      // Example: uploadProfilePicture(result.uri);
    }
  };

  return (
    <View style={styles.avatarContainer}>
      <Image
        source={imageUri ? { uri: imageUri } : require("../assets/favicon.png")}
        style={styles.avatar}
        alt="user"
      />
      <Pressable style={styles.cameraIcon} onPress={handleCameraPress}>
        <Entypo name="camera" size={30} color="grey" />
      </Pressable>
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
   avatarContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    backgroundColor: "red",
    height: 180,
    width: 180,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 100,
  },
  cameraIcon: {
    position: "absolute",
    top: 120,
    right: 85,
  },
})