import { Text, SafeAreaView, StyleSheet,View,ImageBackground,TouchableOpacity,Image ,TextInput,Scrollview} from 'react-native';

import React, { useState } from 'react';

function SignUp({ navigation }) {
  return (
      <View>
          
          <TouchableOpacity onPress={
              () => { navigation.navigate('CreateAccount') }
          }>
              <Text style = {{ fontSize:20,fontWeight:'bold',borderRadius:5,backgroundColor:'skyblue',textAlign:'center'}}>
                  SIGN UP
              </Text>
          </TouchableOpacity>

      </View>
  );
}
export default SignUp;