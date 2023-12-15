import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { getUpcoming } from '../../services/APIservice';

const windowWidth = Dimensions.get('window').width;

export function MoviesScreen({ navigation, route }) {
  const [movies, setMovies] = useState([]);

  async function handleMovies() {
    try {
      const moviesData = await getUpcoming();
      
      // Sort movies by release date in ascending order
      const sortedMovies = moviesData.sort((a, b) => {
        const dateA = new Date(a['release-dateIS']);
        const dateB = new Date(b['release-dateIS']);
        return dateA - dateB;
      });

      setMovies(sortedMovies);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    handleMovies();
    const refreshInterval = setInterval(handleMovies, 5000);

    return () => clearInterval(refreshInterval);
  }, []);


  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.movieContainer}>
        {item.omdb && item.omdb.length > 0 && item.omdb[0].Poster ? (
          <Image source={{ uri: item.omdb[0].Poster }} style={styles.posterImage} />
        ) : (
          <Text>No Poster Available</Text>
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.releaseDate}>{item['release-dateIS']}</Text>
      </View>
    </TouchableOpacity>
  );

  function handlePress(item) {
    navigation.navigate("Trailer", {item: item})
  }

  
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item._id}
        numColumns={2}
        renderItem={renderMovieItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333', // Set background color to transparent
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieContainer: {
    flex: 1,
    backgroundColor: '#44a6c6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(68, 166, 198, 0.1)',
    padding: 10,
    height: windowWidth / 1 - 32, // Adjust the height based on the screen width
    width: windowWidth / 2 - 16, // Adjust the width based on the screen width
  },
  posterImage: {
    height: '80%', // Adjust the height percentage to maintain a consistent aspect ratio
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  titleContainer: {
    height: '15%', // Adjust the height percentage
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text within the title container
  },
  releaseDate: {
    fontSize: 14,
    color: 'white',
  },
});
