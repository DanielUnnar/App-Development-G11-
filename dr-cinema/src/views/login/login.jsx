import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../../services/AuthContext';

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

