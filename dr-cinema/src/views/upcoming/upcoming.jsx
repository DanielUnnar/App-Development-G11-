import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function MoviesScreen() {
    return (
        <View style={styles.container}>
        <Text>upcoming</Text>
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