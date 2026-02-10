import React from "react";
import { ReactNode } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// Tell TS that children can be anything that is UI.
interface ViewProps{
    children: ReactNode,
    
}



export default function ViewBackgroundColor({children}:ViewProps) {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30,29,42)',
    }
})