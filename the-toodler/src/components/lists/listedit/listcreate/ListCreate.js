import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './ListCreateStyles'

function ListCreate ({ navigation, route }) {
  const { lists, boardlist, boardID, updateLists, updateBoardList } = route.params;
  const [listName, setListName] = useState('');
  const [colorchoice, setColor] = useState('')
  let idCounter = Math.max(...lists.map(list => list.id), ...boardlist.map(item => item.id)) + 1;
  
  useEffect(() => {
    correctLists();
  }, []);

  function correctLists() {
    const correctLists = []
    lists.map((elem, index, arr) => {
      correctLists.push(elem)
    })
    updateLists(correctLists)
  }

  const handleSavePress = () => {
    const newlists = [...lists]
    const newboardlists = [...boardlist]
    newList = {
      id: idCounter++,
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
        onChangeText={(text) => setColor(text.toLocaleLowerCase())}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ListCreate;
