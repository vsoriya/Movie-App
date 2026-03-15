import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/Home";
import Search from "../screens/Search/Search";
import Details_about_Movie from "../screens/Home/Details_about_Movie";
import Profile from "../screens/Profile/Profile";



const Tab = createBottomTabNavigator();

export default function MainStackBottomNavigation() {
  return (
    <Tab.Navigator 
      screenOptions={{
        
        headerShown: false, 
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Watch_list" component={Details_about_Movie} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}