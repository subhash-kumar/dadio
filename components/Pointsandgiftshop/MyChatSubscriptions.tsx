import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MyChatSubscriptions = () => {

const [data, setData] = useState([]);
  
  const chat = async () => {
    try {
      const response = await fetch(
        "https://dadio.in/apps/serverapi/server/chat-package.php?api_key=HASH490J669"
      );
      const jsonData = await response.json();
      if (response.ok) {
        setData(jsonData.package_list);
      }
    } catch (err) {
      console.log("Error on subscriptions", err);
    }
  };

  useEffect(() => {
    chat();
  }, []);

  const getBackgroundColor = (package_id) => {
    switch (package_id) {
      case "silver":
        return "silver"; 
      case "gold":
        return "gold"; 
      case "platinum":
        return "gray"; 
      default:
        return "red"; 
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.container, { backgroundColor: getBackgroundColor(item.package_id) }]}>
      <Text style={styles.text}>{item.package_id}</Text>
      <Text style={styles.text}>{item.package_name}</Text>
      <Text style={styles.text}>{item.package_validity}</Text>
      <Text style={styles.text}>
        {" "}
        <FontAwesome name="rupee" size={24} color="black" />{" "}
        {item.package_price}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>BUY</Text>
      </TouchableOpacity>
    </View>
  );
  
  console.log("Chat subscriptions", data);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.package_id}
    />
  )
}

export default MyChatSubscriptions

const styles = StyleSheet.create({
    container: {
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    width: "70%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
    borderColor: "white",
  },
  text: {
    fontSize: 25,
    marginBottom: 5,
  },
  button: {
    borderWidth: 1,
    padding: 15,
    margin: 10,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
  },
})