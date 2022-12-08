import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { url } from '../utils/config'
import Member from '../components/Member'

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
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Miembros</Text>

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
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
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