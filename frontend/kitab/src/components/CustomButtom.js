import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function CustomButtom({label, onPres}) {
  return (
    <TouchableOpacity onPress={() => onPres} style={{
        backgroundColor:'#0aada8', padding:15, borderRadius:10,
        marginBottom:20
      }}>
        <Text style={{
          textAlign:'center', fontWeight:'700', fontSize: 25,
          color:'#fff'
        }}>{label}</Text>
      </TouchableOpacity>
  );
}