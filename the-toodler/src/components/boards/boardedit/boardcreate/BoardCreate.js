import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../boardeditstyles/BoardEditStyles';

function BoardCreate  ({route, navigation}) {
  const {boards} = route.params
  const [boardName, setBoardName] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [description, setDescription] = useState('');
  const ids = boards.map((board) => board.id);
  const newID = Math.max(...ids)+1;

  const handleSavePress = () => {
    newBoard = {
      id: newID,
      name: boardName,
      thumbnailPhoto: thumbnailUrl,
      description: description
    }
    boards.push(newBoard)
    navigation.navigate('Boards', {boards: boards})
  }

  return (
    <View>
      <Text style={styles.title}>Create a new board</Text>
      <TextInput
        placeholder="Board name (Max 20 Char)"
        style={styles.input}
        value={boardName}
        onChangeText={(text) => setBoardName(text)}
        maxLength={20}
      />
      <TextInput
        placeholder="Thumbnail URL"
        style={styles.input}
        value={thumbnailUrl}
        onChangeText={(text) => setThumbnailUrl(text)}
      />
      <TextInput
       placeholder="Description (Optional, Max 30 char)"
       style={styles.input}
       value={description}
       onChangeText={(text) => setDescription(text)}
       maxLength={30}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BoardCreate;
