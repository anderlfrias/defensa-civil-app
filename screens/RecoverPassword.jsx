import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import { globalStyles } from '../utils/globalStyles'
import { url } from '../utils/config'
import { save, getValueFor } from '../utils/secureStore';
import { storeData } from '../utils/AsyncStorage';

const RecoverPassword = ({ navigation }) => {
    const [credentials, setCredentials] = useState({});
    const [isLoggIn, setIsLoggIn] = useState(false);

    const recoverPassword = async(data) => {
        if (!validateFields()) {
            alert("Debe completar todos los campos");
            return;
        }

        setIsLoggIn(true);

        const formData = new FormData();
        formData.append('cedula', data.cedula);
        formData.append('correo', data.correo);

        console.log(formData);

        await fetch(`${url}/def/recuperar_clave.php`, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then(async(responseJson) => {
                console.log(responseJson);
                alert(responseJson.mensaje);
                if (responseJson.exito) {
                    setCredentials({});
                    navigation.jumpTo('Login');
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
        if (credentials.cedula && credentials.correo) {
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
                    Recuperar contraseña
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
                    <Text style={styles.label}>Correo electronico</Text>
                    <TextInput
                        placeholder="Ingrese su correo electronico"
                        onChangeText={(text) => setCredentials({...credentials, correo: text})}
                        value={credentials.correo}
                        style={styles.input}
                    />
                </View>
{/* 
                <TouchableOpacity
                    onPress={() => console.log('Olvidaste tu contraseña')}
                    style={{ marginBottom: 20 }}
                >
                    <Text style={{...styles.label, color: "#00B0FF", fontWeight: "bold"}}>
                        ¿Olvidaste tu contraseña?
                    </Text>
                </TouchableOpacity> */}

                <View>
                    <TouchableOpacity
                        onPress={async() => await recoverPassword(credentials)}
                        style={{
                            ...styles.button,
                            backgroundColor: isLoggIn ? '#D9E3F6' : '#00B0FF',
                        }}
                        disabled={isLoggIn}
                    >
                        <Text
                            style={styles.buttonText}
                        >
                            {isLoggIn ? 'Iniciando...' : 'Continuar'}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={styles.label}>
                        ¿No tienes una cuenta?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.jumpTo('Voluntario')}
                    >
                        <Text style={{...styles.label, color: "#00B0FF", fontWeight: "bold", marginLeft: 7}}>
                            Registrate
                        </Text>
                    </TouchableOpacity>
                </View> */}

            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default RecoverPassword

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
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});