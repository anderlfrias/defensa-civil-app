import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../utils/globalStyles'


const Situacion = ({ situacion }) => {
    return (
        <View>
            <Text>{situacion.titulo}</Text>
        </View>
    )
}

export default Situacion