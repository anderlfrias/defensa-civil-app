import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { url } from '../utils/config'
import MedidaPreventiva from '../components/MedidaPreventiva'
import { globalStyles } from '../utils/globalStyles'

const MedidasPreventivas = () => {
    const [medidasPreventivas, setMedidasPreventivas] = useState([]);

    useEffect(() => {
        fetch(`${url}def/medidas_preventivas.php`)
            .then(response => response.json())
            .then(data => {
                setMedidasPreventivas(data.datos);
            })
    }, []);
    return (
        <ScrollView style={{ backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <Text style={styles.title}>MedidasPreventivas</Text>
                <View>
                    {medidasPreventivas.map((medidaPreventiva, index) => (
                        <MedidaPreventiva
                            key={index}
                            medidaPreventiva={medidaPreventiva}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default MedidasPreventivas

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        // flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        ...globalStyles.title,
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 20,
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        marginBottom: 20,
        borderColor: '#ccc',
        width: '100%',
    },
});