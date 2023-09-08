import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity, ImageBackground
} from 'react-native';
function PAGEONE() {
  var array = {
    json_data: [{
      id: 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      id: 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      id: 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      id: 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
      id: 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      id: 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg",
      "sai": 'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000'

    }
      ,
    {
      id: 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg",
      "sai": 'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000'

    }
    ]

  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'clear' }}>
      <View>
        <FlatList
          data={array.json_data}
          renderItem={({ item }) => {
            return (
              <ImageBackground style={{flex:1}} source={{ uri: 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true' }}>
                <View style={{}}>

                  <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 20, backgroundColor: 'grey', borderWidth: 2, borderRadius: 10, paddingStart: 5, width: 40 }}>{item.id} </Text>

                  <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 20 }}>{item.email} </Text>

                  <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 20 }}>{item.first_name} </Text>

                  <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 20 }}>{item.last_name} </Text>

                  <Image style={{ height: 50, width: 50, margin: 10 }} source={{ uri: item.avatar }}></Image>

                  <Image style={{ height: 50, width: 50, margin: 10 }} source={{ uri: item.sai }}></Image>


                </View>
              </ImageBackground>

            );
          }}></FlatList>
      </View>
    </SafeAreaView>
  );
}
export default PAGEONE;