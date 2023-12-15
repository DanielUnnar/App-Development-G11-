import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity, Linking, ScrollView } from "react-native";

export function MovieDetails({navigation, route}) {
    const { item, cinemaid } = route.params;
    const [filteredSchedules, setFilteredSchedules] = useState("")

    function filterSchedules() {
        const schedules = item.showtimes
            .filter(cinema => cinema.cinema.id === cinemaid)
            .map(cinema => cinema.schedule);
        schedules.flat().forEach(item => {
            item.time = item.time.replace(".", ":")
        })
        setFilteredSchedules(schedules.flat());
    }
    

    useEffect(() => {
        filterSchedules()
        const refreshInterval = setInterval(filterSchedules, 5000);
    
        return () => clearInterval(refreshInterval);
      }, []);

    const renderSchedules = ({ item }) =>  {
        return(
            <View style={styles.scheduleview}>
                <Text style={styles.schedule}>{item.time}</Text>
                <TouchableOpacity style={styles.purchasebutton} onPress={() => Linking.openURL(item.purchase_url)}>
                    <Text style={styles.purchase}>Purchase</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={{uri: item.omdb[0].Poster}}/>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.paragraph}>{item.plot}</Text>
                <Text style={styles.duration}>{item.durationMinutes} Mín</Text>
                <Text style={styles.date}>{item.omdb[0].Year}</Text>
                <Text style={styles.genres}>{item.omdb[0].Genre}</Text>
                <FlatList
                data={filteredSchedules}
                renderItem={renderSchedules}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    duration: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10,
    },
    date: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10,
    },
    genres: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 10,
    },
    image: {
        height: 300,
        width: 180,
    },
    header: {
        alignItems: 'center',
    },
    body: {
        alignItems: 'center'
    },
    scheduleview: {
        backgroundColor: 'white',
        borderColor: 'black',
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    schedule: {
        padding: 20,
    },
    purchase: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f38902',
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
    },
    purchasebutton: {

    }
});
