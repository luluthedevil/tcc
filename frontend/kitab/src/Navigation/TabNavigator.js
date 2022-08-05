import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

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
            <Tab.Screen name="Home " component={HomeScreen} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='home-outline' color={color}
                            size={size}
                        />
                    )
                }}
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
}

export default TabNavigator;