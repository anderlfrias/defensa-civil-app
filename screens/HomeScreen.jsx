import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Carousel from '../components/Carousel'
import { globalStyles } from '../utils/globalStyles';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Defensa Civil
                </Text>
                <Text style={styles.subtitle}>
                    Ministerio de Obras Públicas y Comunicaciones
                </Text>
            </View>
            <Carousel>
                <View style={styles.card}>
                    <Image
                        source={require('../assets/images/acciones/img-1.jpeg')}
                        style={styles.image}
                    />
                    <Text style={styles.title}>
                        Defensa Civil reconoce la experiencia y dedicación de su voluntariado en un acto nacional
                    </Text>
                    <Text style={styles.date}>
                        5 / Diciembre / 2022
                    </Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={require('../assets/images/acciones/img-2.jpeg')}
                        style={styles.image}
                    />
                    <Text style={styles.title}>
                        Defensa Civil e Infoiles lanzan campaña a favor de la comunidad sorda en el país
                    </Text>
                    <Text style={styles.date}>
                        27 / Noviembre / 2022
                    </Text>
                </View>

                <View style={styles.card}>
                    <Image
                        source={require('../assets/images/acciones/img-3.jpeg')}
                        style={styles.image}
                    />
                    <Text style={styles.title}>
                        Defensa Civil y TV Imaginativa buscan capacitar técnicos de medios de comunicación en Gestión de Riesgos
                    </Text>
                    <Text style={styles.date}>
                        24 / Noviembre / 2022
                    </Text>
                </View>
            </Carousel>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
    },
    card: {
        ...globalStyles.card,
        width,
        // height,
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 20,
    },
    title: {
        ...globalStyles.title,
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {
        ...globalStyles.text,
        fontSize: 14,
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
    header: {
        padding: 20,
    },
    title: {
        ...globalStyles.title,
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        ...globalStyles.subtitle,
        fontSize: 16,
    },
});