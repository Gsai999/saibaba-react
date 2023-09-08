import { Text, SafeAreaView, StyleSheet,View,ImageBackground,TouchableOpacity,Image ,TextInput,Scrollview} from 'react-native';

import React, { useState } from 'react';

function CreateAccount() {
    const [FullName, setFullName] = useState('');
  const [E_mail, setE_mail] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
 const [dob, setdob] = useState('');
const [createpassword, setcreatepassword] = useState('');
const [ error, seterror] = useState('');

const validationform = () => {
    const E_mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const FullNamePattern = /^[a-zA-Z]{3,26}$/;
  const creatpasswordPattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const phonePattern = /^[0-9]{10}$/;
    const dobpattern = /^\d{4}-\d{2}-\d{2}$/;

if (!FullNamePattern.test(FullName))  {   
    seterror('please enter a valid full name atleat 3 letter');
}
else if(!E_mailPattern.test(E_mail)){
  seterror('please enter valid email with special character');
}
else if (!phonePattern.test(PhoneNo)){
seterror(' please enter correct phone number with 10 digits');
}
else if (!dobpattern.test(dob) ){
  seterror('please enter correct format dob');
}
else if(!creatpasswordPattern.test(createpassword)){
  seterror('please make sure create correct password with  @#$%& ' );
}else {
      seterror('Form submitted successfully 😃 ');
    }
};

  return (


    <View  style = {{ backgroundColor:'red',flex:1}}>


         

<Text style = {{fontSize:30, color :'#064bd4', textAlign:'center', marginBottom:40,marginTop:40,textShadowColor:'#06d474'}}>  CREATE ACCOUNT 😃 </Text>

<Text style={styles.textContainer}>FullName</Text>
      <TextInput
        style={styles.textInputContainer}
        placeholder={'* FullName'}
        placeholderTextColor={'gray'}
        value={FullName}
        maxLength={50}
        editable={true}
        spellCheck={true}
        onChangeText={(text) => {
          setFullName(text);
        }}></TextInput>

  

<Text style={styles.textContainer}>E_mail</Text>
      <TextInput
        style={styles.textInputContainer}
        placeholder={'* E_mail'}
        placeholderTextColor={'gray'}
        value={E_mail}
        maxLength={20}
        editable={true}
        spellCheck={true}
        onChangeText={(text) => {
          setE_mail(text);
        }}></TextInput>

<Text style={styles.textContainer}>PhoneNo</Text>
      <TextInput
        style={styles.textInputContainer}
        placeholder={'* PhoneNo'}
        placeholderTextColor={'gray'}
        value={PhoneNo}
        maxLength={10}
        editable={true}
        spellCheck={true}
        onChangeText={(text) => {
          setPhoneNo(text);
        }}></TextInput>

<Text style={styles.textContainer}>dob</Text>
      <TextInput
        style={styles.textInputContainer}
        placeholder={'* year-month-date'}
        placeholderTextColor={'gray'}
        value={dob}
        maxLength={10}
        editable={true}
        spellCheck={true}
        onChangeText={(text) => {
          setdob(text);
        }}></TextInput>

<Text style={styles.textContainer}>createpassword</Text>
      <TextInput
        style={styles.textInputContainer}
        placeholder={'* createpassword'}
        placeholderTextColor={'gray'}
        value={createpassword}
        maxLength={10}
        editable={true}
        spellCheck={true}
        onChangeText={(text) => {
          setcreatepassword(text);
    }}>
    
    </TextInput>

 <TouchableOpacity
        style={{
          backgroundColor: '#FFC100',
          height:45,
          margin:50,
          borderRadius:100,
          borderStyle:'solid', 
        }}
        onPress={validationform}>
        <Text style={{color:'black',textAlign:'center',marginTop:10,fontWeight:'bold'}}>SIGNUP</Text>
  
        
        </TouchableOpacity>
        {error!==''&& <Text style={{color:'white',marginLeft:10,marginBottom:10,fontSize:15, backgroundColor:'black', borderRadius:4,textAlign:'center'}}>{error}</Text>}

 </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey ',
    padding: 8,
  },
  textInputContainer: {
    height: 45,
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'green',
    borderWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'blue',
    borderRadius: 30,
  },
  textContainer: { marginLeft: 20, marginBottom: 10, },
});
export default CreateAccount;