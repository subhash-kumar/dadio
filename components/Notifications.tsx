import { StyleSheet, Text, View, Image,
  FlatList,
  TouchableOpacity, Pressable,} from 'react-native';
import React, { useEffect, useState }  from 'react';
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {

   const [data, setData] = useState([]);
  const navigation = useNavigation();

  const notifications = async () => {
    try {
    const response = await fetch(
      "https://www.dadio.in/apps/serverapi/server/notification.php?api_key=HASH490J669&user_id=1"
    );
    const data = await response.json();
    if (data && data.notification_list) {
      setData(data.notification_list);
    } 
  }catch(err) {
    console.log(err);
  }
  };
  console.log(data);
  useEffect(() => {
    notifications();
  }, []);

  const renderItem = ({ item }) => (
    <Pressable style={styles.notificationContainer} onPress={() => navigation.navigate('Personprofile') }>
      <View style={styles.profileContainer}>
        <Image style={styles.userImage} source={{ uri: item.profile_pic }} />
      </View>
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationMsg}>{item.notification_msg}</Text>
        <Text style={styles.notificationDate}>{item.notification_date}</Text>
      </View>
    </Pressable>
  );

  return (
     <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item,index) => index.toString()}
    />
  )
}

export default Notifications

const styles = StyleSheet.create({
notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileContainer: {
    marginRight: 16,
  },
  userImage: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationMsg: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  notificationDate: {
    color: "#888",
  },

})