import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from './ListCreateStyles'
import { UploadTask } from 'expo-file-system';

function ListCreate ({ navigation, route }) {
  const { lists, boardlist, boardID, updateLists, updateBoardList } = route.params;
  const [listName, setListName] = useState('');
  const [colorchoice, setColor] = useState('')
  const ids = lists.map((list) => list.id);
  const newID = Math.max(...ids) + 1;

  const handleSavePress = () => {
    const newlists = []
    const newboardlists = []
    lists.map((elem, index, arr) => {
      newlists.push(elem)
    })
    boardlist.map((elem, index, arr) => {
      newboardlists.push(elem)
    })
    newList = {
      id: newID,
      name: listName,
      color: colorchoice,
      boardId: boardID
    }
    newlists.push(newList)
    newboardlists.push(newList)
    updateLists(newlists)
    updateBoardList(newboardlists)
    navigation.goBack('Lists')
  }
  return (
    <View>
      <Text style={styles.title}>Create a new List</Text>
      <TextInput
        placeholder="List name (Max 20 Char)"
        style={styles.input}
        value={listName}
        onChangeText={(text) => setListName(text)}
        maxLength={20}
      />
      <TextInput
        placeholder="Color"
        style={styles.input}
        value={colorchoice}
        onChangeText={(text) => setColor(text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListCreate;
