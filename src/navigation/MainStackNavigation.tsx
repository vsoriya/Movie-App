import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from '../screens/Auth/Root';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import VerificationScreen from '../screens/Auth/Verification';
import ResetpasswordScreen from '../screens/Auth/Reset_Password';
import LoginScreen from '../screens/Auth/LoginPage';
import Edit_profile from '../screens/Profile/Edit_profile';
import CreateNewPasswordScreen from '../screens/Auth/Create_New_Password';
import MainStackBottomNavigation from './MainStackBottomNavigation';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Route">
        <Stack.Screen name="Route" component={Root} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainStackBottomNavigation} />
        <Stack.Screen name="ResetPassword" component={ResetpasswordScreen} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
        <Stack.Screen name='Edit_profile' component={Edit_profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}