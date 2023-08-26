import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const EarnedPoints = () => {

    const [data, setData] = useState([]);

  const Points = async () => {
    try {
      const response = await fetch(
        "https://www.dadio.in/apps/serverapi/server/earned.php?api_key=HASH490J669&user_id=1"
      );
      const data =await response.json();
      if (response.ok) {
        setData(data.earn_list);
      }
    } catch (err) {
      console.log("Error on getting earned points", err);
    }
  };
  useEffect(()=> {
Points();
  },[])

  const renderItem =({item})=> (
<View style={styles.container}>
    <View style={styles.inner}>
    <Text style={styles.text}>Points: {item.add_points}</Text>
    <Text style={styles.text}>Date: {item.add_date}</Text>
    <Text style={styles.text}>Payment Type: {item.payment_type}</Text>
    <Text style={styles.text}>Duration: {item.dursation} secs</Text>
    <Text style={styles.text}>Voice call: {item.byuser}</Text>
    </View>
</View>

  )

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={(item,index)=>index.toString()}/>
  )
}

export default EarnedPoints

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        padding: 10,
        elevation: 2, // Android elevation for shadow
        shadowColor: "black", // iOS shadow color
        shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
        shadowOpacity: 0.2, // iOS shadow opacity
        shadowRadius: 2, // iOS shadow radius
      },
      inner: {
        borderWidth: 0.2,
        borderColor:"lightgray",
        padding: 10,
        backgroundColor: "white",
      },
      text: {
        fontSize: 16,
        fontWeight: "bold",
      },
})