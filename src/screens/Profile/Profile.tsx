import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text,StyleSheet, } from "react-native";
import ViewBackgroundColor from "../../components/View_component";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView } from "react-native";
import IconComponent from "../../components/IconComponent";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Profile(){
    return(
        
        <ViewBackgroundColor>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Profile</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.editpf}>
                <AntDesign name="edit" size={24} color="rgb(93,202,215)" />
                </View>
            </View>
            <View style={styles.premium}>
                <View style={styles.premiumicon}>
                    <MaterialIcons name="workspace-premium" size={30} color="black" />
                    <Text style={styles.fontsize}>Premium Member{'\n'}<Text style={{color:'rgb(252,233,210)'}}>New movies are coming for you,{'\n'}<Text>Dowloard Now!</Text></Text></Text>
                </View>
            </View>
            
            <View style={styles.containeraccount}>
                <View style={styles.mainaccount}>
                <Text style={styles.account}>Account</Text>
                </View>
                <View style={styles.arrowContainer}>
                     <AntDesign name="arrow-right" size={24} color="rgb(93,202,215)" />
                </View>
                <View style={styles.iconuser}>
                    <View style={styles.borderRadiususer}>
                    <AntDesign name="user" size={20} color="rgb(93,202,215)" />
                    </View>
                    <View style={styles.Mainmember}>
                    <Text style={{fontSize:20,color:'white'}}>Member</Text>
                     </View>
                     <View style={[styles.arrowContainer,{top:10}]}>
                     <AntDesign name="arrow-right" size={24} color="rgb(93,202,215)" />
                </View>
                </View>
                <View style={styles.ruler}></View>
                <View style={{flexDirection:'row'}}>
                <IconComponent iconName="lock" color="rgb(146,146,156)"/>
                <View style={{left:10}}>
                <Text style={{fontSize:20,color:'white',top:20}}>Change Password</Text>
                </View>
                </View>
            </View>
            
            <View style={styles.containeraccount}>
                <View style={{marginLeft:20,marginTop:20}}>
                <Text style={styles.text}>General</Text>
                </View>
                <View style={styles.arrowContainer}>
                     <AntDesign name="arrow-right" size={24} color="rgb(93,202,215)" />
                </View>
                <View style={{flexDirection:'row'}}>
                 <View style={[styles.borderRadiususer,{marginLeft:15,marginTop:15,}]}>
                    <Ionicons name="notifications" size={24} color="black" />
                 </View>
                 
                 <View style={styles.Mainmember}>
                    <Text style={{fontSize:20,color:'white',marginTop:10,left:5}}>Notification</Text>
                     </View>
                 </View>
                 <View>
                    <View style={{flexDirection:'row'}}>
                <View style={styles.mainmater}>
                    <View style={styles.mainmater2}>
                <MaterialIcons name="language" size={24} color="black" />
                </View>
                </View>
                <View style={{left:10}}>
                <Text style={{fontSize:20,color:'white',top:27}}>Language</Text>
                </View>
                </View>
                   
                 </View>
            </View>
            </ScrollView>
        </ViewBackgroundColor>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:60
    },
    text:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    box:{
        borderWidth:1,
        height:70,
        marginTop:20,
        borderRadius:15,
        marginHorizontal:20,
        borderColor:'rgb(37,40,53)'
    },
    editpf:{
        alignItems:'flex-end',
        justifyContent:'center',
        margin:20,
        textAlign:'center'
    },
    premium:{
        borderWidth:1,
        height:90,
        marginTop:20,
        marginHorizontal:20,
        borderRadius:15,
        backgroundColor:'rgb(240,140,52)'
    },
    premiumicon:{
        marginTop:20,
        marginLeft:30,
        flexDirection:'row'
    },
    fontsize:{
        fontSize:16,
        color:'white',
        marginLeft:10
    },
    containeraccount:{
        borderWidth:1,
        height:190,
        marginTop:20,
        borderRadius:20,
        marginHorizontal:20,
        borderColor:'rgb(37,40,53)'
    },
    mainaccount:{
        marginLeft:20,
        marginTop:15
    },
    account:{
        color:'white',
        fontSize:22,
        fontWeight:'bold'
    },
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
    Mainmember:{
        marginLeft:10,
        marginTop:10
    },
    arrowContainer:{
       position:'absolute',
        right:30,
        marginTop:70
    },
    ruler:{
        marginTop:20,
        borderBottomWidth:1,
        marginHorizontal:30,
        borderBottomColor:'rgb(37,40,53)',
    },
    
    MaterialIcons:{
        borderWidth:1,
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:15,
        top:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(37,40,53)',
        borderColor:'rgb(37,40,53)',
        textAlign:'center'
    },
    mainmater:{
        marginLeft:15,
        top:20
    },
    mainmater2:{
        borderWidth:1,
        height:40,
        width:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
         backgroundColor:'rgb(37,40,53)',
        borderColor:'rgb(37,40,53)',
    }
    
})