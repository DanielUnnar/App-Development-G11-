import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, FlatList, Button, Image, Dimensions, ScrollView } from "react-native";
import { getMovies } from '../../services/APIservice';
import { useAuth } from '../../services/AuthContext';
const windowWidth = Dimensions.get('window').width;
import styles from "./cinemaStyles";

export function CinemaDetails({navigation, route}) {
    const { token } = useAuth();
    const { cinema } = route.params;
    const [movies, setMovies] = useState('');

    async function handleMovies() {
        try {
            const apimovies = await getMovies(token);
            setMovies(filterMovies(apimovies));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function filterMovies(movies) {
        const filteredMovies = [];
        movies.forEach(movie => {
            movie.showtimes.forEach(theater => {
                if (theater.cinema.id === cinema.id) {
                    filteredMovies.push(movie);
                }
            });
        });
        return filteredMovies;
    }

    useEffect(() => {
        handleMovies();
        const refreshInterval = setInterval(handleMovies, 5000);

        return () => clearInterval(refreshInterval);
    }, []);

    const renderMovies = ({ item }) => (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Movie Details', {item: item, cinemaid: cinema.id})}>
            <View style={styles.movieContainer}>
                {item.omdb && item.omdb.length > 0 && item.omdb[0].Poster ? (
                    <Image source={{ uri: item.omdb[0].Poster }} style={styles.posterImage} />
                ) : (
                    <Text>No Poster Available</Text>
                )}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    {item.omdb && item.omdb.length > 0 && (
                        <>
                            <Text style={styles.releaseDate}>{item.omdb[0].Genre}</Text>
                            <Text style={styles.releaseDate}>{item.omdb[0].Year}</Text>
                        </>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}>{cinema.name}</Text>
                <Text style={styles.text}>{cinema['address\t']}, {cinema.city}</Text>

                {cinema.website && (
                    <TouchableOpacity onPress={() => Linking.openURL("https://" + cinema.website)}>
                        <Text style={styles.website}>{cinema.website}</Text>
                    </TouchableOpacity>
                )}
                {cinema.phone && <Text style={styles.text}>Phone: {cinema.phone}</Text>}
                <Text style={styles.h3}>About:</Text>
                {cinema.description && <Text style={styles.text1}>{cinema.description.replaceAll("<br>", "").replaceAll("<b>", "")}</Text>}
            </View>
                 
            <View style={styles.body}>
                <FlatList
                    data={movies}
                    renderItem={renderMovies}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.flatListContainer}
                    horizontal
                />
            </View>
        </ScrollView>
    );
}

