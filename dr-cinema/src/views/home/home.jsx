import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { getCinemas } from '../../services/APIservice'

const windowWidth = Dimensions.get('window').width;

export function HomeScreen({navigation, route}) {
  const [data, setData] = useState('')
  async function handleCinemas() {
    try {
      const cinemas = await getCinemas();
      const sortedCinemas = cinemas.slice().sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedCinemas)


    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    handleCinemas()
    const refreshInterval = setInterval(handleCinemas, 5000);

    return () => clearInterval(refreshInterval);
  }, []);

  function handlePress(item) {
    console.log(item)
    navigation.navigate("Cinema Details", {cinema: item})
  }

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
        data={data}
        renderItem={renderCinemas}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    paddingTop: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    flex: 1,
  },
  cinemaBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cinema: {
    backgroundColor: 'rgba(68, 166, 198, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: windowWidth / 2 - 32,
    width: windowWidth / 2 - 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    margin: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    color: 'white',
  },
});
