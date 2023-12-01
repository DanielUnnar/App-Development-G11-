import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../boardeditstyles/BoardEditStyles';

function BoardModify ({ route, navigation }) {
  const { boards, item } = route.params
  const [id, setID] = useState(item.id);
  const [boardName, setBoardName] = useState(item.name);
  const [thumbnailUrl, setThumbnailUrl] = useState(item.thumbnailPhoto);
  const [description, setDescription] = useState(item.description);
  function handleSavePress () {
    const newboard = []
    boards.map((elem, index, arr) => {
      if (elem.id === item.id) {
        elem.name = boardName
        elem.thumbnailPhoto = thumbnailUrl
        elem.description = description
      }
      newboard.push(elem)
    })
    navigation.navigate('Boards', { boards })
  }
  return (
    <View>
      <Text style={styles.title}>Modify {boardName}</Text>
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
      <TouchableOpacity style={styles.saveButton} onPress={() => { handleSavePress() }}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BoardModify
