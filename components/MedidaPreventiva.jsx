import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const MedidaPreventiva = (props) => {
    const { medidaPreventiva } = props;
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: medidaPreventiva.foto }}
                />
                <Text style={styles.title}>
                    {medidaPreventiva.titulo}
                </Text>
                <Text style={styles.description}>
                    {medidaPreventiva.descripcion}
                </Text>
            </View>
        </View>
    )
}

export default MedidaPreventiva;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 5,
        width: '100%',
    },
    image: {
        width: 250,
        height: 250,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
    },
});