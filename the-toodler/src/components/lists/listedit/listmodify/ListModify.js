import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../listcreate/ListCreateStyles';

function ListModify ({ navigation, route }) {
  const { lists, list, boardlists, updateLists, updateboardlists } = route.params;
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);

  const handleUpdate = () => {
    const newlist = [];
    lists.map((elem, index, arr) => {
      if (elem.id === list.id) {
        newlist.push({
          id: elem.id,
          name: name,
          color: color,
          boardId: elem.boardId
        });
      }
      else {newlist.push(elem);}
    });
    const newboardlist = [];
    boardlists.map((elem, index, arr) => {
      if (elem.id === list.id) {
        elem.name = name;
        elem.color = color;
      }
      newboardlist.push(elem);
    });
    updateLists(newlist);
    updateboardlists(newboardlist);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
        placeholder='List name (Max 20 Char)'
        maxLength={20}

      />
      <TextInput
        value={color}
        onChangeText={(text) => setColor(text.toLocaleLowerCase())}
        style={styles.input}
        placeholder='Color'

      />
      <Button title="Update List" onPress={handleUpdate} />
    </View>
  );
}

export default ListModify;
