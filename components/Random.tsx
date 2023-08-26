import { StyleSheet, Text, View, FlatList, TextInput,  Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Voximplant} from 'react-native-voximplant';


const Random = () => {
 const [caller, setCaller] = useState('');
  const route = useRoute();
  const navigation = useNavigation();
  // const {call} = route.params;

  // useEffect(() => {
  //   setCaller(call.getEndpoints()[0].displayName);

  //   call.on(Voximplant.CallEvents.Disconnected, callEvent => {
  //     navigation.navigate('Contacts');
  //   });

  //   return () => {
  //     call.off(Voximplant.CallEvents.Disconnected);
  //   };
  // }, []);

  const onDecline = () => {
    call.decline();
  };

  const onAccept = () => {
    navigation.navigate('Calling', {
      call,
      isIncomingCall: true,
    });
  };


  return (
    <>
      <View style={styles.root}>
        <Text style={styles.name}>Subhash</Text>
          <Text style={styles.phoneNumber}>WhatsApp video...</Text>
          
          <View style={[styles.row, {marginTop: 'auto'}]}>
        <View style={styles.iconContainer}>
          <Ionicons name="alarm" color="white" size={30} />
          <Text style={styles.iconText}>Remind me</Text>
        </View>
        <View style={styles.iconContainer}>
          <Entypo name="message" color="white" size={30} />
          <Text style={styles.iconText}>Message</Text>
        </View>
      </View>


      <View style={styles.row}>
        {/* Decline Button */}
        <Pressable onPress={onDecline} style={styles.iconContainer}>
          <View style={styles.iconButtonContainer}>
            <Feather name="x" color="white" size={40} />
          </View>
          <Text style={styles.iconText}>Decline</Text>
        </Pressable>

        {/* Accept Button */}
        <Pressable onPress={onAccept} style={styles.iconContainer}>
          <View
            style={[styles.iconButtonContainer, {backgroundColor: '#2e7bff'}]}>
            <Feather name="check" color="white" size={40} />
          </View>
          <Text style={styles.iconText}>Accept</Text>
        </Pressable>
      </View>
    </View>
    </>
  )
}

export default Random

const styles = StyleSheet.create({
  root: {flex: 1,
  alignItems: 'center',
  backgroundColor: '#404040'
  },
  name: {
    fontSize: 23,
    fontWeight: '600',
    color: '#FFF',
    marginTop: 50,
    marginBottom: 15,

  },
  phoneNumber: {
    fontSize:18,
    color: '#fff',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconText: {
    color: 'white',
    marginTop: 10,
  },
  iconButtonContainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50,
    margin: 10,
  },
})