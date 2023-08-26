import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons';

const GiftShop = () => {
const [data, setData] = useState([]);
  const gifts = async () => {
    try {
      const response = await fetch(
        "https://www.dadio.in/apps/serverapi/server/gift-shop.php?api_key=HASH490J669&user_id=1"
      );
      const data = await response.json();
      if (response.ok) {
        setData(data.gift_list);
      }
    } catch (err) {
      console.log("Error on fetching gifts for shop", err);
    }
  };
  useEffect(() => {
    gifts();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.price}><FontAwesome name="rupee" size={15} color="black" /> {item.gift_price}</Text>
      <Image source={{ uri: item.gift_image }} style={styles.image} />
      <TouchableOpacity style={styles.buy}>
        <Text style={styles.buyButton}>BUY</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.gift_id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
    </View> 
  )
}

export default GiftShop

const styles = StyleSheet.create({
   container: {
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    backgroundColor:"orange",
    padding:10
  },
  buy: {
  backgroundColor:"black",
  marginTop:5,
  borderRadius:5
  },
  buyButton: {
    fontSize: 14,
    color: "#ffffff",
    padding:10
  },
})