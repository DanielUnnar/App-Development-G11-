import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthProvider } from './src/services/AuthContext';
import { getMovies } from './src/services/APIservice';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/index';

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
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </AuthProvider>
  );
}


