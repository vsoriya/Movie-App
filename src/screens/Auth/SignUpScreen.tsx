import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import axios from "axios";
import ViewBackgroundColor from "../../components/View_component";
import Textinput_components from "../../components/Textinput_components";
import Checkbox_design from "../../components/Checkbox_design";
import Button_component from "../../components/Button_component";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  SignUp: undefined;
  Verification: { email: string };
};

export default function SignUpScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !passwordConfirmation) {
      Alert.alert("បញ្ហា", "សូមបំពេញព័ត៌មានទាំងអស់");
      return;
    }

    if (password !== passwordConfirmation) {
      Alert.alert("បញ្ហា", "Password មិនដូចគ្នាទេ");
      return;
    }

    try {
      setIsLoading(true);

     
      const response = await axios.post(
        "http://laravel-auth-api-opal.vercel.app/api/register",
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
           
            "Authorization": "Bearer 123" 
          },
        }
      );

      console.log("Register Success:", response.data);
      Alert.alert("ជោគជ័យ", "សូមពិនិត្យមើលលេខកូដក្នុង Gmail របស់អ្នក");
      
     
      navigation.navigate("Verification", { email: email });

    } catch (error: any) {
      console.log("Register Error Detail:", error?.response?.data || error.message);
      
      if (error.response) {
        const serverData = error.response.data;
       
        Alert.alert("បរាជ័យ", serverData.message || "មិនអាចចុះឈ្មោះបានទេ");
      } else {
        Alert.alert("Network Error", "មិនអាចភ្ជាប់ទៅកាន់ Server បានទេ");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ViewBackgroundColor>
      <Text style={styles.text}>Let's get started</Text>
      <Text style={styles.text1}>The latest movies and series are here</Text>

      <View style={styles.inputGroup}>
        <Textinput_components label="First Name" placeholder="First name" value={firstName} onChangeText={setFirstName} />
        <Textinput_components label="Last Name" placeholder="Last name" value={lastName} onChangeText={setLastName} />
        <Textinput_components label="Email Address" placeholder="Email" value={email} onChangeText={setEmail} />
        <Textinput_components label="Password" placeholder="Password" isPassword={true} value={password} onChangeText={setPassword} />
        <Textinput_components label="Confirm Password" placeholder="Confirm" isPassword={true} value={passwordConfirmation} onChangeText={setPasswordConfirmation} />
      </View>

      <View style={styles.stylecheckboxrow}>
        <Checkbox_design />
        <Text style={styles.agreementText}>I agree to the Terms and Privacy</Text>
      </View>

      <View style={{ marginHorizontal: 35, marginTop: 30 }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="rgb(87,189,201)" />
        ) : (
          <Button_component children_button="Sign Up" onPress={handleRegister} />
        )}
      </View>
    </ViewBackgroundColor>
  );
}

const styles = StyleSheet.create({
  text: { color: "white", fontSize: 30, fontWeight: "bold", textAlign: "center", marginTop: 10 },
  text1: { color: "white", fontSize: 16, textAlign: "center", marginTop: 8 },
  inputGroup: { gap: 20, marginTop: 15, marginHorizontal: 10 },
  agreementText: { color: "white", fontSize: 15, flexShrink: 1, marginLeft: 10 },
  stylecheckboxrow: { flexDirection: "row", alignItems: "center", marginTop: 15, marginHorizontal: 15 },
});