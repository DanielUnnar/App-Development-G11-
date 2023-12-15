import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { getUpcoming } from '../../services/APIservice';
import { useDispatch, useSelector } from 'react-redux';
import { setUpcomingMovies } from '../../redux/reducers/upcomingMoviesReducer';
import styles from './upcomingStyles';


const windowWidth = Dimensions.get('window').width;

export function MoviesScreen({ navigation }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.upcomingMovies);
  const token = useSelector((state) => state.token);

  useEffect(() => {
  async function handleMovies() {
    try {
      const moviesData = await getUpcoming(token);
      console.log(moviesData)
      
        const sortedMovies = moviesData.sort((a, b) => {
          const dateA = new Date(a['release-dateIS']);
          const dateB = new Date(b['release-dateIS']);
          return dateA - dateB;
        });

        dispatch(setUpcomingMovies(sortedMovies));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    handleMovies();
    const refreshInterval = setInterval(handleMovies, 5000);

    return () => clearInterval(refreshInterval);
  }, [dispatch]);

  function handlePress(item) {
    navigation.navigate("Trailer", {item: item})
  }
  
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

  return (
    <View style={styles.container}>
      <FlatList
        data={movies.upcomingMovies}
        keyExtractor={(item) => item._id}
        numColumns={2}
        renderItem={renderMovieItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}