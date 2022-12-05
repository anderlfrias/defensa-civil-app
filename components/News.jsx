import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const News = (props) => {
    const { noticia } = props;
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: noticia.foto }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    {noticia.titulo}
                </Text>
                <Text style={styles.date}>
                    {noticia.fecha}
                </Text>
                <Text style={styles.description}>
                    {noticia.contenido}
                </Text>
            </View>
        </View>
    )
}

export default News

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 5,
        width: '100%',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    date: {
        fontSize: 14,
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
    },
});