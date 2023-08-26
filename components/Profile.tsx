import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity,  Modal, Button, ScrollView} from  'react-native'


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from "@react-navigation/native";
import NeedHelp from './NeedHelp/NeedHelp';
import Privacyandsecurity from './PrivacyandSecurity/Privacyandsecurity';
import PointsAndGiftsShop from './Pointsandgiftshop/PointsAndGiftsShop';
import MyProfile from './MyProfileComponents/MyProfile';
import SearchUser from './searchUserComponents/SearchUser';
import ProfileImage from './ProfileImage';
import { useUser } from '../UserContext';


const Profile = () => {
  const [data,setData] = useState('');
  const route = useRoute();
  const { userData } = useUser(); 
  const fetchprofile = async() => {
    try{
const response = await fetch("https://www.dadio.in/apps/serverapi/server/setprofilepicture.php?api_key=HASH490J669&user_id=1");
const data = await response.json();
if(response.ok) {
  setData(data);
}
    }catch(err) {
      console.log("error",err)
    }
  }
  useEffect(() => {
fetchprofile();
  },[])
  console.log("ProfileImage",data)

  //Logout
  const handleLogout = async () => {
    const apiKey = "HASH490J669";
    const userId = "1";
    const apiUrl = `https://www.dadio.in/apps/serverapi/server/logout.php?api_key=${apiKey}&user_id=${userId}`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
      });

      if (response.ok) {
        // Handle successful logout here, such as clearing user data from storage
        console.log("Logged out successfully");
        // Navigate to the login screen after logout
        navigation.navigate("Login"); // Replace "Login" with the appropriate screen name
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileImage />

        <View style={styles.profileRow}>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={26} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{userData.displayName}</Text>
            <Text>{userData.email}</Text>
          </View>
        </View>

        <MyProfile />

        <SearchUser />
        <PointsAndGiftsShop />

        <Privacyandsecurity />

        <TouchableOpacity
          style={styles.profileRow}
          onPress={() => navigation.navigate("Chats")}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="md-call" size={24} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Call and Chat Logs</Text>
          </View>
        </TouchableOpacity>

        <NeedHelp />

        <Pressable style={styles.profileRow} onPress={handleLogout}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="logout" size={24} color="red" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Logout</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
        )}

       

export default Profile

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
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
  profileRow: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: "center",
  },
  iconContainer: {
    margin: 13,
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
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
  },
  closeText: {
    color: "white",
    padding: 10,
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
  bodyContent: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
  },
  expandedOptions: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginBottom: 10,
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
})