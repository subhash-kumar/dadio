import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput, } from 'react-native';
import  React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const AboutMe = () => {
  const [aboutme, setAboutme] = useState("");
  const [aboutmemodalvisible, setAboutmemodalvisible] = useState(false);

  const handleaboutToggle = () => {
    setAboutmemodalvisible(!aboutmemodalvisible);
  };
  const handleupdate = () => {
    setAboutme(aboutme);
    setAboutmemodalvisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.optionRow} onPress={handleaboutToggle}>
        <Feather name="info" size={20} color="lightgray" />
        <Text style={styles.optionText}>About Me</Text>
        <Text style={styles.aboutme}>{aboutme}</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={aboutmemodalvisible}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeading}>
              <Text style={styles.headText}>About me</Text>
              <TouchableOpacity onPress={handleaboutToggle}>
                <Text style={styles.closeText}>
                  <MaterialIcons name="cancel" size={24} color="white" />
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              <TextInput
                style={styles.searchInput}
                placeholder="About me"
                value={aboutme}
                onChangeText={(text) => setAboutme(text)}
              />
              <TouchableOpacity
                style={styles.searchButton}
                onPress={handleupdate}
              >
                <Text style={styles.searchButtonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AboutMe

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 19,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.4,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  modal: {
    flex: 1,
    justifyContent: "center", // To center the modal vertically
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background color
  },
  modalContent: {
    backgroundColor: "white",
    padding: 0,
    borderRadius: 8,
  },
  modalHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "60%",
  },
  closeText: {
    color: "white",
    padding: 10,
    marginLeft: 100,
    fontSize: 20,
    fontWeight: "bold",
  },
  headText: {
    color: "white",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  modalBody: {
    marginTop: 15,
  },
  searchButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  aboutme: {
    fontSize: 15,
    marginLeft: 10,
    position: "absolute",
    top: 30,
    left: 60,
    color: "gray",
  },
})