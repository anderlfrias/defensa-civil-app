import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
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
import Miembros from './screens/Miembros';
import Voluntario from './screens/Voluntario';
import About from './screens/About';
import Login from './screens/Login';
import RecoverPassword from './screens/RecoverPassword';
import ReportarSituacion from './screens/RepostarSituacion';

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
                options={{ title: 'Medidas Preventivas' }}
            />

            <Drawer.Screen
                name="Miembros"
                component={Miembros}
            />

            <Drawer.Screen
                name="Voluntario"
                component={Voluntario}
                options={{ title: 'Quiero ser voluntario' }}
            />

            <Drawer.Screen
                name="NuevoReporte"
                component={ReportarSituacion}
                options={{ title: 'Reportar una situacion' }}
            />

            <Drawer.Screen
                name="About"
                component={About}
                options={{ title: 'Acerca de' }}
            />

            <Drawer.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Iniciar Sesión',
                    headerShown: false,
                }}
            />

            <Drawer.Screen
                name="RecoverPassword"
                component={RecoverPassword}
                options={{
                    title: 'Recuperar Contraseña',
                    headerShown: false,
                }}
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