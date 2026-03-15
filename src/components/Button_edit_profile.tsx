import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface ButtonProps{
    children_button?: string;
    onPress ?: ()=> void;
}

export default function Button_edit({ children_button, onPress }:ButtonProps){
    return(
        
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <AntDesign name="edit" size={24} color="rgb(93,202,215)" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        fontSize : 250,
        height : 30,
        margin : 10,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom : 25
    }
})
