import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import { globalStyles } from '../utils/globalStyles'
import { url } from '../utils/config'

const Login = () => {
    const [credentials, setCredentials] = useState({});
    const [isLoggIn, setIsLoggIn] = useState(false);

    const loginUser = async(data) => {
        if (!validateFields()) {
            alert("Debe completar todos los campos");
            return;
        }

        setIsLoggIn(true);

        const formData = new FormData();
        formData.append('cedula', data.cedula);
        formData.append('clave', data.clave);

        console.log(formData);

        await fetch(`${url}def/iniciar_sesion.php`, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                alert(responseJson.mensaje);
                if (responseJson.exito) {
                    setCredentials({});
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            })
            .finally(() => {
                setIsLoggIn(false)
            });
    }

    const validateFields = () => {
        if (credentials.cedula && credentials.clave) {
            return true;
        }
        return false;
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require('../assets/images/login-image.webp')}
                    style={styles.Image}
                />

                <Text style={styles.title}>
                    Iniciar Sesión
                </Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Cedula</Text>
                    <TextInput
                        placeholder="Ingrese su cedula"
                        onChangeText={(text) => setCredentials({...credentials, cedula: text})}
                        value={credentials.cedula}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        placeholder="Ingrese su contraseña/clave"
                        onChangeText={(text) => setCredentials({...credentials, clave: text})}
                        value={credentials.clave}
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        onPress={async() => await loginUser(credentials)}
                        style={styles.button}
                        disabled={isLoggIn}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            {isLoggIn ? 'Iniciando...' : 'Continuar'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    card: {
        ...globalStyles.card,
        width: '100%',
        // alignItems: 'center',
    },
    Image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 5,
    },
    title: {
        ...globalStyles.title,
        fontSize: 30,
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        ...globalStyles.text,
        fontSize: 16,
    },
    input: {
        ...globalStyles.text,
        fontSize: 16,
        // borderWidth: 1,
        // borderColor: '#A1A0A5',
        backgroundColor: '#F6F7F9',
        borderRadius: 16,
        padding: 10,
    },
    button: {
        backgroundColor: '#00B0FF',
        padding: 10,
        borderRadius: 16,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});