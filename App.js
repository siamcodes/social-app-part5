import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyD0veqUiz-Hn1ssSgtw4uDwx0-CNKlcwo0",
  authDomain: "app-ch3-27bc3.firebaseapp.com",
  databaseURL: "https://app-ch3-27bc3-default-rtdb.firebaseio.com",
  projectId: "app-ch3-27bc3",
  storageBucket: "app-ch3-27bc3.appspot.com",
  messagingSenderId: "791652650782",
  appId: "1:791652650782:web:e9eb7356efe7ca1741c30f",
  measurementId: "G-2WSZ75NDX9"
};

firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator({
   Home:{
     screen: HomeScreen,
     navigationOptions: {
       tabBarIcon:({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor} /> 
     }
   },
   Message:{
    screen: MessageScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => <Ionicons name="chatbubble-outline" size={24} color={tintColor} />
    }
  },
  Post:{
    screen: PostScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => <Ionicons name="md-add-circle-sharp" size={40} color={tintColor} />
    }
  },
  Notification:{
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => <Ionicons name="ios-notifications-outline" size={24} color={tintColor} />
    }
  },
  Profile:{
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => <Ionicons name="person" size={24} color={tintColor} />
    }
  }
})

/*
const AppStack = createStackNavigator({
  Home: HomeScreen,
  Message: MessageScreen,
  Post: PostScreen,
  Notification: NotificationScreen,
  Profile: ProfileScreen,
});
*/

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
      {
          Loading: LoadingScreen,
          App: AppTabNavigator,
          Auth: AuthStack
      },
      {
          initialRouteName: "Loading"
      }
  )
);
