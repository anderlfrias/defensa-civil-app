import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { globalStyles } from '../utils/globalStyles'

const News = (props) => {
    const { noticia } = props;
    const [description, setDescription] = useState(noticia.contenido);
    const [showMore, setShowMore] = useState(false);

    const handleDescription = () => {
        if (description.length > 255) {
            setDescription(description.substring(0, 255) + '...');
        }
    }

    useEffect(() => {
        if (!showMore) {
            handleDescription();
        } else {
            setDescription(noticia.contenido);
        }
    }, [showMore]);
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

                <View>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setShowMore(!showMore)
                            }}
                        >
                            <Text style={{...styles.description}}>
                                {showMore ? 'Ver menos' : 'Ver más'}
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default News

const styles = StyleSheet.create({
    container: {
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
        ...globalStyles.title,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    date: {
        ...globalStyles.subtitle,
        fontSize: 14,
        marginTop: 10,
    },
    description: {
        ...globalStyles.text,
        fontSize: 16,
        marginTop: 10,
    },
    button: {
        padding: 7,
        borderRadius: 5,
        backgroundColor: '#c8c8c8',
        marginTop: 10,
        width: 75,
    },
});