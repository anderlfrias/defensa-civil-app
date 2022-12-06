import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { url } from '../utils/config'
import SingleVideo from '../components/SingleVideo'

const Videos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`${url}def/videos.php`)
            .then(response => response.json())
            .then(data => {
                setVideos(data.datos);
            })
    }, []);

    return (
        <ScrollView>

            <View style={{ alignItems: 'center', backgroundColor: '#fff' }}>
                <Text style={styles.title}>Videos</Text>

                {videos.map((video, index) => (
                    <SingleVideo key={index} video={video} />
                ))}
            </View>
        </ScrollView>
    )
}

export default Videos;

const styles = StyleSheet.create({
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