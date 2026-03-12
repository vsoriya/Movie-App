import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ViewBackgroundColor from "../../components/View_component";
import Textinput_components from "../../components/Textinput_components";
import Button_component from "../../components/Button_component";
import CreateNewPasswordScreen from "./Create_New_Password";

type RootStackParamList = {
    CreateNewPassword: undefined
};
export default function Reset_PasswordScreen(){
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return(
       <ViewBackgroundColor>
            <View style={styles.container}>
                 <Text style={styles.title1}>Reset Password</Text>
                 <Text style={styles.subtitle}>Recover your account password</Text>
             </View>
             <View style={styles.inputGroup}>
                <Textinput_components label="Email Address" placeholder="Enter your email"/>
            </View>
            <View style={{marginHorizontal:35,marginTop:30}}>
            <Button_component
                children_button="Next"
                onPress={()=>navigation.navigate('CreateNewPassword')}
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
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        color: 'white',
    },
    subtitle:{
        fontSize: 15,
        color: 'rgb(145,145,155)',
        marginTop: 10,
    },
    inputGroup:{
        gap: 30,
        marginTop: 50,
        marginHorizontal: 10,
    }
})