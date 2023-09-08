import React from 'react';
import { View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';



export default function Iconseg () {
  

  return (
    <View >
  
     <View style={{ flexDirection:'row', margin:30,justifyContent:'space-between'}}>
      <TouchableOpacity  onPress={() => {
        alert('click on share');
      }}>
      <Image style = {{height:20,width:20 }} source={{uri:'https://cdn-icons-png.flaticon.com/128/1358/1358023.png'}}>
      </Image>
</TouchableOpacity>
<TouchableOpacity  onPress={() => {
        alert('click on google ');
      }}>
      <Image style = {{height:20,width:20 }} source={{uri:'https://cdn-icons-png.flaticon.com/128/300/300221.png'}}>
      </Image>
</TouchableOpacity>

<TouchableOpacity  onPress={() => {
        alert('click on dots ');
      }}>
      <Image style = {{height:20,width:20 }} source={{uri:'https://cdn-icons-png.flaticon.com/128/2311/2311524.png'}}>
      </Image> 
</TouchableOpacity>
     
                </View>

<TouchableOpacity  onPress={() => {
        alert('click on search ');
      }}>
      <Image style = {{marginLeft:100,height:30,width:30}} source={{uri:'https://cdn-icons-png.flaticon.com/128/482/482631.png'}}>
      </Image> 
</TouchableOpacity>


                  </View>


  );
}


