import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './BoardCreateStyles'; // Import the styles

const BoardCreate = () => {
  const [boardName, setBoardName] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const handleSavePress = () => {
    // Save the board
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
