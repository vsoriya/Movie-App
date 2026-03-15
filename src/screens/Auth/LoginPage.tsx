import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import ViewBackgroundColor from "../../components/View_component";
import Textinput_components from "../../components/Textinput_components";
import Button_component from "../../components/Button_component";

type RootStackParamList = {
  ResetPassword: undefined;
  Main: undefined;
  Verification: { email: string };
};

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPassword = password.trim();
Alert.alert("Data to send", `Email: ${cleanEmail}\nPass: ${cleanPassword}`);
  if (!cleanEmail || !cleanPassword) {
    Alert.alert("Error", "Please enter email and password");
    return;
  }

  try {
  setLoading(true);
  const response = await axios.post("http://laravel-auth-api-opal.vercel.app/api/login", 
    { email: cleanEmail, password: cleanPassword },
    { headers: { "Authorization": "Bearer 123" } } 
  );

  const data = response.data;
  
  if (data.token) {
  
    await AsyncStorage.setItem("token", data.token);
    
   
    if (data.user) {
      await AsyncStorage.setItem("user", JSON.stringify({
        name: data.user.name,
        email: data.user.email
      }));
    }

    Alert.alert("Success", "Login successful");
    navigation.navigate("Main");
  }
} catch (error: any) {

  console.log("Full Error:", error); 
  
  const msg = error.response?.data?.message || "Login Failed. Please try again.";
  Alert.alert("Error", msg);
}
};

  return (
    <ViewBackgroundColor>
      <View style={styles.containertext}>
        <Text style={styles.text}>Welcome Back</Text>
      </View>

      <View style={[styles.containertext, { marginTop: 20 }]}>
        <Text style={[styles.text, { fontSize: 15, fontWeight: "normal", color: 'gray' }]}>
          Please enter your details to login
        </Text>
      </View>

      <View style={styles.inputGroup}>
        <Textinput_components
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />

        <Textinput_components
          label="Password"
          placeholder="Enter your password"
          isPassword={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={{ marginHorizontal: 35, marginTop: 40 }}>
        {loading ? (
          <ActivityIndicator size="large" color="rgb(87,189,201)" />
        ) : (
          <Button_component
            children_button="Login"
            onPress={handleLogin}
          />
        )}
      </View>

      <View style={styles.footer}>
        <Text style={{ color: 'white' }}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp" as any)}>
          <Text style={{ color: "rgb(87,189,201)", fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ViewBackgroundColor>
  );
}

const styles = StyleSheet.create({
  containertext: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  inputGroup: {
    gap: 25,
    marginTop: 50,
    marginHorizontal: 10,
  },
  forgotPassword: {
    color: "rgb(87,189,201)",
    textAlign: "right",
    marginRight: 30,
    fontSize: 15,
    marginTop: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  }
});