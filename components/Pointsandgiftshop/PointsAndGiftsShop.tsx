import { StyleSheet,
  Text,
  View,
  TouchableOpacity, } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

const PointsAndGiftsShop = () => {
const navigation = useNavigation();
     //Handle points and gift shop toogle
  const [isPointsExpanded, setIsPointsExpanded] = useState(false);
  const handlePointsToggle = () => {
    setIsPointsExpanded((prev) => !prev);
  };

  return (
    <View>
      <TouchableOpacity
          style={styles.profileRow}
          onPress={handlePointsToggle}
        >
          <View style={styles.iconContainer}>
            <FontAwesome5 name="gem" size={20} color="blue" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Points and Gift Shop</Text>
          </View>
        </TouchableOpacity>

        {isPointsExpanded && (
          <View style={styles.expandedOptions}>
            <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate("My Points")}>
              <FontAwesome5 name="gem" size={20} color="lightgray" />
              <Text style={styles.optionText}>Buy Points</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate("My Points")}>
              <MaterialCommunityIcons
                name="diamond"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>My points & Records</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate("Buy Chat Subcription")}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>Buy Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionRow} >
              <MaterialCommunityIcons
                name="chat-plus-outline"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>My chat Subscription</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => navigation.navigate("MyGift")}
            >
              <MaterialCommunityIcons
                name="gift-outline"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>My Gifts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => navigation.navigate("GiftShop")}
            >
              <MaterialCommunityIcons name="gift" size={24} color="lightgray" />
              <Text style={styles.optionText}>Gift Shop</Text>
            </TouchableOpacity>
          </View>
        )}
    </View>
  )
}

export default PointsAndGiftsShop

const styles = StyleSheet.create({
  profileRow: {
      display: "flex",
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      alignItems: "center",
    },
    iconContainer: {
      margin: 13,
    },
    textContainer: {
      marginLeft: 20,
    },
    title: {
      fontSize: 15,
      fontWeight: "bold",
    },
    bodyContent: {
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
    },
    bodyText: {
      fontSize: 18,
      fontWeight: "bold",
      padding: 8,
    },
    expandedOptions: {
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      marginBottom: 10,
    },
    optionRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 25,
    },
    optionText: {
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 19,
    },
})