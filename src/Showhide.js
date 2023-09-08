
import {
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Button,
    TouchableWithoutFeedback,
    View,
    ImageBackground,Image
  } from 'react-native';
  import React, { useState } from 'react';
  
  export default function Showhide() {
    const [totalValue, updateTotal] = useState(0);
    const [subtractValue, updateSub] = useState(0);
    const [strName, updateName] = useState('');
    const [isShow, updateShowHide] = useState(false);
  
    var a = 10;
    var b = 30;
    var c = 0;
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableOpacity
          onPress={() => {
            updateShowHide(!isShow);
  
            if (isShow === true) {
              updateShowHide(false);
            } else {
              updateShowHide(true);
            }
          }}>
          <Text>Show / Hide</Text>
        </TouchableOpacity>
  
        <Text style={{ color: 'red' }}>{strName}</Text>
  
        {isShow && (
          <>
            <TouchableOpacity
              onPress={() => {
                c = a + b;
                updateTotal(c);
                updateName('Addition');
              }}>
              <Text>Addition</Text>
            </TouchableOpacity>
            <Text>Total Value is {totalValue}</Text>
  
            <TouchableOpacity
              onPress={() => {
                c = a - b;
                updateSub(c);
                updateName('Subtraction');
              }}>
              <Text>Subtract</Text>
            </TouchableOpacity>
            <Text>Total Value is {subtractValue}</Text>
          </>
        )}
      </SafeAreaView>
    );
  }
  