import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ViewBackgroundColor from '../../components/View_component'
import Button_component from '../../components/Button_component'

const Verification = () => {
  return (
    <ViewBackgroundColor>
      <View style={styles.container}>
        <Text style={styles.title1}>Verifiying Your Account</Text>
        <Text style={styles.subtitle}>We have just send your 6 digits code via your</Text>
        <Text style={{fontSize:15,color:'rgb(145,145,155)',paddingVertical:5}}>email<Text style={{color:'white',}}> example@gmail.com</Text></Text>
        </View>
        <View style={styles.pincodecontainer}>
          <TextInput style={styles.pincode}/>
          <TextInput style={styles.pincode}/>
          <TextInput style={styles.pincode}/>
          <TextInput style={styles.pincode}/>
          <TextInput style={styles.pincode}/>
          <TextInput style={styles.pincode}/>
        </View>
        <View style={{marginHorizontal:35,marginTop:30}}>
        <Button_component
        children_button='Continue'
        />
        </View>
        <View style={styles.text}>
          <Text style={styles.textcolor}>Didn't receive code?<Text style={{color:'rgb(87,189,201)'}}> Resend</Text></Text>
        </View>
    </ViewBackgroundColor>
  )
}

export default Verification

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
    pincodecontainer:{
      flexDirection:'row',
      marginVertical:40,
      justifyContent:'center',
      
      
    },
    pincode:{
      width:50,
      height:50,
      borderWidth:1,
      borderColor: 'rgb(87,189,201)',
      borderRadius:10,
      marginHorizontal:5
    },
    text:{
      justifyContent:'center',
      alignItems:'center',
      marginVertical:20,
    },
    textcolor:{
      color:'rgb(146,146,156)'
    }
})