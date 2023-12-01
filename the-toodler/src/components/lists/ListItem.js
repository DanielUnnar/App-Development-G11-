import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import styles from './ListItemStyles'

function Lists({ navigation, route }) {
  const { boardid, listmap } = route.params;
  const [lists, setLists] = useState(listmap);
  const [boardlist, setBoardList] = useState(listmap);

  function findLists() {
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

        <Text style={{borderColor: item.color, borderWidth: 5, backgroundColor: 'white', borderRadius: 40, margin: 20, padding: 20, textAlign: 'center', justifyContent: 'center'}}>
          {item.name}
        </Text>
        <Text>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Add List" onPress={() => {console.log("Hello")}} />
      <FlatList
        data={boardlist}
        renderItem={renderList}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
export default Lists;
