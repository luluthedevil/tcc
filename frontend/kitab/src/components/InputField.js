import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function InputField({
    label, //placeholder
    icon, //icon of placeholder
    inputType, // type of input, password, email, etc...
    keyboardType, // the email and onlynumbers are kinds of keyboards
    fieldButtonLabel, //placeholder ofbutton in the right side
    fieldButtonFunction //function of right side button
}) {
  return (
    <View style={{
        flexDirection: 'row', borderBottomColor: '#ccc',
        borderBottomWidth: 1, paddingBottom: 8, marginBottom:20
      }}>
        {icon}
        {inputType == 'password' ? 
            (<TextInput placeholder={label} style={{
            flex:1, paddingVertical:0
            }} secureTextEntry={true} 
            keyboardType={keyboardType}
          />)
        : 
            (<TextInput placeholder={label} style={{
            flex:1, paddingVertical:0
            }} keyboardType={keyboardType}/>)
        }
       
        <TouchableOpacity onPress={() => fieldButtonFunction}>
          <Text style={{
            color:'#0aada8', fontWeight:'700'
          }}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
      </View>
  );
}