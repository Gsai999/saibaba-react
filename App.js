import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Loginpage from './src/Loginpage';
import RegisterScreen from './src/RegisterScreen';
import SignUp from './src/SignUp';
import CreateAccount from './src/CreateAccount';
import PAGEONE from './src/PAGEONE';
import Saii from './src/Saii';
import Exampleofview from './src/Exampleofview';
import ExampleText from './src/ExampleText';
import Egimage from './src/Egimage';
import TextinputExample from './src/TextinputExample';
import Showhide from './src/Showhide';
import Galleryexample from './src/Galleryexample';
import EgHorizontalscrollview from './src/EgHorizontalscrollview';
import EGcontactsFlatlist from './src/EGcontactsFlatlist';
import Iconseg from './src/Iconseg';
import Onboard from './src/Onboard';
import Screen1 from './src/Screen1'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View  style = {{ flex:1,backgroundColor:'grey'}}> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loginpage'>
  <Stack.Screen name="Loginpage" component={Loginpage} />
  <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  <Stack.Screen name="SignUp" component={SignUp} />
  <Stack.Screen name="CreateAccount" component={CreateAccount} />
  <Stack.Screen name="PAGEONE" component={PAGEONE} />
  <Stack.Screen name="Saii" component={Saii} />
  <Stack.Screen name="Exampleofview" component={Exampleofview} />
  <Stack.Screen name="ExampleText" component={ExampleText} />
  <Stack.Screen name="Egimage" component={Egimage} />
  <Stack.Screen name="TextinputExample" component={TextinputExample} />
  <Stack.Screen name="Showhide" component={Showhide}  />
  <Stack.Screen name="Galleryexample" component={Galleryexample}  />
  <Stack.Screen name="EgHorizontalscrollview" component={EgHorizontalscrollview}  />
  <Stack.Screen name="EGcontactsFlatlist" component={EGcontactsFlatlist}  />
  <Stack.Screen name="Iconseg" component={Iconseg}  />
  <Stack.Screen name="Onboard" component={Onboard}  />
  <Stack.Screen name="Next" component={Loginpage}  />
  <Stack.Screen name="Screen1" component={Screen1}  />



  </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
