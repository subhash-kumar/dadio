import { StyleSheet,
  Text,
  View,
  TouchableOpacity, } from 'react-native';
import React, { useState, useEffect }  from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import SearchUsers from './SearchUsers';

const SearchUser = () => {
const navigation = useNavigation();

    //Handle Search user toogle
  const [isSearchUserExpanded, setIsSearchUserExpanded] = useState(false);
  const handleSearchUserToggle = () => {
    setIsSearchUserExpanded((prev) => !prev);
  };

  return (
    <View>
      <TouchableOpacity
          style={styles.profileRow}
          onPress={handleSearchUserToggle}
        >
          <View style={styles.iconContainer}>
            <FontAwesome name="search" size={24} color="gray" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Search User</Text>
          </View>
        </TouchableOpacity>

        {isSearchUserExpanded && (
          <View style={styles.expandedOptions}>
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => navigation.navigate("My Preference")}
            >
              <Ionicons name="people" size={24} color="lightgray" />
              <Text style={styles.optionText}>My Search Preference</Text>
            </TouchableOpacity>
            <SearchUsers />
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() => navigation.navigate("Online User")}
            >
              <MaterialCommunityIcons
                name="heart-plus-outline"
                size={24}
                color="lightgray"
              />
              <Text style={styles.optionText}>Online Users</Text>
            </TouchableOpacity>
          </View>
        )}
    </View>
  )
}

export default SearchUser

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