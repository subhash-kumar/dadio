import { FlatList, StyleSheet, Text, View,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import  FontAwesome  from 'react-native-vector-icons';

const MyGift = () => {
  const [data, setData] = useState([]);

  const mygifts = async () => {
    try {
      const response = await fetch(
        "https://www.dadio.in/apps/serverapi/server/mygift.php?api_key=HASH490J669&user_id=1"
      );
      const data = await response.json();

      if (response.ok) {
        setData(data.mygift_list);
      }
    } catch (err) {
      console.log("Error on retrieving mygifts", err);
    }
  };
  useEffect(() => {
    mygifts();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{uri:item.gift_image}} style={styles.image}/>
        </View>
        <View style={styles.info}>
            <Text style={styles.text}>{item.gift_name}</Text>
            <Text style={styles.text}>Gift Price: <FontAwesome name="rupee" size={15} color="black" /> {item.gift_price}</Text>
            <Text style={styles.text}>Gift value: <FontAwesome name="rupee" size={15} color="black" /> {item.gift_value}</Text>
            <Text style={styles.text}>Buy Date: {item.buy_date}</Text>
        </View>
    </View>
  ) 
  console.log("Mygifts", data);
  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={(item,index)=> index.toString()}/>
  )
}

export default MyGift

const styles = StyleSheet.create({
  container: {
        flex:1,
        flexDirection:"row",
        justifyContent:'space-around',
        marginTop:15,
        borderBottomWidth:1,
        borderBottomColor:"lightgray"
    },
    text: {
        fontSize:15,
        fontWeight:"bold",

    },
    imageContainer: {
        height: 130,
        width: 130,
        shadowColor: "#000",
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius:5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom:10,
        marginLeft:20
    },
    image: {
        height: 130,
        width: 130,
    },
    info: {
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
        marginLeft:20,
        marginBottom:10
    }, 
})