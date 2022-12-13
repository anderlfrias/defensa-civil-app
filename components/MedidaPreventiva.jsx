import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const MedidaPreventiva = (props) => {
    const { medidaPreventiva } = props;
    const [description, setDescription] = useState(medidaPreventiva.descripcion);
    const [showMore, setShowMore] = useState(false);

    const handleDescription = () => {
        if (description.length > 255) {
            setDescription(description.substring(0, 255) + '...');
        }
    }

    useEffect(() => {
        if (!showMore) {
            handleDescription();
        } else {
            setDescription(medidaPreventiva.descripcion);
        }
    }, [showMore]);
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: medidaPreventiva.foto }}
                />
                <Text style={styles.title}>
                    {medidaPreventiva.titulo}
                </Text>

                <View>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setShowMore(!showMore)
                            }}
                        >
                            <Text style={{...styles.description}}>
                                {showMore ? 'Ver menos' : 'Ver más'}
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MedidaPreventiva;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 5,
        width: '100%',
    },
    image: {
        alignSelf: 'center',
        width: 250,
        height: 250,
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