import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const onChangeText = (value) => setEmail(value)
  return (
    <View style={{ flex:1 }}>
      <View style={{padding:30}}>
        <Text>Email Address</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={email}
          placeholder='Type Your Email'
        />
        <Text style={{ color: 'red', marginTop: 5, marginBottom: 5 }}>Required field</Text>
        <Text>Password</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(newValue) => setPassword(newValue)}
          placeholder='Type Your Password'
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text>Remember me</Text>
        </View>
        <TouchableOpacity style={{ marginTop: 30, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', height: 50 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }}>
          <Text style={{ textDecorationLine: 'underline' }}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 0.5, marginTop: 20 }}></View>
        <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }}>
          <Text style={{ textDecorationLine: 'underline' }}>Don't have an Account</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor:'#3433',bottom:0, position:'absolute', padding:30,width:'100%'}}>
        <Text>Face ID setting</Text>
        <Text>Turn on/off face ID, go to [My account] > [Setting] > [Face ID] > On/Off</Text>
      </View>
    </View>

  );
}

export default Login;