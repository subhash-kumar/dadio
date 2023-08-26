import {  StyleSheet,
  Text,
  View,
  TouchableOpacity, } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import { useNavigation } from "@react-navigation/native";
import DeleteAccount from './DeleteAccount';

const Privacyandsecurity = () => {
 const navigation = useNavigation();
    //Handle Privacy and security
  const [isPrivacySecurityExpanded, setIsPrivacySecurityExpanded] =
  useState(false);
const handlePrivacySecurityToggle = () => {
  setIsPrivacySecurityExpanded((prev) => !prev);
};

  return (
    <View>
      <TouchableOpacity
          style={styles.profileRow}
          onPress={handlePrivacySecurityToggle}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="security" size={24} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Privacy and Security</Text>
          </View>
        </TouchableOpacity>

        {isPrivacySecurityExpanded && (
          <View style={styles.expandedOptions}>
            <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate("Privacy Controls")}>
              <MaterialIcons name="privacy-tip" size={24} color="lightgray" />
              <Text style={styles.optionText}>Privacy Controls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate("Update Password")}>
              <Foundation name="key" size={24} color="lightgray" />
              <Text style={styles.optionText}>Update Passwords</Text>
            </TouchableOpacity>
            <DeleteAccount />
          </View>
        )}
    </View>
  )
}

export default Privacyandsecurity

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