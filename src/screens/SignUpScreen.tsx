import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ViewBackgroundColor from "../components/View_component";
import Textinput_components from "../components/Textinput_components";
import Checkbox_design from "../components/Checkbox_design";
import Button_component from "../components/Button_component";
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  SignUp: undefined;
  Verification: undefined
};





export default function SignUpScreen() {
     const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return(
       <ViewBackgroundColor>
            <Text style={styles.text}>Let's get started</Text>
            <Text style={styles.text1}>The lates movies and series{'\n'}are here</Text>
            <View style={styles.inputGroup}>
                <Textinput_components label="Full Name" placeholder="Enter your full name"/>
                <Textinput_components label="Email Address" placeholder="Enter your email"/>
                <Textinput_components label="Password" placeholder="Enter your password" isPassword={true}/>
            </View>
            <View style={styles.stylecheckboxrow}>
                <Checkbox_design/> 
                 <Text style={styles.agreementText}>I agree to the <Text style={{color:  'rgb(87,189,201)'}}>Terms of Services</Text> {'\n'} and <Text style={{color:  'rgb(87,189,201)'}}>Privacy Policy</Text></Text>
            </View>
            <View style={{marginHorizontal:35,marginTop:30}}>
            <Button_component
                children_button="Sign Up"
                onPress={()=>{navigation.navigate('Verification')}}
            />
            </View>
       </ViewBackgroundColor>
       
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    },
    text1:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8
    },
    inputGroup:{
        gap: 30,
        marginTop: 50,
        marginHorizontal: 10,
        
    },
    agreementText:{
        color: 'white',
        fontSize: 15,           
        flexShrink: 1,
        
    
    },
    stylecheckboxrow:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 5,
        
    }
})