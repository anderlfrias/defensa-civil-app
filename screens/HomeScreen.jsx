import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/logo_defensa_civil_ultimate.png')}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
    },
    image: {
        width: '100%',
    }
});