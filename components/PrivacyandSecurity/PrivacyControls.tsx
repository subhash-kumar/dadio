import { StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const PrivacyControls = () => {

 const navigation = useNavigation();
  const [isRandomCallAvailable, setIsRandomCallAvailable] = useState(false);
  const [isChatAvailable, setIsChatAvailable] = useState(false);

  const handleRandomCallToggle = () => {
    setIsRandomCallAvailable(!isRandomCallAvailable);
  };

  const handleChatToggle = () => {
    setIsChatAvailable(!isChatAvailable);
  };

  const handleUpdate = () => {
    const apiKey = 'HASH490J669';
    const userId = '1';
    const randomCallValue = isRandomCallAvailable ? '10' : '0';
    const randomChatValue = isChatAvailable ? '10' : '0';

    const url = `https://www.dadio.in/apps/serverapi/server/save-privacy-control.php?api_key=${apiKey}&user_id=${userId}&random_call=${randomCallValue}&random_chat=${randomChatValue}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Handle the API response as needed
        console.log('API response:', data);
        navigation.goBack();
      })
      .catch(error => {
        console.error('API error:', error);
      });
  };


  return (
   <View>
      <View style={styles.option}>
        <Text style={styles.heading}>Available for Random Calls</Text>
        <Pressable
          style={[styles.checkbox, isRandomCallAvailable && styles.checkboxSelected]}
          onPress={handleRandomCallToggle}
        >
          {isRandomCallAvailable && <AntDesign name="check" size={18} color="white" />}
        </Pressable>
      </View>
      <View style={styles.option}>
        <Text style={styles.heading}>Available for Chat with Unmatched Person</Text>
        <Pressable
          style={[styles.checkbox, isChatAvailable && styles.checkboxSelected]}
          onPress={handleChatToggle}
        >
          {isChatAvailable && <AntDesign name="check" size={18} color="white" />}
        </Pressable>
      </View>
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PrivacyControls

const styles = StyleSheet.create({
     option: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: 'black',
    borderColor: 'black',
  },
  updateButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    width:"90%",
    alignSelf:"center"
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})