import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ViewBackgroundColor from "../components/View_component";
import Textinput_components from "../components/Textinput_components";
import Button_component from "../components/Button_component";



export default function CreateNewPasswordScreen(){
    return(
        <ViewBackgroundColor>
            <View style={styles.container}>
                <Text style={styles.title1}>Create New Password</Text>
                <Text style={styles.subtitle}>Enter your new password</Text>
            </View>
            <View style={styles.inputGroup}>
               <Textinput_components label="New Password" placeholder="Enter your new password" isPassword={true}/>
               <Textinput_components label="Confirm Password" placeholder="Confirm your new password" isPassword={true}/>         
              </View>
              <View style={{marginHorizontal:35,marginTop:30}}>
              <Button_component
                children_button="Reset"
              />
              </View>
        </ViewBackgroundColor>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
    },
    title1:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        color: 'white',
    },
    subtitle:{
        fontSize: 16,
        color: 'rgb(145,145,155)',
        marginTop: 10,
    },
    inputGroup:{
        gap: 30,
        marginTop: 50,
        marginHorizontal: 10,
    }
})