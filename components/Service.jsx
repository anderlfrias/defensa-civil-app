import { View, Text, Image } from 'react-native';
import React from 'react';


const Service = (props) => {
    const { servicio } = props;
    return (
        <View>
            <Image
                source={{ uri: servicio.foto }}
                style={{ width: 100, height: 100 }}
            />
            <Text>{servicio.nombre}</Text>
            <Text>{servicio.descripcion}</Text>
        </View>
    )
}

export default Service