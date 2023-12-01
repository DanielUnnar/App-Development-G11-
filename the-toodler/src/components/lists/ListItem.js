import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import styles from './ListItemStyles';

function Lists({ navigation, route }) {
  const { boardid, boardlists, updateLists } = route.params;
  const [allLists, setLists] = useState(boardlists);
  const [boardlist, setBoardList] = useState(boardlists);

  function findLists() {
    const rightlists = [];
    allLists.map((elem, index, arr) => {
      if (elem.boardId === boardid) {
        rightlists.push(elem);
      }
    });
    setBoardList(rightlists);
  }

  function handleDeletePress(item) {
    const newlist = [];
    allLists.map((elem, index, arr) => {
      if (elem.id !== item) {
        newlist.push(elem);
      }
    });
    setLists(newlist);
    updateLists(newlist)

    const newboardlist = [];
    boardlist.map((elem, index, arr) => {
      if (elem.id !== item) {
        newboardlist.push(elem);
      }
    });
    setBoardList(newboardlist);
    navigation.navigate('Boards', { newlists: newlist });
  }

  useEffect(() => {
    findLists();
  }, [route.params]); // Trigger effect when route params change

  const renderList = ({ item }) => (
    <TouchableOpacity style={{borderColor: item.color, borderWidth: 5, backgroundColor: 'white', borderRadius: 40, margin: 20, padding: 20, textAlign: 'center', justifyContent: 'center'}}>
      <View style = {{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <Text style = {{textAlign: 'center', borderWidth: 3, fontSize: 40, borderRadius: 20, paddingLeft: 10, paddingRight: 10}}>
            +
          </Text>
        </TouchableOpacity>
        <Text style = {{textAlign: 'center'}}>
          {item.name}
        </Text>
        <TouchableOpacity onPress={() => {handleDeletePress(item.id)}}>
          <Text style = {{textAlign: 'center', borderWidth: 3, fontSize: 40, borderRadius: 20, paddingLeft: 17, paddingRight: 17}}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Add List" onPress={() => console.log("Hello")} />
      <FlatList
        data={boardlist}
        renderItem={renderList}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default Lists;
