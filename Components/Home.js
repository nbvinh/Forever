import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ borderBottomWidth:0.5,height:50,backgroundColor:"#FFFFFF", justifyContent:"center",alignItems:'center' }}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>FOREVER 21</Text>
      </View>
    </View>

  )
}
export default Home;