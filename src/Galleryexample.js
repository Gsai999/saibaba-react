import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,TouchableOpacity,
  Image,
  Dimensions,ImageBackground,ScrollView
} from 'react-native';
export const { width, height } = Dimensions.get('window');
export default function Galleryexample () {
   var array = ['https://img.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg?w=1380&t=st=1693891641~exp=1693892241~hmac=8766e8c8437c2bb8dc88996367f4f2821c99768f2640a789fb29b930b759c4e0','https://img.freepik.com/free-photo/pier-lake-hallstatt-austria_181624-44201.jpg?w=1060&t=st=1693891418~exp=1693892018~hmac=f4b5069b73b75a914c088d17f516f797b4af8d0d9d7e41d245ca917f4d16da9','https://img.freepik.com/free-photo/hikers-top_181624-555.jpg?w=1060&t=st=1693891454~exp=1693892054~hmac=a9f47fe15f3265c40aeb191d8b74f0f8e30fefcc2aac56b71eeb8ab841de98c5','https://img.freepik.com/free-photo/city-with-forest-front_1203-681.jpg?w=1060&t=st=1693893098~exp=1693893698~hmac=4564e13ba8a9edd5dbb1aed187aabebee7bd96c1015fcbeb5912f36d18540f03','https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?w=1060&t=st=1693896733~exp=1693897333~hmac=edc74d7d84e747842fc8a89c85ed9bee267226a2114758474e1302362c9b8e62'
   
   , 'https://img.freepik.com/free-vector/modern-city-buildings_1441-3042.jpg?w=1380&t=st=1693896851~exp=1693897451~hmac=6f8f82a88772a49e0ead368d284ee808753a0b11a8f80b7aa5242b5e63bc4db0' ];
 

  
  return (     
 <View>
 <ScrollView>
 <ImageBackground style = {{ flex:1}} source = {{ uri :'https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-05.jpg'}} resizeMethod= 'cover'>
 
    <View style = {{ height:40, backgroundColor:'white', borderRadius:20}}>
    <TouchableOpacity style = {{ }} onPress={() => {
        alert('photos ');
      }}>
    <Text style = {{ fontSize: 20, padding:4,alignItems:'center', marginTop:0,marginLeft:50,borderStyle:'dashed'}}> 🔍  Photos   Albums </Text>
    </TouchableOpacity></View>
<View>
 <FlatList
        data={array}
        numColumns={4}

        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: 'center',
                width: width / 6 - 2,
                margin: 2,marginBottom:10
              }}>
              <Image
                style={{
                  height: 150,
                  width: '100%',
                  resizeMode: 'cover',
                  backgroundColor: 'white', borderRadius:10, borderWidth:1
                }}
                source={{ uri: item }}></Image>
                
              <Text
                style={{ margin:4,backgroundColor: 'white', width: 100, height: 20 ,borderRadius:10, borderWidth:1,paddingStart:10}}>
                SAI
              </Text>
              <Image
                style={{
                  height: 150,
                  width: '100%',
                  resizeMode: 'cover',
                  backgroundColor: 'white', borderRadius:10, borderWidth:1
                }}
                source={{ uri: item }} resizeMode="repeat"></Image>
                
              <Text
                style={{ margin:4,backgroundColor: 'white', width: 100, height: 20 ,borderRadius:10, borderWidth:1,paddingStart:10}}>
                Albums
              </Text>
            </View>
          );
        }} />
    </View>
 </ImageBackground>
</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
