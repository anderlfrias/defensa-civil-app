import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
//screens
import HomeScreen from './screens/HomeScreen';
import Historia from './screens/Historia';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
            />

            <Drawer.Screen
                name="Historia"
                component={Historia}
            />
        </Drawer.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}