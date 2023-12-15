import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity, Linking, ScrollView } from "react-native";
import styles from "./movieStyles";

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

