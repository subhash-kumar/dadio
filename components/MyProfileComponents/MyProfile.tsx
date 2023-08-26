import {  StyleSheet,
  Text,
  View,
  TouchableOpacity, } from 'react-native';
import React, { useState, useEffect }  from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import AboutMe from './AboutMe';

const MyProfile = () => {
  const navigation = useNavigation();

  //Handle profile toogle
  const [isExpanded, setIsExpanded] = useState(false);
  const handleProfileToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
     <View>
      <TouchableOpacity
          style={styles.profileRow}
          onPress={handleProfileToggle}
        >
          <View style={styles.iconContainer}>
            <FontAwesome5 name="user-friends" size={19} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>My Profile</Text>
          </View>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.expandedOptions}>
            <AboutMe />
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => navigation.navigate("BasicInfo")}
            >
              <Entypo name="info-with-circle" size={20} color="lightgray" />
              <Text style={styles.optionText}>Basic Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <FontAwesome5 name="share" size={20} color="lightgray" />
              <Text style={styles.optionText}>Refer and Earn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow}>
              <Ionicons name="mic-circle" size={20} color="lightgray" />
              <Text style={styles.optionText}>Record Your Voice</Text>
            </TouchableOpacity>
          </View>
        )}

    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
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