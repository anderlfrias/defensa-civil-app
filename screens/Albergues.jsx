import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { url } from '../utils/config'
import Albergue from '../components/Albergue'

const Albergues = () => {
    const [albergues, setAlbergues] = useState([]);

    useEffect(() => {
        fetch(`${url}def/albergues.php`)
            .then(response => response.json())
            .then(data => {
                setAlbergues(data.datos);
            })
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Albergues</Text>
            </View>
            {albergues.map((albergue, index) => (
                <Albergue
                    key={index}
                    albergue={albergue}
                />
            ))}
        </ScrollView>
    )
}

export default Albergues

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});