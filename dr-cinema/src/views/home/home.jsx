import React, { useEffect } from 'react';
import {  Text, View, FlatList, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemas } from '../../services/APIservice';
import { setCinemas } from '../../redux/reducers/cinemasReducer';
import styles from './homeStyles';


export function HomeScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const cinemas = useSelector((state) => state.cinemas);

  useEffect(() => {
    const handleCinemas = async () => {
      try {
        const fetchedCinemas = await getCinemas(token);
        const sortedCinemas = fetchedCinemas.slice().sort((a, b) => a.name.localeCompare(b.name));
        dispatch(setCinemas(sortedCinemas));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    handleCinemas();
    const refreshInterval = setInterval(handleCinemas, 5000);

    return () => clearInterval(refreshInterval);
  }, [dispatch, token]);

  const handlePress = (item) => {
    console.log(item);
    navigation.navigate('Cinema Details', { cinema: item });
  };

  const renderCinemas = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
      <ImageBackground
        source={{ uri: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/112a7-movie-theatres-in-mumbai.jpg?fit=1000%2C623&ssl=1' }}
        style={styles.cinemaBackground}
      >
        <View style={styles.cinema}>
          <Text style={styles.header}>{item.name}</Text>
          <Text style={styles.text}>{item.website}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Cinemas</Text>
      </View>
        <FlatList
          style={styles.list}
          data={cinemas.cinemas}
          renderItem={renderCinemas}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
}

