import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'
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
                    Desarrollador
                </Text>

                {/* Contacto */}
                <Text style={styles.title}>
                    Contacto
                </Text>

                {/* Email */}
                <TouchableOpacity
                    onPress={() => Linking.openURL('mailto:anderl.friaas@gmail.com')}
                >
                    <Text style={styles.description}>
                        anderl.friaas@gmail.com
                    </Text>
                </TouchableOpacity>

                {/* Celular */}
                <TouchableOpacity
                    onPress={() => Linking.openURL('tel:+18295263375')}
                >
                    <Text style={styles.description}>
                        +1 (829) 526-3375
                    </Text>
                </TouchableOpacity>

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
        width: '100%',
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        borderRadius: 5,
    },
    title: {
        ...globalStyles.title,
        marginTop: 10,
    },
    description: {
        ...globalStyles.text,
        fontSize: 16,
    },
})