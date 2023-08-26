import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

const Personprofile = () => {
const [data,setData] = useState('');
  const fetchprofile = async() => {
    try{
const response = await fetch("https://www.dadio.in/apps/serverapi/server/profile.php?api_key=HASH490J669&user_id=1&profile_id=2");
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
  console.log("Profile",data)

  return (
    <View style={styles.head}>
      <Text>Personprofile</Text>
    </View>
  )
}

export default Personprofile

const styles = StyleSheet.create({ 
  head: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
  })