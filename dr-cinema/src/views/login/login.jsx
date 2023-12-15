// LoginScreen.js
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../../services/AuthContext'

export function LoginScreen({ navigation }) {
  const { token, updateToken } = useAuth();
  const { credentials, setCredentials, getToken } = useAuth();

  async function handleLoginPress() {
    const newtoken = await getToken();
    if (newtoken !== undefined) {
      navigation.navigate('Default');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Name'
        value={credentials.username}
        onChangeText={(text) => setCredentials({ ...credentials, username: text })}
      />
      <TextInput
        placeholder='Password'
        value={credentials.password}
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLoginPress}>
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
