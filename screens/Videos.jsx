import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { url } from '../utils/config'
import SingleVideo from '../components/SingleVideo';
import { globalStyles } from '../utils/globalStyles';

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

            <View style={{ alignItems: 'center', backgroundColor: '#fff', padding: 20}}>
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
        ...globalStyles.title,
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 20,
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        marginBottom: 20,
        borderColor: '#ccc',
        width: '100%',
    },
});