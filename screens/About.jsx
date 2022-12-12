import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../utils/globalStyles'

const About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require('../assets/images/mi_foto-icon.png')}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Anderson Leonel Frias Acosta
                </Text>
                <Text style={styles.description}>
                    Desarrollador Web
                </Text>
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
    },
    card: {
        ...globalStyles.card,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    title: {
        ...globalStyles.title,
        marginTop: 10,
    },
    description: {
        ...globalStyles.text,
    },
})