import { StyleSheet, TouchableOpacity, Text, View, TextInput, Modal, Alert, } from 'react-native';
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {useUser} from '../UserContext'

const UserLogin = () => {

    const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useUser();

    const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    const handleLogin = async () => {
    const apiURL = "https://www.dadio.in/apps/serverapi/server/login.php";
    const apiKey = "HASH490J669";

    // Create the request body with email and password
    const requestBody = new FormData();
    requestBody.append("api_key", apiKey);
    requestBody.append("email_id", email);
    requestBody.append("password", password);

    try {
      const response = await fetch(apiURL, {
        method: "POST",
        body: requestBody,
      });
      const data = await response.json();
      console.log(data);
      switch (data.res_status) {
        case "success":
          const userId = data.user_id;
          const userName = data.name;

          break;
        case 200:
          Alert.alert("Empty email");
          break;
        case 300:
          Alert.alert("Empty Password");
          break;
        case 400:
          Alert.alert("Invalid Email id");
          break;
        case 500:
          Alert.alert("Invalid Api key");
          break;
        case 600:
          Alert.alert("User inactive");
          break;
        default:
          Alert.alert("Error");
          break;
      }
      if (data.res_status === "success") {
        setUserData({
          email: data.email_id,
          displayName: data.display_name,
          name: data.name, // Set the user's name
        });
        navigation.navigate("Main");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
   <View style={styles.container}>
      <View>
        <Text style={styles.title}>Dadio</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Id</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email id"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Forgot your password?</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter your registered email"
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity style={styles.modalSubmitButton}>
              <Text style={styles.modalButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default UserLogin

const styles = StyleSheet.create({

   container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30,
  },
  formContainer: {
    width: "80%",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "red",
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    textAlign: "center",
    marginTop: 10,
    color: "skyblue",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    position: "absolute",
    top: 1,
    right: 5,
    padding: 5,
    borderRadius: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: 250,
  },
  modalSubmitButton: {
    backgroundColor: "red",
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});