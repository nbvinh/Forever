import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Wishlist = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: 'center',marginBottom:20,borderBottomWidth:0.5 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>WISHLIST</Text>
            </View>
            <View style={{ position: "absolute", top: 40, paddingLeft: 50, paddingRight: 50 }}>
                <Image
                    style={{ width: 300, height: 200,marginTop:60 }}
                    source={{
                        uri:
                            'https://www.wikihow.com/images_en/thumb/f/f2/Write-a-Book-Step-1Bullet1-Version-2.jpg/v4-728px-Write-a-Book-Step-1Bullet1-Version-2.jpg',
                    }}
                />
                <Text style={styles.text}>YOUR WISHLIST IS EMPTY</Text>
                <Text style={{ textAlign: "center", marginTop: 10, color: "#C0C0C0" }}> Join to start saving or sign to view items in your wishlist</Text>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{ height: 50, backgroundColor: "black" }} onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: "white", textAlign: "center", paddingTop: 12, fontWeight: "bold", fontSize: 16.5 }}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{ height: 50, backgroundColor: "white", borderWidth: 2 }} onPress={() => navigation.navigate("Join")}>
                        <Text style={{ color: "black", textAlign: "center", paddingTop: 12, fontWeight: "bold", fontSize: 16.5 }}>JOIN</Text>

                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 18
    }
});
export default Wishlist;