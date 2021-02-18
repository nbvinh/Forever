import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Cart = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ height: 50, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: 'center'}}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>CART</Text>
                </View>
                <View style={styeles.header}>
                    <Text style={{ textAlign: "center", fontSize: 15 }}>0 Item(s) : Total (excluding delivery) $0.00</Text>
                </View>
                <View style={{ borderBottomWidth: 10, borderColor: "#DDDDDD" }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image
                            style={{
                                height: 200,
                                width: 200,
                            }}
                            source={{
                                uri: "https://png.pngtree.com/png-clipart/20190905/original/pngtree-sketch-lady-handbag-illustration-png-image_4508624.jpg",
                            }}
                        />
                        <Text style={{ fontSize: 17, top: 10, fontWeight: "bold" }}>YOUR CART IS EMPTY</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Home")}
                            style={{ backgroundColor: "black", justifyContent: 'center', alignItems: 'center', borderWidth: 1, height: 60 }}
                        >
                            <Text style={{ fontSize: 19, color: "white", fontWeight: "bold" }}>Shop Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center', borderBottomWidth: 0.5, height: 50 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 17 }}>SAVE FOR LATER (0)</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center', borderBottomWidth: 0.5, height: 100 }}>
                    <Text>There are no item in save for later</Text>
                </View>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: 'center', height: 50, backgroundColor: "#FFFF66" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, color: "#555555" }}>CHECKOUT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styeles = StyleSheet.create({
    header: {
        borderTopWidth: 0.5,
        height: 60,
        borderBottomWidth: 0.5,
        justifyContent: "center",
    }
});
export default Cart;