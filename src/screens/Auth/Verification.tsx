import { StyleSheet, Text, TextInput, View, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useRef } from 'react'
import axios from 'axios'
import ViewBackgroundColor from '../../components/View_component'
import Button_component from '../../components/Button_component'
import { useNavigation, useRoute } from '@react-navigation/native'

const Verification = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const email = route.params?.email || "your email";

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<Array<TextInput | null>>([]);


  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

   
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleContinue = async () => {
    const fullCode = code.join('');
    if (fullCode.length < 6) {
      Alert.alert("Error", "សូមបញ្ចូលលេខកូដឱ្យគ្រប់ ៦ ខ្ទង់");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://laravel-auth-api-opal.vercel.app/api/verify-registration-code",
        { email: email, code: fullCode },
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer 123" 
          }
        }
      );

      Alert.alert("Success", "បញ្ជាក់គណនីជោគជ័យ!");
      navigation.navigate("Login");

    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "លេខកូដមិនត្រឹមត្រូវទេ";
      Alert.alert("Failed", errorMsg);
    } finally {
      setLoading(false);
    }
  };

 
  const handleResendCode = async () => {
    try {
      setLoading(true);
      await axios.post(
        "http://laravel-auth-api-opal.vercel.app/api/send-registration-code",
        { email: email },
        { headers: { "Authorization": "Bearer 123" } }
      );
      Alert.alert("Success", "លេខកូដថ្មីត្រូវបានផ្ញើទៅកាន់ Gmail ហើយ");
    } catch (error) {
      Alert.alert("Error", "មិនអាចផ្ញើលេខកូដបានទេ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ViewBackgroundColor>
      <View style={styles.container}>
        <Text style={styles.title1}>Verifying Your Account</Text>
        <Text style={styles.subtitle}>We have just sent your 6 digits code via your</Text>
        <Text style={{ fontSize: 15, color: 'rgb(145,145,155)', paddingVertical: 5 }}>
          email: <Text style={{ color: 'white' }}>{email}</Text>
        </Text>
      </View>

      <View style={styles.pincodecontainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.pincode, { color: 'white', fontSize: 20, textAlign: 'center' }]}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)} 
            onKeyPress={(e) => handleKeyPress(e, index)} 
            ref={(ref) => { inputs.current[index] = ref; }}
          />
        ))}
      </View>

      <View style={{ marginHorizontal: 35, marginTop: 30 }}>
        {loading ? (
          <ActivityIndicator color="rgb(87,189,201)" size="large" />
        ) : (
          <Button_component children_button='Continue' onPress={handleContinue} />
        )}
      </View>

      <View style={styles.text}>
        <Text style={styles.textcolor}>Didn't receive code? 
          <Text style={{ color: 'rgb(87,189,201)', fontWeight: 'bold' }} onPress={handleResendCode}> Resend</Text>
        </Text>
      </View>
    </ViewBackgroundColor>
  )
}

export default Verification

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', marginTop: 100 },
  title1: { fontSize: 30, fontWeight: 'bold', marginTop: 50, color: 'white', textAlign: 'center' },
  subtitle: { fontSize: 15, color: 'rgb(145,145,155)', marginTop: 10, textAlign: 'center' },
  pincodecontainer: { flexDirection: 'row', marginVertical: 40, justifyContent: 'center' },
  pincode: { width: 45, height: 50, borderWidth: 1, borderColor: 'rgb(87,189,201)', borderRadius: 10, marginHorizontal: 5, backgroundColor: 'rgba(255,255,255,0.05)' },
  text: { justifyContent: 'center', alignItems: 'center', marginVertical: 20 },
  textcolor: { color: 'rgb(146,146,156)' }
})