import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const API_KEY = "HASH490J669";
const SEARCH_API_ENDPOINT = "https://www.dadio.in/apps/serverapi/server/search-userid.php";

const SearchUsers = () => {

 // Handle Search User modal
  const [isSearchUserModalVisible, setIsSearchUserModalVisible] =
  useState(false);
const [profileId, setProfileId] = useState("");

const handleSearchUserModalToggle = () => {
  setIsSearchUserModalVisible(!isSearchUserModalVisible);
};

const handleProfileIdChange = (text) => {
  setProfileId(text);
};

const handleSearchUser = async () => {
  if (!profileId) {
    Alert.alert("Error", "Please enter a Profile ID.");
    return;
  }

  try {
    const response = await fetch(
      `${SEARCH_API_ENDPOINT}?api_key=${API_KEY}&user_id=1&profile_id=2&user_searchid=${encodeURIComponent(profileId)}`
    );

    const data = await response.json();
console.log("searched user",data)
    if (data.res_status === "success") {
      // Handle successful search here
      console.log("User found:", data);
      Alert.alert("User Found")
    } else if (data.res_status === "invalid_id") {
      // Handle invalid ID case here
      console.log("Invalid user ID.");
      Alert.alert("Error", "Invalid user ID.");
    }
  } catch (error) {
    console.error("Error searching user:", error);
  }

  // Clear the input and close the modal
  setProfileId("");
  setIsSearchUserModalVisible(false);
};

  return (
    <View>
      <TouchableOpacity
              style={styles.optionRow}
              onPress={handleSearchUserModalToggle}
            >
              <FontAwesome5 name="search" size={24} color="lightgray" />
              <Text style={styles.optionText}>Search Users</Text>
            </TouchableOpacity>
            <Modal transparent={true} visible={isSearchUserModalVisible}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeading}>
                <Text style={styles.headText}>Search User</Text>
                <TouchableOpacity onPress={handleSearchUserModalToggle}>
                  <Text style={styles.closeText}>
                    <MaterialIcons name="cancel" size={24} color="white" />
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modalBody}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Enter Profile ID"
                  value={profileId}
                  onChangeText={handleProfileIdChange}
                />
                <TouchableOpacity
                  style={styles.searchButton}
                  onPress={handleSearchUser}
                >
                  <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
    </View>
  )
}

export default SearchUsers

const styles = StyleSheet.create({
    aboutme: {
      fontSize: 15,
      marginLeft: 10,
      position:"absolute",
      top:30,
      left:60,
      color:"gray"
    },
    modal: {
      flex: 1,
      justifyContent: "center", // To center the modal vertically
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)" // Semi-transparent background color
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
      width:"60%"
    },
    closeText: {
      color: "white",
      padding: 10,
      marginLeft:100,
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
})