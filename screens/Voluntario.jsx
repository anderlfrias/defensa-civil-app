import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Voluntario = () => {
    const [datos, setDatos] = useState({});

    const sudmit = (data) => {
        const formData = new FormData();
        // formData.append('cedula', data.cedula);
        // formData.append('nombre', data.nombre);
        // formData.append('apellido', data.apellido);
        // formData.append('telefono', data.telefono);
        // formData.append('correo', data.correo);
        // formData.append('clave', data.clave);
        formData.append('json', JSON.stringify(data));

        console.log(formData);

        fetch('https://adamix.net/defensa_civil/def/registro.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: formData
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error("Error:", error);
            }
        );
    }
    return (
        <View>
            <View>
                <View>
                    <Text>Form title</Text>
                    <Text>Form subtitle</Text>
                </View>

                <View>
                    <Text>Cedula</Text>
                    <TextInput
                        placeholder="ej. 123456789"
                        onChangeText={(text) => setDatos({...datos, cedula: text})}
                        value={datos.cedula}
                    />
                </View>

                <View>
                    <Text>Nombre</Text>
                    <TextInput
                        placeholder="ej. Juan"
                        onChangeText={(text) => setDatos({...datos, nombre: text})}
                        value={datos.nombre}
                    />
                </View>

                <View>
                    <Text>Apellido</Text>
                    <TextInput
                        placeholder="ej. Perez"
                        onChangeText={(text) => setDatos({...datos, apellido: text})}
                        value={datos.apellido}
                    />
                </View>

                <View>
                    <Text>Telefono</Text>
                    <TextInput
                        placeholder="ej. 123456789"
                        onChangeText={(text) => setDatos({...datos, telefono: text})}
                        value={datos.telefono}
                    />
                </View>

                <View>
                    <Text>Correo electronico</Text>
                    <TextInput
                        placeholder="ej. tunombre@example.es"
                        onChangeText={(text) => setDatos({...datos, correo: text})}
                        value={datos.correo}
                    />
                </View>

                <View>
                    <Text>Contraseña</Text>
                    <TextInput
                        placeholder="********"
                        onChangeText={(text) => setDatos({...datos, clave: text})}
                        value={datos.clave}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => sudmit(datos)}
                    >
                        <Text>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Voluntario