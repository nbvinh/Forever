import React,{ useState } from "react";
import { View,Text, TextInput,StyleSheet,TouchableOpacity } from "react-native";

const Trackorder =()=>{
    const [number,setNumber] = useState()
    const [address,setAddress] = useState()
    return(
        <View>
            <View style={styles.gross}>
                <Text style={styles.text}>ORDER NUMBER</Text>
                <TextInput 
                    style={styles.textinput}
                    onChangeText={(newvalue) =>setNumber(newvalue)}
                />
                <Text style={styles.required}>Required field</Text>
                <Text style={styles.text}>EMAIL ADDRESS</Text>
                <TextInput 
                    style={styles.textinput}
                    onChangeText={(newvalue) =>setAddress(newvalue)}
                />
                <Text style={styles.required}>Required field</Text>
                <TouchableOpacity style={styles.submit}>
                    <Text style={styles.textsubmit}>SUBMIT</Text>
                </TouchableOpacity>
                <Text style={styles.submitbottom}>NEED TO KNOW</Text>
                <Text style={styles.bottom}>It may take up to one business day for our tracking information to become available online</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        marginTop:10
    },
    required: {
        color: 'red',
        padding:10
    },
    gross: {
        padding:20,
    },
    textinput: {
        borderWidth:1,
        height:50,
    },
    submit: {
        borderWidth:1,
        backgroundColor:"black",
        height:50,
        justifyContent:'center'
    },
    textsubmit:{
        color:"white",
        textAlign:'center',
        fontSize:18,
    },
    submitbottom:{
        fontSize:17,
        fontWeight:'bold',
        marginTop:10
    },
    bottom :{
        fontSize:13,
        marginTop:10,
    }
});
export default Trackorder;