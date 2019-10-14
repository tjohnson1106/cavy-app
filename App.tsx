import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoadingScreen from "./src/screens/LoadingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD4inwTYVqemn7DXI2symXnmPK1s1-h4Q4",
  authDomain: "cavy-e38d0.firebaseapp.com",
  databaseURL: "https://cavy-e38d0.firebaseio.com",
  projectId: "cavy-e38d0",
  storageBucket: "cavy-e38d0.appspot.com",
  messagingSenderId: "160077735295",
  appId: "1:160077735295:web:85b5565b54eadd81a7e64a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  login: LoginScreen,
  Register: RegisterScreen
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
