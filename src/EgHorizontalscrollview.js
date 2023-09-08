import { Text, SafeAreaView, StyleSheet, View, ImageBackground, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

import React, { useState } from 'react';

export default function EgHorizontalscrollview() {
    const [address, setAddress] = useState('');
    const [dob, setdob] = useState('');
    const [error, seterror] = useState('');

    const validationform = () => {
        const Addresspattern = /^[a-zA-Z0-9._-]+[a-zA-Z0-9.-]/;

        const dobpattern = /^\d{4}-\d{2}-\d{2}$/;


        if (!Addresspattern.test(address)) {
            seterror('please enter correct address');
        }
        else if (!dobpattern.test(dob)) {
            seterror('dob do not match');
        } else {
            seterror('Form submitted successfully');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal style={{ marginTop: 100 }}  >
                <Text style={styles.textContainer}>address</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* address'}
                    placeholderTextColor={'gray'}
                    value={address}
                    maxLength={40}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setAddress(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>dob</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* dob'}
                    placeholderTextColor={'gray'}
                    value={dob}
                    maxLength={10}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setdob(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>address</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* address'}
                    placeholderTextColor={'gray'}
                    value={address}
                    maxLength={40}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setAddress(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>dob</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* dob'}
                    placeholderTextColor={'gray'}
                    value={dob}
                    maxLength={10}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setdob(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>address</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* address'}
                    placeholderTextColor={'gray'}
                    value={address}
                    maxLength={40}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setAddress(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>dob</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* dob'}
                    placeholderTextColor={'gray'}
                    value={dob}
                    maxLength={10}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setdob(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>address</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* address'}
                    placeholderTextColor={'gray'}
                    value={address}
                    maxLength={40}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setAddress(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>dob</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* dob'}
                    placeholderTextColor={'gray'}
                    value={dob}
                    maxLength={10}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setdob(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>address</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* address'}
                    placeholderTextColor={'gray'}
                    value={address}
                    maxLength={40}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setAddress(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>dob</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* dob'}
                    placeholderTextColor={'gray'}
                    value={dob}
                    maxLength={10}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setdob(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>address</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* address'}
                    placeholderTextColor={'gray'}
                    value={address}
                    maxLength={40}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setAddress(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>dob</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* dob'}
                    placeholderTextColor={'gray'}
                    value={dob}
                    maxLength={10}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setdob(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>address</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* address'}
                    placeholderTextColor={'gray'}
                    value={address}
                    maxLength={40}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setAddress(text);
                    }}></TextInput>
                <Text style={styles.textContainer}>dob</Text>
                <TextInput
                    style={styles.textInputContainer}
                    placeholder={'* dob'}
                    placeholderTextColor={'gray'}
                    value={dob}
                    maxLength={10}
                    editable={true}
                    spellCheck={true}
                    onChangeText={(text) => {
                        setdob(text);
                    }}></TextInput>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#cccc00',
                        height: 45,
                        margin: 50,
                        borderRadius: 100,
                        borderStyle: 'solid',
                    }}
                    onPress={validationform}>
                    <Text style={{ color: 'black', textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>SUBMIT</Text>


                </TouchableOpacity>
                {error !== '' && <Text style={{ color: 'green', marginLeft: 10, marginBottom: 50, fontSize: 15 }}>{error}</Text>}

            </ScrollView>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 8,
    },
    textInputContainer: {
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'black',
        borderWidth: 2,
        paddingLeft: 10,
        paddingRight: 10,
        color: 'green',
        borderRadius: 30,
    },
    textContainer: { marginLeft: 20, marginBottom: 2, marginTop: 15 },
});