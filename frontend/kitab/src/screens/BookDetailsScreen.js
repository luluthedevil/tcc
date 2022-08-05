import React from 'react';
import { View, Text } from 'react-native';

export default function BookDetailsScreen({navigation, route}) {
  return (
    <View style={{
        flex:1, alignItems:'center',
        justifyContent:'center'
    }}>
      <Text>Book Details Screen</Text>
      <Text>{route.params?.title}</Text>
    </View>
  );
}