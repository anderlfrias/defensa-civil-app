import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { url } from '../utils/config'
import News from '../components/News'

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        fetch(`${url}def/noticias.php`)
            .then(response => response.json())
            .then(data => {
                setNoticias(data.datos);
            })
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Noticias</Text>

                {noticias.map((noticia, index) => (
                    <News
                        key={index}
                        noticia={noticia}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default Noticias

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
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
