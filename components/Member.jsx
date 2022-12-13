import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../utils/globalStyles'

const Member = (props) => {
    const { member } = props;
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: member.foto }}
                style={styles.image}
            />
            <Text style={styles.title}>
                {member.nombre}
            </Text>
            <Text style={styles.description}>
                {member.cargo}
            </Text>
        </View>
    )
}

export default Member

const styles = StyleSheet.create({
    container: {
        ...globalStyles.card,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 5,
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
    description: {
        ...globalStyles.text,
        fontSize: 16,
        marginTop: 10,
    },
});