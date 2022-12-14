import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import { url } from '../utils/config'
import Service from '../components/Service';
import { globalStyles } from '../utils/globalStyles';

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

            <Text style={styles.title}>Servicios</Text>
            <View style={{  }}>
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
        ...globalStyles.container,
        backgroundColor: '#fff',
    },
    title: {
        ...globalStyles.title,
        fontSize: 27,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        marginBottom: 20,
        borderColor: '#ccc',
        width: '100%',
    },
});