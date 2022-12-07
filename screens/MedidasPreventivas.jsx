import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { url } from '../utils/config'
import MedidaPreventiva from '../components/MedidaPreventiva'

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
                <View style={{ alignItems: 'center'}}>
                    <Text style={styles.title}>MedidasPreventivas</Text>
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