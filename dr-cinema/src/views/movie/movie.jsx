import React from 'react';
import { StyleSheet, View, Image, Text } from "react-native";

export function MovieDetails({navigation, route}) {
    const {item} = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.omdb[0].Poster}}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.paragraph}>{item.plot}</Text>
            <Text style={styles.duration}>{item.durationMinutes} Mín</Text>
            <Text style={styles.date}>{item.omdb[0].Year}</Text>
            <Text style={styles.genres}>{item.omdb[0].Genre}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        height: 300,
        width: 180,
    }
});
