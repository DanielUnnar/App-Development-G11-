import React, { useState } from 'react';
import {  View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useAuth } from '../../services/AuthContext'
import styles from './loginStyles';

export function LoginScreen({ navigation }) {
  const { token, updateToken } = useAuth();
  const { credentials, setCredentials, getToken } = useAuth();
  const [error, setError] = useState(null);

  async function handleLoginPress() {
    try {
      const newToken = await getToken();

      // Check if the token is undefined (login failed)
      if (newToken === undefined) {
        setError('Invalid username or password. Please try again.');
      } else {
        // Reset the error if login is successful
        setError(null);
        navigation.navigate('Default');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  return (
    <ImageBackground
      source={{uri: 'https://media2.zipcar.com/drupal-presales/files/1c_movietheaters_0.jpg'}} // Replace with your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TextInput
          style={styles.input}
          placeholder='Username'
          value={credentials.username}
          onChangeText={(text) => setCredentials({ ...credentials, username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={credentials.password}
          onChangeText={(text) => setCredentials({ ...credentials, password: text })}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

