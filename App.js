import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './Components/Home';
import Login from './Components/Login';
import Wishlist from './Components/Wishlist';
import Join from './Components/Join';
import Cart from './Components/Cart';
import Me from './Components/Me';
import Trackorder from './Components/Trackorder';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="App">
                <Stack.Screen options={{ headerShown: false }} name="Trang Chủ" component={Bottom} />
                <Stack.Screen name="Login" component={Login} options={{ headerTitleAlign: "center" }} />
                <Stack.Screen name="Join" component={Join} options={{ headerTitleAlign: "center" }} />
                <Stack.Screen name="Trackorder" component={Trackorder} options={{ headerTitleAlign: "center", title: "TRACK ORDER" }} />
                {/* <Stack.Screen name="Login" component={Login} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Cart" component={Cart} />
        </Drawer.Navigator>
    )
}
const Bottom = () => {
    return (
        <Tab.Navigator tabBarOptions={{ activeTintColor: "black", inactiveTintColor: "gray" }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: () => (
                        <Icon name="home" size={26} color='black' />
                    ),
                }}
            />
            <Tab.Screen name="Wishlist" component={Wishlist}
                options={{
                    tabBarLabel: 'Wishlist',
                    tabBarIcon: () => (
                        <Icon name="heart" size={26} color='black' />
                    )
                }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarLabel: 'Cart',
                tabBarIcon: () => (
                    <Icon name="cart-plus" size={26} color='black' />
                )
            }} />
            <Tab.Screen name="Me" component={Me} />

            {/* <Tab.Screen name="Login" component={Login} /> */}
        </Tab.Navigator>
    )
}


export default App;




// import React, { useEffect, useState } from 'react'
// import { View, Text, TouchableOpacity } from 'react-native'
// import axios from 'axios'
// import { login,onRegister } from "./test/Api";
// export default function App() {
//   const [token, setToken] = useState()
//   const onLogin = async () => {
//     const result = await login({
//       "email": "hello@gmail.com",
//       "password": "123456"
//     })
//     console.log('result', result)
//   }
//   const onSignup = async()=>{
//       const result = await onRegister({
//           "email" : "vindsh@gmail.com",
//           "password" : "243232131",
//           "userName" : "vinhasd"
//       })
//       console.log('res',result)
//   }
//   return (
//     <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
//       <TouchableOpacity onPress={()=>onLogin()}>
//         <Text>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=>onSignup()}>
//         <Text>Sign up</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }



// import React from "react";
// import { View, Text } from "react-native";

// import { Provider } from "react-redux";
// import { createStore } from "redux";

// import Home from "./src/Screen/Home";

// let store = createStore();

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Home />
//     </Provider>
//   );
// }
