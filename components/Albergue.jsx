import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import { globalStyles } from '../utils/globalStyles'

const Albergue = (props) => {
    const { albergue, onPress } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={onPress}>
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
        // paddingHorizontal: 10,
        // marginBottom: 10,
        backgroundColor: '#fff',
        width: '100%',
        marginBottom: 10,
        borderBottomWidth: .5,
        borderColor: '#ccc',
    },
    card: {
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    cardTitle: {
        ...globalStyles.text,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    cardSubtitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardSubtitleText: {
        ...globalStyles.text,
        fontSize: 14,
    },
});