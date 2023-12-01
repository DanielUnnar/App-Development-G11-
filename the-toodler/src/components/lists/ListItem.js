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
  function handleModifyPress(item) {
    navigation.navigate('Modify List', { lists: allLists, list: item, boardlists: boardlist, updateLists: setLists, updateboardlists: setBoardList });
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
  }

  useEffect(() => {
    findLists();
  }, []);

  const renderList = ({ item }) => (

    <TouchableOpacity style={{borderColor: item.color, borderWidth: 5, backgroundColor: 'white', borderRadius: 40, margin: 20, padding: 20, textAlign: 'center', justifyContent: 'center'}}>
      <View style = {{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => { handleModifyPress(item) }}>
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

  const AddNewList = () => {
    navigation.navigate('Create List', { lists: allLists, boardlist: boardlist, boardID: boardid, updateLists: updateLists, updateBoardList: setBoardList });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ AddNewList } style={styles.AddListButton}><Text style={styles.AddListText}>+</Text></TouchableOpacity>

      <FlatList
        data={boardlist}
        renderItem={renderList}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default Lists;
