import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

const Join = () => {
    const [first, setFirst] = useState()
    const [last, setLast] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [confirmemail, setConfirmemail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const onChangeText = (value) => setFirst(value)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [selectedValue, setSelectedValue] = useState("0");
    const [checked, setChecked] = useState('first');
    const [checkedtwo, setCheckedtwo] = useState('first');

    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Text style={styles.text}>FIRST NAME</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(newValue) => setFirst(newValue)}
                />
                <Text style={styles.text}>LAST NAME</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(newValue) => setLast(newValue)}
                />
                <Text style={styles.text}>DATE OF BIRTH(OPTIONAL)</Text>
                <Picker
                    selectedValue={selectedValue}

                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    <Picker.Item label="MM/DD" value="0"></Picker.Item>
                    <Picker.Item label="January" value="1"></Picker.Item>
                    <Picker.Item label="February" value="2"></Picker.Item>
                </Picker>
                <Text style={styles.text}>GENDER (OPTIONAL)</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ marginRight: 130, marginLeft: 20 }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                    </View>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                </View>
                <Text style={{ position: "absolute", top: 300, left: 80 }}>Female</Text>
                <Text style={{ position: "absolute", top: 300, left: 250 }}>Male</Text>
                <Text style={styles.text}>MOBILE (OPTIONAL)</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(newValue) => setMobile(newValue)}
                />
                <Text style={styles.text}>EMAIL ANDDRESS</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(newValue) => setEmail(newValue)}
                />
                <Text style={styles.text}>CONFIRM EMAIL ANDDRESS</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(newValue) => setConfirmemail(newValue)}
                />
                <Text style={styles.text}>PASSWORD</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(newValue) => setPassword(newValue)}
                />
                <Text style={{ position: "absolute", top: 627, right: 40, textDecorationLine: "underline" }}>Show</Text>
                <Text style={styles.text}>CONFIRM PASSWORD</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(newValue) => setConfirmpassword(newValue)}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: "#C0C0C0" }}>
                <Text style={{ textAlign: "center", fontSize: 17 }}>OPTIONAL</Text>
                <View style={{ marginLeft: 20, marginTop: 20 }}>
                    <Text>PREFERRED EMAIL LANGUAGE</Text>
                    <View style={{ flexDirection: "row", marginLeft: 20 }}>
                        <View style={{ marginRight: 130, marginLeft: 20 }}>
                            <RadioButton
                                value="first"
                                status={checkedtwo === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setCheckedtwo('first')}
                            />
                        </View>
                        <RadioButton
                            value="second"
                            status={checkedtwo === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setCheckedtwo('second')}
                        />
                        <Text style={{ top: 7, right: 165 }}>English</Text>
                        <Text style={{ top: 7, right: 45 }}>Spanish</Text>
                    </View>
                    <Text >MARKETING EMAIL PREFERENCE</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 30, marginRight: 20 }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text style={{ top: 10 }}>Please sign me up to latest fashion news & exclusive offers (we won't spam or sell your email ... and you can unsubscribe at any time!)</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, padding: 20 }}>
                <TouchableOpacity style={{ height: 60, justifyContent: "center", alignItems: "center", backgroundColor: "yellow" }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text>By clicking 'CREATE ACCOUNT',I accept the</Text>
                    <Text style={{ textDecorationLine: "underline" }}> Privacy Policy</Text>

                </View>
                <View style={{ flexDirection: "row", marginBottom:20 }}>
                    <Text> and </Text>
                    <Text style={{ textDecorationLine: "underline" }}>Terms & Conditions.</Text>
                </View>


            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        marginTop: 10
    },
    textinput: {
        borderWidth: 1,
        marginRight: 10,
        marginTop: 5
    }
});
export default Join;