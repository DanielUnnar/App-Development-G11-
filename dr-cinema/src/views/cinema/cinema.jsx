import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, FlatList, Button, Image, Dimensions } from "react-native";
import { getMovies } from '../../services/APIservice';
const windowWidth = Dimensions.get('window').width;

export function CinemaDetails({navigation, route}) {
    const { cinema } = route.params;
    const [movies, setMovies] = useState('')
    async function handleMovies() {
        try {
            const apimovies = await getMovies();
            setMovies(filterMovies(apimovies))
          } catch (error) {
            console.error('Error:', error);
          }
    }

    function filterMovies(movies) {
        const filteredMovies = []
            movies.forEach(movie => {
            movie.showtimes.forEach(theater => {
                if (theater.cinema.id === cinema.id) {
                    filteredMovies.push(movie)
                }
            })
        });
        return filteredMovies
    }
    useEffect(() => {
        handleMovies()
        const refreshInterval = setInterval(handleMovies, 5000);
    
        return () => clearInterval(refreshInterval);
      }, []);
    
      const renderMovies = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Movie Details', {item: item, cinemaid: cinema.id})}>
          <View style={styles.movieContainer}>
            {item.omdb && item.omdb.length > 0 && item.omdb[0].Poster ? (
              <Image source={{ uri: item.omdb[0].Poster }} style={styles.posterImage} />
            ) : (
              <Text>No Poster Available</Text>
            )}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.releaseDate}>{item.omdb[0].Genre}</Text>
              <Text style={styles.releaseDate}>{item.omdb[0].Year}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}>{cinema.name}</Text>
                <Text style={styles.text}>{cinema['address\t']}, {cinema.city}</Text>
                <TouchableOpacity onPress={() => Linking.openURL("https://"+item.website)}>
                    <Text style={styles.website}>{cinema.website}</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Phone: {cinema.phone}</Text>
                <Text style={styles.text1}>{cinema.description.replaceAll("<br>","").replaceAll("<b>","")}</Text>
            </View>        
            <View style={styles.body}>
                <FlatList
                    data={movies}
                    renderItem={renderMovies}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    text1: {
        fontSize: 13,
        paddingLeft: 20,
        paddingRight: 20,
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        borderTopWidth: 1,
        marginTop: 25,
    },
    body: {
        marginBottom: 200,
        paddingHorizontal: 16,
    },
    website: {
        textAlign: 'center',
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'blue',
        borderTopWidth: 1,
        paddingTop: 16,
    },
    flatListContainer: {
        paddingVertical: 10,
    },
    movieContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 16,
        height: 'auto', // Allow the container to adjust its height based on content
        width: windowWidth / 2 - 32, // Adjust the width based on the screen width for two columns
        overflow: 'hidden', // Handle content overflow
    },    
    posterImage: {
        height: 180, // Adjust the height percentage to maintain a consistent aspect ratio
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 8,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        paddingBottom: 30,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        maxWidth: '100%', // Ensure the title doesn't exceed the container width
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },    
    releaseDate: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
        maxWidth: '100%', // Ensure the title doesn't exceed the container width
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textAlign: 'center',
    },
});
