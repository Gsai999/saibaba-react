import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image,
    TouchableOpacity,ImageBackground
  } from 'react-native';


function Screen1 () {
    return ( 

    <View style={{ backgroundColor: 'white', flex: 1 }}>
    <ImageBackground
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
      }}
      source={{uri:'https://img.freepik.com/free-photo/vivid-colored-transparent-autumn-leaf_23-2148239739.jpg'}}
      resizeMode="cover">
      <View
        style={{
          backgroundColor: 'blue',
          height: '10%',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            margin: 25,
            backgroundColor: 'orange',
            height: 35,
            borderRadius: 20,
            borderWidth: 5,
          }}
          onPress={() => {
            alert('Clicked on JIOTV+');
          }}>
          <Text
            style={{
              fontsize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 6,
            }}>
            WELCOME TO JIOTV+
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: '30%',
          flexDirection: 'column',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            alert('Clicked on music  and mobile');
          }}>
          <View
            style={{
              height: '30%',
              flexDirection: 'row',
              borderRadius: 10,
            }}>
            <Image
              style={{ height: 100, width: '50%' }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEMHFUNX-RhdshznO9bT2rvxh6rC5SQ105A&usqp=CAU',
              }}
              resizeMode="cover"></Image>
            <Image
              style={{ height: 100, width: '50%' }}
              source={{
                uri: 'https://i.pinimg.com/originals/0f/d8/57/0fd8577fe8c1c38f28280f9cc3e8d237.jpg',
              }}
              resizeMode="cover"></Image>
          </View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: 'orange',
            flexDirection: 'row',
            borderRadius: 20,
            justifyContent: 'space-evenly',
            margin: 2,
            borderWidth: 6,
          }}>
          <TouchableOpacity
            onPress={() => {
              alert('Clicked on mobile');
            }}>
            <Text
              style={{
                height: 30,
                fontsize: 20,
                color: 'white',
                fontWeight: 'bold',
              }}>
            
              Mobile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('Clicked on music');
            }}>
            <Text
              style={{
                height: 30,
                fontsize: 20,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Music
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: '40%',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 15,
            backgroundColor: '#adf0be',
            borderWidth: 5,padding:10,justifyContent:'space-evenly'
          }}>
          <TouchableOpacity
            onPress={() => {
              alert('Clicked on watch now');
            }}>
            <Text> watch now </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Clicked on movies ');
            }}>
            <Text> movies </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('Clicked on shows ');
            }}>
            <Text> shows </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('Clicked on live tv  ');
            }}>
            <Text> live tv </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('Clicked on  kids');
            }}>
            <Text> kids </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert('Clicked on   music');
            }}>
            <Text> music </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            alert('Clicked on tv shows');
          }}>
          <Image
            style={{ height: 300, borderRadius: 20 }}
            source={{
              uri: 'https://images.livemint.com/img/2020/07/15/1600x900/Screenshot_(113)_1594818060269_1594818072320.png',
            }}
            resizeMode="cover"></Image>
      
        </TouchableOpacity>
      </View>
      
    </ImageBackground>
  </View>
);
        }
        export default Screen1;