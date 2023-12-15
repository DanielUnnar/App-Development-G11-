import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useAuth } from '../../services/AuthContext';
import styles from './loginStyles'

export function LoginScreen({ navigation }) {
  const { token, handleLogin } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginPress(username, password) {
    try {
      await handleLogin(username, password)
      if (token) {
        navigation.navigate('Default')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <ImageBackground
      source={{uri: 'https://media2.zipcar.com/drupal-presales/files/1c_movietheaters_0.jpg'}} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => handleLoginPress(username, password)}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

