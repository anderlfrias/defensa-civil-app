import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
//screens
import HomeScreen from './screens/HomeScreen';
import Historia from './screens/Historia';
import Servicios from './screens/Servicios';
import Noticias from './screens/Noticias';

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

            <Drawer.Screen
                name="Servicios"
                component={Servicios}
            />

            <Drawer.Screen
                name="Noticias"
                component={Noticias}
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