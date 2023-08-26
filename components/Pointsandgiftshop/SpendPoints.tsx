import { StyleSheet, Text, View, FlatList,ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

const SpendPoints = () => {

 const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Points = async () => {
    try {
      const response = await fetch(
        "https://www.dadio.in/apps/serverapi/server/spend.php?api_key=HASH490J669&user_id=1"
      );
      const data = await response.json();
      if (response.ok) {
        setData(data.spend_list);
    } else {
        setError("Error fetching data");
      }
    } catch (err) {
        setError("Error fetching data");
        console.log("Error on getting spend points", err);
      } finally {
        setLoading(false);
      }
  };
  useEffect(() => {
    Points();
  }, []);
  
  if (loading) {
    return <ActivityIndicator style={styles.loadingIndicator} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.text}>Payment Type: {item.spend_type}</Text>
        <Text style={styles.text}>Duration: {item.duration}</Text>
        <Text style={styles.text}>Spend Points: {item.spend_point}</Text>
        <Text style={styles.text}>Date: {item.spend_date}</Text>
      </View>
    </View>
  );

  return (
   <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default SpendPoints

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
  loadingIndicator: {
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
})