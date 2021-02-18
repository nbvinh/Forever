import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Me = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ height: 50, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>MY ACCOUT</Text>
                </View>
                <View style={{ backgroundColor: "#DDDDDD", height: 180, paddingRight: 50, paddingLeft: 50 }}>
                    <Text style={styles.text}>Sing in to save, shop and view orders</Text>
                    <TouchableOpacity style={{ height: 50, justifyContent: "center", marginTop: 10, marginBottom: 10, backgroundColor: "black" }}
                        onPress={() => navigation.navigate("Login")} >
                        <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 18, color: "white" }}>SING IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 50, justifyContent: "center", marginTop: 10, marginBottom: 10, backgroundColor: "white" }}
                        onPress={() => navigation.navigate("Join")} >
                        <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 18, color: "black" }}>JOIN</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 0.5 }}
                        onPress={()=>navigation.navigate("Trackorder")}
                    >
                        <Text style={{ fontSize: 15 }}>TRACK ORDER</Text>
                        <Text style={{ marginBottom: 10 }}>Trace order and view details</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 10, borderBottomWidth: 0.5 }}>
                        <Text style={{ fontSize: 15 }}>FOREVER 21 CREDIT CARD</Text>
                        <Text style={{ marginBottom: 10 }}>Manage F21 Credit Card</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 15 }}>FOREVER 21 VISA CREDIT CARD</Text>
                        <Text style={{ marginBottom: 10 }}>Manage F21 Visa Credit Card</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, borderTopWidth: 13, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15 }}>NOTIFICATIONS</Text>
                        <Text style={{ marginBottom: 10 }}>View events and promotions</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, height: 60, borderBottomWidth: 1, borderTopWidth: 13, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>GIFT & E-GIFT CARD</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, height: 47, borderBottomWidth: 1, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>CHECK BALANCE</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, height: 47, borderBottomWidth: 1, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>HELP & SUPPORT</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, height: 47, borderBottomWidth: 1, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>SHIPPING INFO</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, height: 47, borderBottomWidth: 1, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>FIND A STORE</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, height: 47, borderBottomWidth: 1, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>GET THE FOREVER 21 CREDIT CARD</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, height: 47, borderBottomWidth: 1, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>CAREERS AT FOREVER 21</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, height: 47, borderBottomWidth: 1, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>NEWSLETTER</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, height: 47, borderBottomWidth: 1, borderColor: "#DDDDDD" }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>RATE OUR APP</Text>
                        <Text style={{ position: "absolute", left: 350, fontSize: 26 }}>></Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontWeight: "700",
        fontSize: 16
    }
});
export default Me;