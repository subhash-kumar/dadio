import { StyleSheet, Text, View,ScrollView,Pressable,Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather';

const CallsScreen = () => {
  return (
    <ScrollView>
      <Pressable>

      <View style={styles.page}>
        <View style={styles.caneraPreview}>
          <Text style={styles.name}>Subhash</Text>
          <Text style={styles.phoneNumber}>Ringing +91 889 9224 455</Text>

          {/* <View style={{flex: 1, marginTop: '100%'}} /> */}

          

        </View>

         <View style={styles.buttonsContainer}>
          <View style={styles.IconsBtn}>
              <Ionicons name='camera-outline' size={30} color={'#FFF'} />
            </View>

<View style={styles.IconsBtn}>
              <MaterialIcons name='camera-off' size={30} color={'#FFF'} />
            </View>

            <View style={styles.IconsBtn}>
              <MaterialIcons name='microphone-off' size={30} color={'#FFF'} />
            </View>

            <View style={[styles.IconsBtn, {backgroundColor: 'red'}]}>
              <MaterialIcons name='phone-hangup' size={30} color={'#FFF'} />
            </View>

            </View>   




      </View>




        {/* <View style={styles.chatContainer}>
          <View style={styles.userInfoContainer}>
            <Image
              source={require("../assets/favicon.png")}
              style={styles.userImage}
              alt="user"
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Subhash Kumar</Text>
              <Feather name="phone-incoming" size={20} color="red" />
            </View>
          </View>
          <View>
            <Text style={styles.timeText}><Ionicons name="md-call" size={20} color="gray" /></Text>
          </View>
        </View> */}


      </Pressable>
    </ScrollView>
  )
}

export default CallsScreen

const styles = StyleSheet.create({
  page: {
       height: '100%',
        backgroundColor: '#7b4e80',
  },
  caneraPreview: {
   
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    
    
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
buttonsContainer: {
  backgroundColor: '#333333',
  padding: 20,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  // width: '100%',
flexDirection: 'row',
justifyContent: 'space-between',
  marginTop: '100%',  
},
IconsBtn: {
  backgroundColor: '#4a4a4a',
  padding: 15,
  borderRadius: 50,
}

  //  chatContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   margin: 10,
  //   borderBottomWidth: 1,
  //   padding: 10,
  //   borderBottomColor: "rgb(255, 129, 178)",
  // },
  // userInfoContainer: {
  //   flex: 1,
  //   flexDirection: "row",

  // },
  // userImage: {
  //   backgroundColor: "red",
  //   height: 50,
  //   width: 50,
  //   borderRadius: 50,
  // },
  // userInfo: {
  //   margin: 5,
  //   marginLeft: 15,
  // },
  // userName: {
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  // timeText: {
  //   marginTop: 10,
  // },
})