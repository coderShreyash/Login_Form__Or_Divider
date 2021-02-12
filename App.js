import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, H1,Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


      <h1>Login Form</h1>
   
<h2 style={{marginTop:0}}>Email:
</h2>
<TextInput
style ={{width:350},styles.input}
      placeholder="Enter You Registered E-mail Address"></TextInput>
      <h2>Password: 

      </h2>
      <TextInput
      style={styles.input}
      placeholder="Enter Your Password"
      secureTextEntry></TextInput>
      <TouchableOpacity style={styles.submit}><Text style={{fontSize:40,fontWeight:500,fontFamily:"georgia"}}>Log In</Text></TouchableOpacity>
      <Text style={styles.line}>---OR---</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    fontSize:'x-large',
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    textAlign:"center"
  },
  input:{
    fontSize:25,
    textAlign:"center",
    borderWidth:3,
    borderColor:"black",
    borderRadius:7.5
  },
  submit:{
    marginTop:30,
    marginBottom:30,
    borderRadius:10,
    paddingRight:22.5,
    paddingLeft:22.5,
    paddingTop:7.5,
    paddingBottom:7.5,
    backgroundColor:"rgb(50,200,100)"
  },
  line:{
    height:1,
    marginTop:20,
    marginBottom:20,
    fontSize:50,
    fontWeight:1000,

  }

});
