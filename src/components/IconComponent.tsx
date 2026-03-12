import React from "react";
import {View,Text,StyleSheet} from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign'

export default function IconComponent({iconName,IconComponent = AntDesign}:any){
    return(
        <View style={styles.iconuser}>
           <View style={styles.borderRadiususer}>
          <IconComponent name={iconName} size ={20} color="black"/>
          </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    iconuser:{
        marginLeft:15,
        marginTop:15,
        flexDirection:'row'
    },
    borderRadiususer:{
        borderWidth:1,
        width:40,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(37,40,53)',
        borderColor:'rgb(37,40,53)',
    },
})