import { ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
  ActivityIndicator, } from 'react-native';
import React, { useEffect, useState }  from 'react';
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
   const [data, setData] = useState([]);
  const navigation = useNavigation();
  const fetchmessages = async () => {
    try {
      const response = await fetch(
        "https://www.dadio.in/apps/serverapi/server/message-list.php?api_key=HASH490J669&user_id=1&pageid=0"
      );
      const data = await response.json();
      if (response.ok) {
        setData(data.message_list);
      }
    } catch (err) {
      console.log("error on fetching chat messages", err);
    }
  };
  console.log("messages", data);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={() => navigation.navigate("ChatMessages", {
        profilePicUri: item.profile_pic,
        displayName:item.display_name,
        profileId:item.profile_id,
      })}
    >
      <View style={styles.profileContainer}>
        <Image style={styles.userImage} source={{ uri: item.profile_pic }} />
      </View>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.display_name}</Text>
          <Text style={styles.recentMessage}>
            {item.msg_text.length > 25
              ? item.msg_text.substring(0, 25) + "..."
              : item.msg_text}
          </Text>
        </View>
        <Text style={styles.timeText}>{item.msg_time}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    fetchmessages();
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 5,
    borderBottomWidth: 1,
    padding: 6,
    borderBottomColor: "rgb(255, 129, 178)",
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImage: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  userInfo: {
    margin: 3,
    marginLeft: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timeText: {
    marginTop: 0,
  },
})