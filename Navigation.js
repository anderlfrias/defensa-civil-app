import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, Text } from 'react-native'
import React from 'react';
import { getValueFor, deleteValueFor } from './utils/secureStore'

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
                options={{
                    title: 'Inicio',
                }}
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

        </Drawer.Navigator>
    )
}

const LoginDrawer = ({ navigation }) => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                console.log('Cerrar Sesión');
                                deleteValueFor('auth');

                                // navigation.navigate('Login');
                                navigation?.reset({
                                    index: 0,
                                    routes: [{ name: 'Home' }],
                                });
                            }}
                            style={{
                                marginRight: 10,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                backgroundColor: 'white',
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ color: "#4D4B55"}}>Cerrar Sesión</Text>
                        </TouchableOpacity>
                    ),
                }}

            />

            <Drawer.Screen
                name="Noticias"
                component={Noticias}
            />

            <Drawer.Screen
                name="NuevoReporte"
                component={ReportarSituacion}
                options={{ title: 'Reportar una situacion' }}
            />

            {/* // Mis situaciones */}

            {/* // Mis reportes */}

            {/* // Cambiar contraseña */}
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
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        getValueFor('auth').then((data) => {
            console.log("data", JSON.parse(data)?.isLoggedIn);
            if (data) {
                console.log("logueado");
                setIsLoggedIn(true);
            }
        });
    }, []);

    if (isLoggedIn) {
        return (
            <NavigationContainer>
                <LoginDrawer />
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}