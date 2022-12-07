import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
//screens
import HomeScreen from './screens/HomeScreen';
import Historia from './screens/Historia';
import Servicios from './screens/Servicios';
import Noticias from './screens/Noticias';
import Videos from './screens/Videos';
import Albergues from './screens/Albergues';
import Mapa from './screens/Mapa';
import MedidasPreventivas from './screens/MedidasPreventivas';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Inicio' }}
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

            <Drawer.Screen
                name="Videos"
                component={Videos}
            />

            <Drawer.Screen
                name="Albergues"
                component={Albergues}
            />

            <Drawer.Screen
                name="Mapa"
                component={Mapa}
            />

            <Drawer.Screen
                name="MedidasPreventivas"
                component={MedidasPreventivas}
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