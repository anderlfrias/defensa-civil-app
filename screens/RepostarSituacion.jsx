import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../utils/globalStyles'
import { url } from '../utils/config'
import { getValueFor } from '../utils/secureStore';
import * as ImagePicker from 'expo-image-picker';
import ImgToBase64 from 'react-native-image-base64';

const ReportarSituacion = () => {
    const [datos, setDatos] = useState({});
    const [isSending, setIsSending] = useState(false);
    const [user, setUser] = useState({});
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };

    const sudmit = async (data) => {
        if (!user?.token) {
            alert("Debe iniciar sesión");
            return;
        }

        if (!validateFields()) {
            alert("Debe completar todos los campos");
            return;
        }

        setIsSending(true);

        const formData = new FormData();
        formData.append('titulo', data.titulo);
        formData.append('descripcion', data.descripcion);
        formData.append('foto', data.foto);
        formData.append('latitud', data.lat);
        formData.append('longitud', data.correo);
        formData.append('token', user.token);

        console.log(formData);

        await fetch(`${url}def/nueva_situacion.php`, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                alert(responseJson.mensaje);
                if (responseJson.exito) {
                    setDatos({});
                    setImage(null);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            })
            .finally(() => {
                setIsSending(false)
            });
    }

    const validateFields = () => {
        if (datos.titulo && datos.descripcion && datos.foto && datos.lat && datos.lng) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        const getUser = async () => {
            const user = await getValueFor('auth');
            setUser(JSON.parse(user).user);
        };

        getUser();
    }, []);

    useEffect(() => {
        if (image) {
            setDatos({ ...datos, foto: image });
            console.log(image);
        }
    }, [image]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <View style={styles.formHeader}>
                            <Text style={styles.formTitle}>Formulario de Situaciones</Text>
                            <Text style={styles.formSubtitle}>Complete los campos acontinuacion para reportar una situacion</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Titulo</Text>
                            <TextInput
                                placeholder="Titulo"
                                onChangeText={(text) => setDatos({ ...datos, titulo: text })}
                                value={datos.titulo}
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Descripcion</Text>
                            <TextInput
                                placeholder="Descripcion"
                                onChangeText={(text) => setDatos({ ...datos, descripcion: text })}
                                value={datos.descripcion}
                                style={styles.input}
                                multiline={true}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
                            <Text style={styles.label}>Foto</Text>
                            <TouchableOpacity
                                onPress={pickImageAsync}
                                style={styles.input}
                            >
                                <Text>Seleccionar una foto</Text>
                            </TouchableOpacity>
                            {image && <Image source={{ uri: image }} style={styles.image} />}
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Latitud</Text>
                            <TextInput
                                placeholder="Latitud"
                                onChangeText={(text) => setDatos({ ...datos, lat: text })}
                                value={datos.lat}
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Longitud</Text>
                            <TextInput
                                placeholder="Longitud"
                                onChangeText={(text) => setDatos({ ...datos, lng: text })}
                                value={datos.lng}
                                style={styles.input}
                            />
                        </View>

                        <View>
                            <TouchableOpacity
                                onPress={async () => await sudmit(datos)}
                                style={styles.button}
                                disabled={isSending}
                            >
                                <Text
                                    style={styles.buttonText}
                                >
                                    {isSending ? 'Enviando...' : 'Enviar'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default ReportarSituacion;

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
    },
    form: {
        ...globalStyles.card,
        flex: 1,
        width: '100%',
    },
    formHeader: {
        marginBottom: 20,
    },
    formTitle: {
        ...globalStyles.title,
        fontSize: 25,
        fontWeight: 'bold',
    },
    formSubtitle: {
        ...globalStyles.subtitle,
        fontSize: 15,
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
        borderWidth: 1,
        borderColor: '#A1A0A5',
        borderRadius: 5,
        padding: 10,
    },
    button: {
        ...globalStyles.bgColorPrimary,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 5,
    }
});