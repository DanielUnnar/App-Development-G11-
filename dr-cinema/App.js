import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getMovies } from './src/services/APIservice';

export default function App() {
  async function handleMovies() {
    try {
      const data = await getMovies();
      //This is accessing a cinema for a movie and checking its ID. This will be useful
      //for getting the right movies when you click on a cinema
      console.log(data[0].showtimes[0].cinema.id); 
      console.log(data[1])
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Press Me" onPress={() => handleMovies()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
