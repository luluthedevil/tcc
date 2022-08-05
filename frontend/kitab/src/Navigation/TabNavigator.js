import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import BookDetailsScreen from '../screens/BookDetailsScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen component={HomeScreen} name="Home"
            options={{
                headerShown: false
            }}
          />
          <Stack.Screen component={BookDetailsScreen} name="BookDetails" 
            options={({route}) => ({
                title: route.params?.title,
            })}
          />
      </Stack.Navigator>
    );
  }

const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#00B2EE'
            },
            tabBarInactiveTintColor:'#fff',
            tabBarActiveTintColor: '#A020F0'
        }}>
            <Tab.Screen name="Home " component={HomeStack} 
                options={({route}) => ({
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                        backgroundColor: '#00B2EE'
                    },
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='home-outline' color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen name="Challenge" component={ChallengesScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather name='award' color={color}
                            size={size}
                        />
                    ),
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {
                        backgroundColor: '#A020F0'
                    }
                }}
            />
            <Tab.Screen name="Favorites" component={FavoriteScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='heart-outline' color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    if( routeName == 'BookDetails' ) {
        return 'none';
    }
    return 'flex';
};

export default TabNavigator;