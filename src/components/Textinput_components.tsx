import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons'; 

interface TextInputProps {
    label?: string;
    placeholder?: string;
    isPassword?: boolean;
    onChangeText?: (text: string) => void;
    value?: string;
}

export default function Textinput_components({ label, placeholder, isPassword, onChangeText, value }: TextInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor='#666'
                    secureTextEntry={isPassword ? !showPassword : false}
                    style={styles.inputField}
                    onChangeText={onChangeText}
                    value={value}
                />
                {isPassword && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                       
                        <Ionicons 
                            name={showPassword ? "eye-outline" : "eye-off-outline"} 
                            size={22} 
                            color="#rgb(87,189,201)" 
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginBottom: 15,
    },
    label: {
        color: 'white',
        paddingLeft: 20,
        fontSize: 16,
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        height: 55, // បន្ថែមកម្ពស់ឱ្យស្អាត
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 28,
        borderColor: 'rgb(36,37,50)',
        backgroundColor: 'rgba(255,255,255,0.05)', // Style ឱ្យមើលទៅទំនើប
    },
    inputField: {
        flex: 1,
        color: 'white',
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    }
});