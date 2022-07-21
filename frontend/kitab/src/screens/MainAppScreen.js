import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    HomeScreen,
    ProfileScreen,
    BookshelfScreen,
    SearchScreen,
} from './index';

import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
  
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const BookshelfStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainAppScreen = () => (
  <Tab.Navigator
    initialRouteName='Home'
    activeColor='#fff'
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#00BFFF',
        tabBarIcon: ({color}) => (
          <Icon 
            name='ios-home'
            color={color}
            size={25}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#1F65FF',
        tabBarIcon: ({color}) => (
          <Icon 
            name='search'
            color={color}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Bookshelf"
      component={BookshelfStackScreen}
      options={{
        tabBarLabel: 'Bookshelf',
        tabBarColor: '#694FAD',
        tabBarIcon: ({color}) => (
          <Icon
            name='ios-book'
            color={color}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#00FA9A',
        tabBarIcon: ({color}) => (
          <Icon 
            name='ios-person'
            color={color}
            size={26}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainAppScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#00BFFF"
    },
    headerTintColor: "#eee",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }}>
    <HomeStack.Screen
      name ="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" 
            size={25} 
            backgroundColor="#00BFFF"
            onPress={() => {
              navigation.openDrawer()
            }}>
            </Icon.Button>
        )
      }}
    />
  </HomeStack.Navigator>
);
  
const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#00FA9A"
    },
    headerTintColor: "#eee",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }}>
    <ProfileStack.Screen
      name ="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" 
            size={25} 
            backgroundColor="#00FA9A"
            onPress={() => {
              navigation.openDrawer()
            }}>
            </Icon.Button>
        )
      }}
    />
  </ProfileStack.Navigator>
);
  
const BookshelfStackScreen = ({ navigation }) => (
  <BookshelfStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#694FAD"
    },
    headerTintColor: "#eee",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }}>
    <BookshelfStack.Screen
      name ="Bookshelf"
      component={BookshelfScreen}
      options={{
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" 
            size={25} 
            backgroundColor="#694FAD"
            onPress={() => {
              navigation.openDrawer()
            }}>
          </Icon.Button>
        )
      }}
    />
  </BookshelfStack.Navigator>
);
  
const SearchStackScreen = ({ navigation }) => (
  <SearchStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#1F65FF"
    },
    headerTintColor: "#eee",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }}>
    <SearchStack.Screen
      name ="Search"
      component={SearchScreen}
      options={{
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" 
            size={25} 
            backgroundColor="#1F65FF"
            onPress={() => {
              navigation.openDrawer()
            }}>
            </Icon.Button>
        ),
      }}
    />
  </SearchStack.Navigator>
);
