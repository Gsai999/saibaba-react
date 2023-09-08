import { View, TextInput, Text } from 'react-native';
import { useState } from 'react';

function TextinputExample() {
    const [FullName, setFullName] = useState('');

    return (
        <View style={{flex:1, backgroundColor: 'skyblue', borderWidth: 10, borderRadius: 10 }}>


            <Text style={{ marginLeft: 25, marginBottom: 2, marginTop: 15, color: '#fa7d1e', textShadow: '1px 1px 6px white, 0 0 50px green, 0 0 10px #999999' }}>
                FullName</Text>


            <TextInput style={{ height: 40, marginLeft: 20, marginRight: 20, borderColor: 'grey', borderWidth: 1, paddingLeft: 10, paddingRight: 10, color: 'white', borderRadius: 30 }}
                placeholder={'*Please Enter FullName'}
                placeholderTextColor={'grey'}
                value={FullName}
                maxlength={20}
                editable={true}
                spellcheck={true}
                onChangeText={(text) => {
                    setFullName(text);
                }}></TextInput>




        </View>
    );
}

export default TextinputExample;