import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from './ListCreateStyles'

function ListCreate ({ navigation, route }) {
  const { listmap, boardid } = route.params;
  return (
    <View>
      <Text style={styles.title}>Create a new List</Text>
      <TextInput
        placeholder="List name (Max 20 Char)"
        style={styles.input}
        maxLength={20}
      />
      <TextInput
        placeholder="Color"
        style={styles.input}
      />
      <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Hello')}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListCreate;
