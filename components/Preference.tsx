import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Preference = () => {
  return (
    <View style={styles.container}>
      <Entypo name="emoji-sad" size={60} color="red" />
      <Text style={styles.text}>Oops! No profile found as per your preference</Text>
    </View>
  )
}

export default Preference

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  }
})