import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    TextInput, styles
} from 'react-native';

import React, { useState } from 'react';

function RegisterScreen() {

    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    return (

        <View style={{ backgroundColor: 'green', flex: 1 }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={{
                    uri: 'https://apex.oracle.com/kscope22lab-6192893d0d51a38fb527fab91e33c8f9f7c26523/6-improve-login-page/files/background.jpg',
                }}
                resizeMode="cover">
                <Text
                    style={{
                        fontSize: 30,
                        color: 'white',
                        textAlign: 'center',
                        marginBottom: 30,
                        marginTop: 20,
                    }}>

                    Welcome Back
                </Text>

                <Text style={{}}>Email_id</Text>
                <TextInput
                    style={{
                        height: 45,
                        marginLeft: 20,
                        marginRight: 20,
                        borderColor: 'black',
                        borderWidth: 2,
                        paddingLeft: 10,
                        paddingRight: 10,
                        color: 'white',
                        borderRadius: 30,
                    }}
                    placeholder={'* Email ID'}
                    placeholderTextColor={'black'}
                    value={email}
                    keyboardType={'email-address'}
                    onChangeText={(text) => {
                        setEmail(text);
                    }}></TextInput>

                <Text style={{}}>Password</Text>
                <TextInput
                    style={{
                        height: 45,
                        marginLeft: 20,
                        marginRight: 20,
                        borderColor: 'black',
                        borderWidth: 2,
                        paddingLeft: 10,
                        paddingRight: 10,
                        color: 'white',
                        borderRadius: 30,
                    }}
                    placeholder={'*  Password'}
                    keyboardType={'password'}
                    placeholderTextColor={'black'}
                    value={Password}
                    onChangeText={(text) => {
                        setPassword(text);
                    }}></TextInput>

                <TouchableOpacity
                    style={{
                        backgroundColor: 'orange',
                        height: 45,
                        margin: 30,
                        borderRadius: 40,
                    }}
                    onPress={() => {
                        if (Password.length === 0) {
                            alert('Please enter your email id &  password ')
                        } else if (Password.length <= 1) {
                            alert('  1 special character');
                        } else if (Password.length === 2) {
                            alert(' 1 Capital');
                        } else if (Password.length === 3) {
                            alert(' 1 small');
                        } else if (Password.length === 4) {
                            alert(' 1 digit');
                        } else if (Password.length === 5) {
                            alert('  Password Validation 8 Characters ');
                        }
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 10,
                            fontSize: 20,
                            color: 'white',
                        }}>
                        Log In
                    </Text>
                </TouchableOpacity>


            </ImageBackground>
        </View>
    );

}
export default RegisterScreen;