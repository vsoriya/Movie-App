import React from "react";
import { View, Text, TextInput, Button, StyleSheet ,} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';



interface TextInputProps{
    label: string;
    placeholder: string;
    isPassword?: boolean;
    onChangeText?: (text: string) => void;
}

export default function Textinput_components({label,placeholder,isPassword,onChangeText}:TextInputProps) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor='#666'
                    secureTextEntry={!!isPassword}
                    style={styles.inputField}
                    onChangeText={onChangeText}
                />
                {isPassword &&(
                    <AntDesign name="eye-invisible" size={24} color="#666" style={styles.icon} />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        marginHorizontal: 15,
    },
    label:{
        color: 'white',
        paddingLeft: 30,
        fontSize: 16,
        marginBottom: 0,
    },
    inputWrapper:{
        flexDirection: 'row',
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 25,
        borderColor: 'rgb(36,37,50)',
        
    },
    inputField:{
          flex: 1, 
        color: 'white',
        height: '100%',
    },
    icon:{
        marginLeft: 10,
    }
})
    

