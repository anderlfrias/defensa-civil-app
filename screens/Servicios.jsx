import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import { url } from '../utils/config'
import Service from '../components/Service';

const Servicios = () => {
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        fetch(`${url}def/servicios.php`)
            .then(response => response.json())
            .then(data => {
                setServicios(data.datos);
            })
    }, []);
    return (
        <ScrollView>
        <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>Servicios</Text>
                {servicios.map((servicio, index) => (
                    <Service key={index} servicio={servicio}/>
                ))}
            </View>
        </View>
        </ScrollView>
    )
}

export default Servicios;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 20,
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        marginBottom: 20,
        borderColor: '#ccc',
        color: '#000',
        width: '90%',
    },
});