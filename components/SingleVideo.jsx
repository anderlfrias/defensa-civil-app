// import { View, Text, Video } from 'react-native'
// import React from 'react'

// const SingleVideo = (props) => {
//     const { video } = props;
//     return (
//         <View>
//             <Text>Video</Text>
//             <Video
//                 source={{ uri: video.link }}
//                 rate={1.0}
//                 volume={1.0}
//                 isMuted={false}
//                 resizeMode="cover"
//                 shouldPlay
//                 isLooping
//                 style={{ width: 300, height: 300 }}
//             />
//         </View>
//     )
// }

// export default SingleVideo

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SingleVideo = (props) => {
    const { video } = props;
    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={styles.titulo}
                >
                    {video.titulo}
                </Text>
                <Text
                    style={styles.date}
                >
                    {video.fecha}
                </Text>
                <Text
                    style={styles.description}
                >
                    {video.descripcion}
                </Text>
            </View>
        </View>
    )
}

export default SingleVideo

const styles = StyleSheet.create({
    container: {
        padding: 15,
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
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    date: {
        fontSize: 15,
        margin: 10,
    },
    description: {
        fontSize: 15,
        margin: 10,
    },

});