import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import Preference from '../components/Preference';
import Notifications from '../components/Notifications';
import Random from '../components/Random';
import Chats from '../components/Chats';
import Profile from '../components/Profile';

const Tab = createBottomTabNavigator();

const Main = () => {
     const navigation = useNavigation();
  return (
   <Tab.Navigator>
      <Tab.Screen name="Preference"
                component={Preference}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <AntDesign name="heart" size={35} color="red" />,
                }} />
      <Tab.Screen 
                name="Notifications"
                component={Notifications}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Preference')}
                            style={styles.backButton}
                        >
                            <Ionicons name="arrow-back" size={25} color="black" />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: () => (
                        <Ionicons name="notifications" size={35} color="black" />
                    ),
                }} />
                <Tab.Screen
                name="Random"
                component={Random}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <FontAwesome name="phone-square" size={35} color="skyblue" />
                    ),
                }}
            />
            <Tab.Screen
                name="Chats"
                component={Chats}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Entypo name="chat" size={35} color="green" />,
                }}
            />
            <Tab.Screen
                name="My Account"
                component={Profile}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={styles.backButton}>
                            <Ionicons name="arrow-back-sharp" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: () => (
                        <FontAwesome name="user-circle" size={35} color="black" />
                    ),
                }}
            />
    </Tab.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({
     backButton: {
        marginLeft: 10,
    },
});