import { View, ScrollView, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const { height } = Dimensions.get('window');

const Carousel = ({ children }) => {
    return (
        <View style={styles.scrollContainer}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    scrollContainer: {
        height,
        marginBottom: 20,
    },
});