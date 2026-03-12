import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ViewBackgroundColor from "../../components/View_component";
import Textinput_components from "../../components/Textinput_components";
import Button_component from "../../components/Button_component";



type RootStackParamList = {
  ResetPassword: undefined;
  Login: undefined;
  Main: undefined;
}

export default function LoginScreen(){
      const navigation = useNavigation<NavigationProp<RootStackParamList>>();
      const handleLogin = () => {
        navigation.navigate('Main');
      }
    return(
         <ViewBackgroundColor>
            <View style={styles.containertext}>
                <Text style={styles.text}>Hi, Tiffany</Text>
            </View>
            <View style={[styles.containertext,{marginTop: 20}]}>
                <Text style={[styles.text,{fontSize: 15,fontWeight: 'normal'}]}>Welcome back! Please enter{'\n'}your details</Text>
            </View>
            <View style={styles.inputGroup}>
             <Textinput_components label="Email Address" placeholder="Enter your email"/>
             <Textinput_components label="Password" placeholder="Enter your password" isPassword={true}/>
             </View>
                 <View>
                     <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                        <Text style={{color: 'rgb(87,189,201)', textAlign: 'right', marginRight: 30, fontSize: 15,}}>Forgot Password?</Text>
                     </TouchableOpacity>
                 </View>
             <View style={{marginHorizontal:35,marginTop:30}}>
                <Button_component
                    children_button="Login"
                    onPress={handleLogin}
                />
                </View>
                
         </ViewBackgroundColor>
    )
}

const styles = StyleSheet.create({
    containertext:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    inputGroup:{
        gap: 30,
        marginTop: 50,
        marginHorizontal: 10,
    }
})