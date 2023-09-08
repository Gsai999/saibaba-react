import { View ,Text} from 'react-native';


function ExampleText () {
    return (
        <View style={{ flex: 1, }}>

            <View style={{ height: 100, width: 100, backgroundColor: 'orange' }}> 
            <Text style = {{fontSize:10,fontWeight:'bold'}}>  SAI 
            </Text>
            </View>
            <View style={{ height: 100, width: 100, backgroundColor: 'green' }}> 
            <Text style = {{fontSize:10,fontWeight:'bold'}}>  RUSMITHA 
            </Text>

            </View>
            <View style={{ height: 100, width: 100, backgroundColor: 'red' }}> 
            <Text style = {{fontSize:10,fontWeight:'bold'}}>  PRAKASH GURU JI  
            </Text>
            </View>
            <View style={{ height: 100, width: 100, backgroundColor: 'blue' }}> 
            <Text style = {{fontSize:10,fontWeight:'bold'}}> Manikant
            </Text>
            </View>
            <View style={{ height: 100, width: 100, backgroundColor: 'pink' }}> 
            <Text style = {{fontSize:10,fontWeight:'bold'}}>   Biswa 
            </Text>
            </View>
        </View>
    );
}
export default ExampleText;