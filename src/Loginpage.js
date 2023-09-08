import { Text, SafeAreaView, StyleSheet, View, ImageBackground, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

import React, { useState } from 'react';

function Loginpage({ navigation }) {

    return (
        <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'space-evenly', margin: 10 }}>
            <ScrollView  > 

            <TouchableOpacity onPress={
                () => { navigation.navigate('RegisterScreen') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Loginpage
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('CreateAccount') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    SIGN UP
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('PAGEONE') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                Example of FlatList

                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('Saii') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    ! example of flatlist random1
                </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={
                () => { navigation.navigate('Exampleofview') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Example of  view
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('ExampleText') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Example of Text
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('Egimage') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Example of Image & ImageBackground 🖼
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={
                () => { navigation.navigate('TextinputExample') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Example of Textinput 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={
                () => { navigation.navigate('Showhide') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Example of Show & Hide   
                </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={
                () => { navigation.navigate('Galleryexample') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Example of Gallery 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('EgHorizontalscrollview') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Example of  EgHorizontalscrollview 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('EGcontactsFlatlist') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Example of flatlist and contacts
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('Iconseg') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    Example of Icons 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('Onboard') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    practice of Loginpage 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={
                () => { navigation.navigate('Screen1') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 5, backgroundColor: 'skyblue', textAlign: 'center' }}>
                    practice of  Screen1
                </Text>
            </TouchableOpacity>

            </ScrollView>
        </View>
    );
}
export default Loginpage;