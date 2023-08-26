import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';


export default function Login() {
        const navigation = useNavigation();
 const handleSocialMediaLogin = async (action, email) => {
    const apiURL = `https://www.dadio.in/apps/serverapi/server/socialmedia-login.php?api_key=HASH490J669`;
    
    // Determine the social media platform based on the action parameter
    const platform = action === 'facebook' ? 'Facebook' : 'Google';
    
    try {
      // Make the API request
      const response = await fetch(apiURL, {
        method: "POST",
        body: JSON.stringify({
          name: platform,
          email: email, 
          action: action,
        }),
      });

      const data = await response.json();
      console.log(data);

      // Handle the response based on the res_status
      if (data.res_status === "success") {
        // Successful login
        navigation.navigate("Main"); // Replace "Main" with your desired destination
      } else {
        // Handle other cases, e.g., invalid action, error, etc.
        Alert.alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("An error occurred. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
            <View>
                <Text style={styles.title}>Dadio</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            backgroundColor: "rgb(56, 189, 255)",
                            borderColor: "rgb(56, 189, 255)",
                        },
                    ]}
                     onPress={() => navigation.navigate("UserLogin")}
                >
                    <FontAwesome name="user" size={24} color="black" />
                    <Text style={styles.buttonText}>User Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        { backgroundColor: "red", borderColor: "red" },
                    ]}
                      
                onPress={() => handleSocialMediaLogin("google", encodeURIComponent("kalabccba@gmail.com"))} >
                    <FontAwesome5 name="google" size={24} color="green" />
                    <Text style={styles.buttonText}>Login With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            backgroundColor: "rgb(46, 60, 129)",
                            borderColor: "rgb(46, 60, 129)",
                        },
                    ]} 
                    
          onPress={() => handleSocialMediaLogin("facebook","kalabccba@gmail.com")}
                     
                >
                    <EvilIcons name="sc-facebook" size={28} color="white" />
                    <Text style={styles.buttonText}>Login With Facebook</Text>
                </TouchableOpacity>
                <Text style={styles.agreement}>
                    Register or Login means you agree with the following
                </Text>
                <TouchableOpacity>
                    <Text style={[styles.agreement, { color: "blue" }]}>
                        Terms and Conditions
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
 container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
    },
    buttonContainer: {
        marginTop: 25,
        alignItems: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 300, // You can adjust this width as needed
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 20,
    },
    buttonText: {
        marginLeft: 10,
        color: "white",
        fontSize: 16,
        fontWeight: "800",
    },
    agreement: {
        marginTop: 5,
        fontSize: 12,
    }

});