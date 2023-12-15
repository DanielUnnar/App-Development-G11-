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
    <View style={styles.container}>
      <TextInput
        placeholder='Name'
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => handleLoginPress(username, password)}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
  },
});
