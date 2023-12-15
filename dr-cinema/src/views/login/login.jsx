import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

export function LoginScreen({navigation, route}) {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    return (
        <View style={styles.container}>
            <TextInput
            placeholder='Name'
            value={user}
            onChangeText={(text) => setUser(text)}
            />
            <TextInput
            placeholder='Password'
            value={pass}
            onChangeText={(text) => setPass(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
