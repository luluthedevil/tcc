import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function BookshelfScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Book Shelf screen</Text>
      <Button 
        title="Go to Home screen"
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