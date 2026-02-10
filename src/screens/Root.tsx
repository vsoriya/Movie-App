import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ViewBackgroundColor from '../components/View_component';
import Button_component from '../components/Button_component';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
};

export default function Root() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ViewBackgroundColor>
      <View style={styles.styleimage}>
        <Image 
          style={{ width: 150, height: 150 }} 
          source={require('../../assets/Cinemax.webp')} 
        />
        <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>CINEMAX</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.subText}>Enter your registered</Text>
          <Text style={styles.subText}>Phone Number to Sign Up</Text>
        </View>
      </View>

      <View style={{ marginHorizontal: 35, marginTop: 40 }}>
        <Button_component 
          children_button='Sign Up' 
          onPress={() => navigation.navigate('SignUp')} 
        />
      </View>

      <View style={styles.loginRow}>
        <Text style={{ color: 'white', fontSize: 15 }}>I already have an account?</Text>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.ruler}></View>
        <Text style={{ marginHorizontal: 10, color: 'white', fontSize: 14 }}>Or Sign Up with</Text>
        <View style={styles.ruler}></View>
      </View>

      <View style={styles.iconcontainer}>
        <View style={styles.socialCircle}>
          <Image style={styles.iconImage} source={require('../../assets/google.png')} />
        </View>
        <View style={[styles.socialCircle, { backgroundColor: 'white',borderRadius:30 }]}>
          <Image style={styles.iconImage} source={require('../../assets/apple.png')} />
        </View>
        <View style={styles.socialCircle}>
          <Image style={styles.iconImage} source={require('../../assets/facebook.png')} />
        </View>
      </View>
    </ViewBackgroundColor>
  );
}

const styles = StyleSheet.create({
  styleimage: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    fontSize: 15,
    color: 'rgb(146,146,156)',
    textAlign: 'center',
  },
  loginRow: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    gap: 10, 
  },
 
  loginButtonText: {
    color: 'rgb(93,202,215)',
    fontWeight: 'bold',
    fontSize: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  ruler: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
    marginHorizontal: 15,
  },
  iconcontainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialCircle: {
    marginHorizontal: 10,
  },
  iconImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});