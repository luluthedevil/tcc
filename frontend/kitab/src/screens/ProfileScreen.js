import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
      <Button 
        title="Go to Profile screen...again"
        onPress={() => navigation.push("Profile")}
      />
      <Button 
        title="Go to home screen"
        onPress={() => navigation.navigate("Home")}
      />
      <Button 
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button 
        title="Go to the first screen"
        onPress={() => navigation.popToTop()}
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