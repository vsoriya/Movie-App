import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/Home";
import Search from "../screens/Search/Search";
import Details_about_Movie from "../screens/Home/Details_about_Movie";



const Tab = createBottomTabNavigator();

export default function MainStackBottomNavigation() {
  return (
    <Tab.Navigator 
      screenOptions={{
        // Global setting to avoid repetition
        headerShown: false, 
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Watch_list" component={Details_about_Movie} />
    </Tab.Navigator>
  )
}