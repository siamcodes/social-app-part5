import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import firebase from "firebase";

import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

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

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Message: MessageScreen,
  Notification: NotificationScreen,
  Post: PostScreen,
  Profile: ProfileScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
      {
          Loading: LoadingScreen,
          App: AppStack,
          Auth: AuthStack
      },
      {
          initialRouteName: "Loading"
      }
  )
);