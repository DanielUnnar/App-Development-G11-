import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from './ListCreateStyles'

function ListCreate ({ navigation, route }) {
  const { lists, boardID } = route.params;
  const [listName, setListName] = useState('');
  const [colorchoice, setColor] = useState('')
  const ids = lists.map((list) => list.id);
  const newID = Math.max(...ids) + 1;

  const handleSavePress = () => {
    newList = {
      id: newID,
      name: listName,
      color: colorchoice,
      boardId: boardID
    }
    lists.push(newList)
    navigation.navigate('Lists', { lists })
  }
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
      <TouchableOpacity style={styles.saveButton} onPress={() => handleSavePress()}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListCreate;
