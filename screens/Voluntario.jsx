import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { globalStyles } from '../utils/globalStyles';

const Voluntario = () => {
    const [datos, setDatos] = useState({});
    const [isSending, setIsSending] = useState(false);

    const sudmit = async(data) => {
        if (!validateFields()) {
            alert("Debe completar todos los campos");
            return;
        }

        setIsSending(true);

        const formData = new FormData();
        formData.append('cedula', data.cedula);
        formData.append('nombre', data.nombre);
        formData.append('apellido', data.apellido);
        formData.append('telefono', data.telefono);
        formData.append('correo', data.correo);
        formData.append('clave', data.clave);

        console.log(formData);

        await fetch('https://adamix.net/defensa_civil/def/registro.php', {
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
        if (datos.cedula && datos.nombre && datos.apellido && datos.telefono && datos.correo && datos.clave) {
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
                        <Text style={styles.formTitle}>Formulario de Voluntarios</Text>
                        <Text style={styles.formSubtitle}>Complete todos los campos para procesar su solicitud</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Cedula</Text>
                        <TextInput
                            placeholder="ej. 123456789"
                            onChangeText={(text) => setDatos({...datos, cedula: text})}
                            value={datos.cedula}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nombre</Text>
                        <TextInput
                            placeholder="ej. Juan"
                            onChangeText={(text) => setDatos({...datos, nombre: text})}
                            value={datos.nombre}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Apellido</Text>
                        <TextInput
                            placeholder="ej. Perez"
                            onChangeText={(text) => setDatos({...datos, apellido: text})}
                            value={datos.apellido}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Telefono</Text>
                        <TextInput
                            placeholder="ej. 123456789"
                            onChangeText={(text) => setDatos({...datos, telefono: text})}
                            value={datos.telefono}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Correo electronico</Text>
                        <TextInput
                            placeholder="ej. tunombre@example.es"
                            onChangeText={(text) => setDatos({...datos, correo: text})}
                            value={datos.correo}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput
                            placeholder="********"
                            onChangeText={(text) => setDatos({...datos, clave: text})}
                            value={datos.clave}
                            style={styles.input}
                            secureTextEntry={true}
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

export default Voluntario;

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