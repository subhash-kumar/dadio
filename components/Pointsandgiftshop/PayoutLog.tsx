import { StyleSheet, Text, View,FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

const PayoutLog = () => {

     const [data,setData] = useState([]);
    const payoutlog = async() => {
        try{
const response = await fetch("https://www.dadio.in/apps/serverapi/server/payout-log.php?api_key=HASH490J669&user_id=1");
const data =await response.json();
if(response.ok){
    setData(data.earn_list);
}
        }catch(err) {
            console.log("Error on fetching payout log",err)
        }
    }
    useEffect(()=> {
payoutlog();
    },[])
    const renderItem =({item})=> (
        <View style={styles.container}>
            <View style={styles.inner}>
            <Text style={styles.text}>Points: {item.points}</Text>
            <Text style={styles.text}>Payment Mode: {item.payment_mode}</Text>
            <Text style={styles.text}>Payment Number: {item.paytm_number}</Text>
            <Text style={styles.text}>Payment Notes: {item.notes} secs</Text>
            <Text style={styles.text}>Status: {item.status}</Text>
            </View>
        </View>
    )

  return (
     <FlatList data={data} renderItem={renderItem} keyExtractor={(item,index)=>index.toString()}/>
  )
}

export default PayoutLog

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