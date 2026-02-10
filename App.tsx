import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import SignUpScreen from "./src/screens/SignUpScreen";
import ViewComponent from "./src/components/View_component";
import LoginScreen from "./src/screens/LoginPage";
import Button_component from "./src/components/Button_component";
import CreateNewPasswordScreen from "./src/screens/Create_New_Password";
import Reset_PasswordScreen from "./src/screens/Reset_Password";
import Verification from './src/screens/Verification'
import Root from "./src/screens/Root";
import Navigation from './src/navigation/MainStackNavigation'

export default function App() {
  return(
    <Navigation/>
  )
}
