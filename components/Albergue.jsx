import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'

const Albergue = (props) => {
    const { albergue } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => console.log(albergue.codigo)}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.cardTitle}>
                        {albergue.codigo} - {albergue.edificio}
                    </Text>
                </View>
                <View style={styles.cardSubtitle}>
                    <Text style={styles.cardSubtitleText}>
                        {albergue.ciudad}
                    </Text>
                    <Text style={styles.cardSubtitleText}>
                        {albergue.telefono}
                    </Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default Albergue

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        // marginBottom: 10,
        backgroundColor: '#fff',
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        // borderRadius: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#1a1a1a',
    },
    cardSubtitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardSubtitleText: {
        fontSize: 14,
        color: '#373737',
    },
});