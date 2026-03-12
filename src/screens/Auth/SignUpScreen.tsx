import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from "react-native";
import ViewBackgroundColor from "../../components/View_component";
import Textinput_components from "../../components/Textinput_components";
import Checkbox_design from "../../components/Checkbox_design";
import Button_component from "../../components/Button_component";
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  SignUp: undefined;
  Verification: undefined
};





export default function SignUpScreen() {
     const navigation = useNavigation<NavigationProp<RootStackParamList>>();
     const [isLoading, setIsLoading] = useState(false);

      
    return(
       <ViewBackgroundColor>
            <Text style={styles.text}>Let's get started</Text>
            <Text style={styles.text1}>The lates movies and series{'\n'}are here</Text>
            <View style={styles.inputGroup}>
                <Textinput_components label="First Name" placeholder="Enter your first name"
                />
                <Textinput_components label="Last Name" placeholder="Enter your last name"
                />
                <Textinput_components label="Email Address" placeholder="Enter your email"
                />
                <Textinput_components label="Password" placeholder="Enter your password" isPassword={true}
                />
                 <Textinput_components label="Confirm Password" placeholder="Confirm your password" isPassword={true}
                 />
            </View>
            <View style={styles.stylecheckboxrow}>
                <Checkbox_design/> 
                 <Text style={styles.agreementText}>I agree to the <Text style={{color:  'rgb(87,189,201)'}}>Terms of Services</Text> {'\n'} and <Text style={{color:  'rgb(87,189,201)'}}>Privacy Policy</Text></Text>
            </View>
            <View style={{marginHorizontal:35, marginTop:30}}>
                {/* ៤. បង្ហាញលក្ខខណ្ឌ៖ បើ isLoading ពិត ឱ្យវិល បើមិនពិត បង្ហាញប៊ូតុងធម្មតា */}
                {isLoading ? (
                    
                    <ActivityIndicator size="large" color="rgb(87,189,201)" />
                ) : (
                    <Button_component
                        children_button="Sign Up"
                        onPress={()=>navigation.navigate('Verification')}
                        
                    />
                   
                )}
                
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
        marginTop: 10
    },
    text1:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8
    },
    inputGroup:{
        gap: 30,
        marginTop: 15,
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