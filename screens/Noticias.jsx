import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { url } from '../utils/config'
import News from '../components/News'
import { globalStyles } from '../utils/globalStyles'

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
        ...globalStyles.container,
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
