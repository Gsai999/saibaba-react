import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Saii() {
  var array = [
    {
      a: 'Local News',
      s: 'https://cdn-icons-png.flaticon.com/512/3097/3097336.png',
    },
    {
      text1: 'Maimi head',
      text: 'New series documents the challenges of private startup enterprises in Cuba',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivUdNMcnUVGgh5p_OoC0k_fOWIJQRgVQmpg&usqp=CAU ',
      text2: '8h',
      url2: 'https://w7.pngwing.com/pngs/60/113/png-transparent-vertical-3-dots-dots-heroicons-solid-icon.png',
    },
    {
      text1: 'TCPalm.',
      text: 'Openinga charter scholl in Florida',
      url: 'https://image.winudf.com/v2/image/Y29tLmFwcF9kcmNndy5sYXlvdXRfc2NyZWVuc2hvdHNfMF8xZTI5OTQyZA/screen-0.webp?fakeurl=1&type=.webp',
      text2: '8h',
      url2: 'https://w7.pngwing.com/pngs/60/113/png-transparent-vertical-3-dots-dots-heroicons-solid-icon.png',
    },
    {
      text1: 'florida today',
      text: ' Atlas V rocket has narrow window for favorable launch from Cape...',
      url: 'https://media.istockphoto.com/id/1203121939/photo/rocket-starts-in-the-night-starry-sky-a-spaceship-flies-into-outer-space-concept-of-travel-to.jpg?s=612x612&w=0&k=20&c=HDbPVYfvI4wmRSgzY7CXuX5NZwt7FVKBv1JXdGbeuog= ',
      text2: '8h',
      url2: 'https://w7.pngwing.com/pngs/60/113/png-transparent-vertical-3-dots-dots-heroicons-solid-icon.png',
    },
    {
      text1: 'univisionNews',
      text: 'Life after Maria: Puerto Rico a month after the hurricane',
      url: 'https://www.dynamitenews.com/images/2023/07/10/weather-torrential-rains-wreak-havoc-in-north-india-floods-kill-over-20-schools-shut/64abe64b94197.jpg ',
      text2: '8h',
      url2: 'https://w7.pngwing.com/pngs/60/113/png-transparent-vertical-3-dots-dots-heroicons-solid-icon.png',
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fdf8e1' }}>
      <View style={{ height: '90%', width: '100%', }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#454450',
            textAlign: 'center',
            margin: 5,
          }}>
          Get local news
        </Text>
        <Text style={{ fontWeight: '', fontSize: 20, textAlign: 'center' }}>

          from your community
        </Text>

        <FlatList
          data={array}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  margin: 10,
                  borderColor: 'grey',
                  borderBottomWidth: 2,
                  boderRaidus: 10,
                  backgroundColor: 'white',
                }}>
                <View style={{ backgroundColor: 'clear', width: '70%' }}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      color: '#60a5b6',
                    }}>
                    {item.text1}
                  </Text>

                  <Text style={{ fontSize: 15 }}>{item.text}</Text>
                  <Text style={{ margin: 3 }}>{item.text2}</Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#106977',
                        fontWeight: 'bold',
                        margin: 3,
                      }}>
                      {item.a}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    width: '30%',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{ height: '80%', width: '100%' }}
                    source={{ uri: item.url }}></Image>
                  <Image
                    style={{ height: 15, width: 10, margin: 6, marginLeft: 90 }}
                    source={{ uri: item.url2 }}></Image>
                </View>
              </View>
            );
          }}></FlatList>
      </View>

    </View>
  );
}
