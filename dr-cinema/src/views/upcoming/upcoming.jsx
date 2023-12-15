import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { getUpcoming } from '../../services/APIservice';
import { useDispatch, useSelector } from 'react-redux';
import { setUpcomingMovies } from '../../redux/reducers/upcomingMoviesReducer';


const windowWidth = Dimensions.get('window').width;

export function MoviesScreen({ navigation }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.upcomingMovies);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const handleMovies = async () => {
      try {
        const moviesData = await getUpcoming(token);
  async function handleMovies() {
    try {
      const moviesData = await getUpcoming();
      
      // Sort movies by release date in ascending order
      const sortedMovies = moviesData.sort((a, b) => {
        const dateA = new Date(a['release-dateIS']);
        const dateB = new Date(b['release-dateIS']);
        return dateA - dateB;
      });

        // Sort movies by release date in ascending order
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333', 
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
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
    height: windowWidth / 1 - 32,
    width: windowWidth / 2 - 16, 
  },
  posterImage: {
    height: '80%', 
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  titleContainer: {
    height: '15%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  releaseDate: {
    fontSize: 14,
    color: 'white',
  },
});