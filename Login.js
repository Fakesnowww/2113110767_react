import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Login = () => {

  const [n, setName] = useState('');
  const [e, setEmail] = useState(''); 

  const checkTextInput = () => {

    
    if (!n){
      alert('Please Enter Name');
      return;
    }
    
    else if (!e){
      alert('Please Enter Email');
      return;
    }
    else{
      alert('Success');
      return;
    }

  }

  return (
    <View style = {styles.container}>
      <TextInput
      placeholder = 'Enter Name'
      style = {styles.textInputStyle}
      value = {n}
      onChangeText={(value)=>{setName(value)}}
      />
      <Text>{''}</Text>
    <TextInput
      placeholder = 'Enter Email'
      style = {styles.textInputStyle}
      value = {e}
      onChangeText={(value)=>{setEmail(value)}}
    />
    <Text>{'\n'}</Text>
    <Button
        title='SUBMIT'
        onPress={()=>{checkTextInput()}}
        />   
    </View>
  )

}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,
    },
    textInputStyle:{
        width:'100%',
        height:40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginTop:15,
    },
});