import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";

const UpdatePassword = () => {

   const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleUpdate = () => {
    if(password===confirmpassword){
        Alert.alert("Password updated")
        navigation.goBack();
    }else {
    Alert.alert("Password do not match")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          placeholder="Enter New Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.fields}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="Enter Confirm Password"
          value={confirmpassword}
          onChangeText={(text) => setConfirmpassword(text)}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleUpdate} style={styles.button}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UpdatePassword

const styles = StyleSheet.create({
     container: {
        flex:1,
        margin:20    
    },
    fields: {
   marginBottom:20
    },
    label: {
        fontSize:20,
        fontWeight:"bold"
    },
    input: {
       marginTop:8,
       borderBottomWidth:1,
       borderBottomColor:"lightgray",
       padding:10,
       fontSize:15
    },
    button: {
        backgroundColor:"black",
        padding:13,
        alignItems:"center",
        borderRadius:10,
        marginTop:10,
    },
    buttonText: {
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
})