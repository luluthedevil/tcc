import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home " component={HomeScreen} />
            <Tab.Screen name="Challenge" component={ChallengesScreen} />
            <Tab.Screen name="Favorites" component={FavoriteScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;