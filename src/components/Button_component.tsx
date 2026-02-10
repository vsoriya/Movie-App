import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ButtonProps{
    children_button?: string;
    onPress ?: ()=> void;
}

export default function Button_component({ children_button, onPress }:ButtonProps){
    return(
        
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{children_button}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'rgb(93,202,215)',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 35,
        // marginTop: 30,
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }   
})
