import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthProvider } from './src/services/AuthContext';
import { getMovies } from './src/services/APIservice';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/index';
import { Provider } from 'react-redux';
import { appstore } from './src/redux/store'

export default function App() {
    return (
      <Provider store={appstore}>
        <AuthProvider> 
          <NavigationContainer>
            <StackNavigator/>
          </NavigationContainer>
        </AuthProvider>
      </Provider>
    );
  }


