import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  
  const { colors } = useTheme();
  const theme = useTheme();

  return(
    <View 
      style={[styles.container, {backgroundColor: colors.background}]}
    >
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Text style={{color: colors.text}}>Home screen</Text>
      <Button 
        title="Go to Search screen"
        onPress={() => navigation.navigate("Search")}
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