import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './BoardCreateStyles'; // Import the styles
import { FileSystem } from 'expo';
import boardsData from '../../../../resources/data.json'

const { boards } = boardsData;

const newID = () => {
  const ids = boards.map((board) => board.id);
  const maxID = Math.max(...ids);
  return maxID + 1;
}

const BoardCreate = () => {
  const [boardName, setBoardName] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const handleSavePress = async () => {
    const { boards } = boardsData;

    const newBoard = {
      id: newID(),
      name: boardName,
      thumbnailPhoto: thumbnailUrl,
    };

    const updatedBoards = [...boards, newBoard];

    const updatedData = { boards: updatedBoards };

    try {
      await FileSystem.writeAsStringAsync(
        FileSystem.documentDirectory + 'resources/data.json',
        JSON.stringify(updatedData)
      );
    } catch (error) {
      console.error(error);
    }
  };

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
