import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const NeedHelp = () => {
  const [modalvisible, setModalvisible] = useState(false);
    const navigation = useNavigation();
  
    //toggle help modal when press back button
    const handleToggle = () => {
      setModalvisible(!modalvisible);
    };
    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        setModalvisible(false);
      });
  
      // Clean up the subscription when the component is unmounted
      return unsubscribe;
    }, [navigation]);

  return (
     <View>
      <TouchableOpacity style={styles.profileRow} onPress={handleToggle}>
          <View style={styles.iconContainer}>
            <Ionicons name="help-circle" size={24} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Need Help</Text>
          </View>
        </TouchableOpacity>

        <Modal transparent={true} visible={modalvisible}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeading}>
                <Text style={styles.headText}>Need Help?</Text>
                <TouchableOpacity onPress={handleToggle}>
                  <Text style={styles.closeText}>
                    <MaterialIcons name="cancel" size={24} color="white" />
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modalBody}>
                <TouchableOpacity
                  style={styles.bodyContent}
                  onPress={() => navigation.navigate("QuickGuide")}
                >
                  <Text style={styles.bodyText}>Quick Start Guide</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bodyContent}
                  onPress={() => navigation.navigate("FAQ")}
                >
                  <Text style={styles.bodyText}>FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bodyContent}
                  onPress={() => navigation.navigate("PrivacyPolicy")}
                >
                  <Text style={styles.bodyText}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bodyContent}
                  onPress={() => navigation.navigate("Contact")}
                >
                  <Text style={styles.bodyText}>Contact Us</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
    </View>
  )
}

export default NeedHelp

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
})