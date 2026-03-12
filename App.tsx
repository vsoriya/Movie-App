import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TextComponent } from "react-native";
import SignUpScreen from "./src/screens/Auth/SignUpScreen";
import ViewComponent from "./src/components/View_component";
import LoginScreen from "./src/screens/Auth/LoginPage";
import Button_component from "./src/components/Button_component";
import CreateNewPasswordScreen from "./src/screens/Auth/Create_New_Password";
import Reset_PasswordScreen from "./src/screens/Auth/Reset_Password";
import Verification from './src/screens/Auth/Verification'
import Root from "./src/screens/Auth/Root";
import Navigation from './src/navigation/MainStackNavigation'
import Profile from "./src/screens/Profile/Profile";
import IconComponent from "./src/components/IconComponent";





export default function App() {
  return(
    <Navigation/>
  )
}
