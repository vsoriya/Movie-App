import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/Home";
import Search from "../screens/Search/Search";
import Details_about_Movie from "../screens/Home/Details_about_Movie";



const Tab = createBottomTabNavigator();

export default function MainStackBottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Tab.Screen name="Search" component={Search} options={{headerShown:false}}/>
      <Tab.Screen name="Watch_list" component={Details_about_Movie} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}