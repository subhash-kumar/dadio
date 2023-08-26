import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import UserLogin from './Screens/UserLogin';
import Main from './Screens/Main';
import Chats from './components/Chats';
import Personprofile from './components/Personprofile';
import QuickGuide from './HelpComponents/QuickGuide';
import FaQ from './HelpComponents/FaQ';
import PrivacyPolicy from './HelpComponents/PrivacyPolicy';
import Contact from './HelpComponents/Contact';
import ChatMessages from './components/ChatMessages';
import MyGift from './components/MyGift';
import BasicInfo from './components/BasicInfo';
import GiftShop from './components/GiftShop';

import MySearchPreference from "./components/searchUserComponents/MySearchPreference";
import OnlineUsers from "./components/searchUserComponents/OnlineUsers";
import PrivacyControls from "./components/PrivacyandSecurity/PrivacyControls";
import UpdatePassword from "./components/PrivacyandSecurity/UpdatePassword";

import Mypoints from "./components/Pointsandgiftshop/Mypoints";
import EarnedPoints from "./components/Pointsandgiftshop/EarnedPoints";
import SpendPoints from "./components/Pointsandgiftshop/SpendPoints";
import PayoutLog from "./components/Pointsandgiftshop/PayoutLog";
import MyChatSubscriptions from "./components/Pointsandgiftshop/MyChatSubscriptions";

const Stack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserLogin"
          component={UserLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Personprofile"
          component={Personprofile}
        />
        <Stack.Screen
          name="ChatMessages"
          component={ChatMessages}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
        />
        <Stack.Screen
          name="QuickGuide"
          component={QuickGuide}
        />
        <Stack.Screen
          name="FAQ"
          component={FaQ}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
        />
        <Stack.Screen
          name="MyGift"
          component={MyGift}
        />
        <Stack.Screen
          name="BasicInfo"
          component={BasicInfo}
        />
        <Stack.Screen
          name="GiftShop"
          component={GiftShop}
        />
        <Stack.Screen
          name="My Preference"
          component={MySearchPreference}
        />
        <Stack.Screen
          name="Online User"
          component={OnlineUsers}
        />
        <Stack.Screen
          name="Privacy Controls"
          component={PrivacyControls}
        />
        <Stack.Screen
          name="Update Password"
          component={UpdatePassword}
        />
        <Stack.Screen
          name="My Points"
          component={Mypoints}
        />
        <Stack.Screen
          name="Earned Points"
          component={EarnedPoints}
        />
        <Stack.Screen
          name="Spend Points"
          component={SpendPoints}
        />
        <Stack.Screen
          name="Payout Log"
          component={PayoutLog}
        />
        <Stack.Screen
          name="Buy Chat Subcription"
          component={MyChatSubscriptions}
        />
      
    </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({})