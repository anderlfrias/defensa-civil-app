import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { globalStyles } from '../utils/globalStyles'
import { url } from '../utils/config'

const ReportarSituacion = () => {
    const [datos, setDatos] = useState({});
    const [isSending, setIsSending] = useState(false);

    const sudmit = async(data) => {
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
                            onChangeText={(text) => setDatos({...datos, titulo: text})}
                            value={datos.titulo}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Descripcion</Text>
                        <TextInput
                            placeholder="Descripcion"
                            onChangeText={(text) => setDatos({...datos, descripcion: text})}
                            value={datos.descripcion}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Foto</Text>
                        <TextInput
                            placeholder="Foto"
                            onChangeText={(text) => setDatos({...datos, foto: text})}
                            value={datos.foto}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Latitud</Text>
                        <TextInput
                            placeholder="Latitud"
                            onChangeText={(text) => setDatos({...datos, lat: text})}
                            value={datos.lat}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Longitud</Text>
                        <TextInput
                            placeholder="Longitud"
                            onChangeText={(text) => setDatos({...datos, lng: text})}
                            value={datos.lng}
                            style={styles.input}
                        />
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={async() => await sudmit(datos)}
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
});