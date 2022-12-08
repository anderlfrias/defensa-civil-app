import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

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
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 5,
        width: '90%',
        //Shadow styles
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
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
    description: {
        fontSize: 16,
        marginTop: 10,
    },
});