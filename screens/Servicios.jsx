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
        <View style={styles.container}>
            <Text style={styles.title}>Servicios</Text>

            <ScrollView>
                {servicios.map((servicio, index) => (
                    <Service key={index} servicio={servicio}/>
                ))}
            </ScrollView>
        </View>
    )
}

export default Servicios;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 20,
        textTransform: 'uppercase',
        borderBottomWidth: 1,
    },
});