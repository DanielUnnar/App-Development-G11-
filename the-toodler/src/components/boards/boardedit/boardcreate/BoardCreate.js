import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './BoardCreateStyles'; // Import the styles
import { useNavigation } from '@react-navigation/native'

function BoardCreate  ({route, navigation}) {
  const {boards} = route.params
  const [boardName, setBoardName] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const ids = boards.map((board) => board.id)
  const newID = Math.max(...ids)+1;

  const handleSavePress = () => {
    // Add {} behind 'Boards' and add the board there.
    newBoard = {
      id: newID,
      name: boardName,
      thumbnailPhoto: thumbnailUrl
    }
    boards.push(newBoard)
    navigation.navigate('Boards', {boards: boards})
  }

  return (
    <View>
      <Text style={styles.title}>Create a new board</Text>
      <TextInput
        placeholder="Board name"
        style={styles.input}
        value={boardName}
        onChangeText={(text) => setBoardName(text)}
      />
      <TextInput
        placeholder="Thumbnail URL"
        style={styles.input}
        value={thumbnailUrl}
        onChangeText={(text) => setThumbnailUrl(text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BoardCreate;
