import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useEffect, useState }  from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnlineUsers = () => {

const [data, setData] = useState([]);

  const online = async () => {
    try {
      const api_key = "HASH490J669";
      const user_id = "2465"; // Replace with your actual user ID
      const pageid = 0;

      const response = await fetch(
        `https://www.dadio.in/apps/serverapi/server/show-onlineuser.php?api_key=${api_key}&user_id=${user_id}&pageid=${pageid}`
      );

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData.online_userlist);
      } else {
        console.log("API request failed:", response.status);
      }
    } catch (err) {
      console.log("Error on fetching online users", err);
    }
  };

  useEffect(() => {
    online();
  }, []);

  const renderItem = ({ item }) => (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.profile_pic }} style={styles.image} />
      </View>
      <View style={styles.info}>
        <Text style={styles.Text}>{item.display_name}</Text>
        <Text>
          ID:{item.profile_code} {item.gender} , {item.current_age}yrs
        </Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusText}>Online</Text>
        <MaterialIcons name="online-prediction" size={24} color="orange" />
      </View>
    </Pressable>
  );

  console.log(data);

  return (
    <FlatList data={data} renderItem={renderItem} />
  )
}

export default OnlineUsers

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 18,
    borderBottomWidth:0.5,
    borderBottomColor:"lightgray"
  },
  imageContainer: {
    flex: 1,
    marginLeft: 10,
    marginBottom:10
  },
  image: {
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  info: {
    flex:3,
    marginBottom:10
  },
  Text: {
fontSize:16,
fontWeight:"bold",
marginBottom:10
  },
  status: {
    marginRight:10,
    marginBottom:10
  },
  statusText: {
    fontSize:16,
    fontWeight:"bold"
  },

})