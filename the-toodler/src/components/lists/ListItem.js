import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import styles from './ListItemStyles'

function Lists ({ navigation, route }) {
  const { boardid, listmap } = route.params;
  const [lists, setLists] = useState(listmap);
  const [boardlist, setBoardList] = useState(listmap);

  function findLists () {
    const rightlists = []
    listmap.map((elem, index, arr) => {
      if (elem.boardId === boardid) {
        rightlists.push(elem)
      }
    })
    setBoardList(rightlists)
  };

  useEffect(() => {
    findLists();
  }, []);

  const renderList = ({ item }) => (
    <TouchableOpacity>
      <View>

        <Text style={{ borderColor: item.color, borderWidth: 5, backgroundColor: 'white', borderRadius: 40, margin: 7, padding: 15, textAlign: 'center', justifyContent: 'center' }}>
          {item.name}
        </Text>
        <Text>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const AddNewList = () => {
    navigation.navigate('Create List', { lists: lists});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ AddNewList } style={styles.AddListButton}><Text style={styles.AddListText}>+</Text></TouchableOpacity>
      <FlatList
        data={boardlist}
        renderItem={renderList}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
export default Lists;
