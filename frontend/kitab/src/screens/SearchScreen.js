import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Search screen</Text>
      <Button 
        title="Go to home screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });