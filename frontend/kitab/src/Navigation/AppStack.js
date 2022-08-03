import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

const Drawer = createDrawerNavigator();

const AppStack = () => {

  const [loaded] = useFonts ({
    RobotoMedium: require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
  });

  if(!loaded) {
      return null;
  }

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerShown: false, 
      drawerActiveBackgroundColor: '#00B2EE',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#666',
      drawerLabelStyle: {
      marginLeft: -20, fontFamily: 'RobotoMedium', fontSize: 16
    }}}>
        <Drawer.Screen component={HomeScreen} name="Home" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='home-outline' size={25} color={color} />
          )
        }} />
        <Drawer.Screen component={ProfileScreen} name="Profile" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='person-outline' size={25} color={color} />
          )
        }} />
        <Drawer.Screen component={LibraryScreen} name="Library" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='book-outline' size={25} color={color} />
          )
        }} />
        <Drawer.Screen component={ChallengesScreen} name="Challenges" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='checkmark-circle-outline' size={25} color={color} />
          )
        }} />
        <Drawer.Screen component={SettingsScreen} name="Settings" options={{
          drawerIcon: ({color}) => (
            <Ionicons name='settings-outline' size={25} color={color} />
          )
        }} />
    </Drawer.Navigator>
  );
}

export default AppStack;