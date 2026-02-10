import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Checkbox_design(){
    return(
        <View style={styles.checkboxContainer}>
            <MaterialCommunityIcons   size={16} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    checkboxContainer:{
        flexDirection: 'row',
        width: 25,
        height: 25,
        borderRadius: 6, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1, 
         borderColor: 'rgb(147,147,157)',
         marginHorizontal: 25,
         marginVertical:10
    }
})