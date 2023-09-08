import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList, TouchableOpacity,
  Image,
  Dimensions, ImageBackground, ScrollView
} from 'react-native';
import { Navigation} from '@react-navigation/native';
export default function Onboard ({ navigation }) {


  return (
    <View style={{ flex: 1, paddingTop: 55 }}>
      <Image
        style={{
          flex: 2,
          marginHorizontal: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,resizeMode: 'contain'
        }}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jSjhBIpd2OHovir4fpr732FGqvpRHZSjuw&usqp=CAU' }}  
      />

      <View style={{ flex: 1, margin: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", width: 300, alignSelf: "center", textAlign: "center" }}>
          Travle Anywhere in the World without any Hassle
        </Text>

        <Text style={{ marginVertical: 20, textAlign: 'center', color: 'gray' }}>
          If you like to travel a lot, this is your place! Here you can travel with your favorite tour and enjoy
          </Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop:20 }}>
        <TouchableOpacity style={{ padding: 15, backgroundColor: '#e3e3e3', justifyContent: 'center', borderRadius: 30, alignItems: 'center', marginRight: 5, flex: 1 }}>

          <Text>
            Skip
            </Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('Loginpage') }
            }
        style={{ padding: 15, backgroundColor: '#e3e3e3', justifyContent: 'center', borderRadius: 30, alignItems: 'center', marginLeft: 5, flex: 1 }}>

          <Text>
            Next
            </Text>
            <Image style = {{height:10,width:10,marginLeft:50}} source = {{uri:'https://cdn-icons-png.flaticon.com/128/545/545682.png'}}></Image>

            </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
