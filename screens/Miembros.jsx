import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { url } from '../utils/config'
import Member from '../components/Member'
import { globalStyles } from '../utils/globalStyles'

const Miembros = () => {
    const [miembros, setMiembros] = useState([]);

    useEffect(() => {
        fetch(`${url}def/miembros.php`)
            .then(response => response.json())
            .then(data => {
                setMiembros(data.datos);
            })
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Miembros</Text>
                <View>
                    {miembros.map((miembro, index) => (
                        <Member
                            key={index}
                            member={miembro}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default Miembros

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        backgroundColor: '#fff',
    },
    title: {
        ...globalStyles.title,
        fontSize: 27,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        marginBottom: 20,
        borderColor: '#ccc',
        width: '100%',
    },
});