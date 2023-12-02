import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './ListItemStyles';
import { Icon } from '@rneui/themed';

function Lists ({ navigation, route }) {
  const { boardid, boardlists, updateLists, tasks, updateTasks } = route.params;
  const [allLists, setLists] = useState(boardlists);
  const [boardlist, setBoardList] = useState(boardlists);
  const [listtasks, setTasks] = useState(tasks)

  function findLists () {
    const rightlists = [];
    allLists.map((elem, index, arr) => {
      if (elem.boardId === boardid) {
        rightlists.push(elem);
      }
    });
    setBoardList(rightlists);
  }

  function handleModifyPress (item) {
    navigation.navigate('Modify List', { lists: allLists, list: item, boardlists: boardlist, updateLists: setLists, updateboardlists: setBoardList });
  }

  function handleDeletePress (item) {
    const newlist = allLists.filter((elem) => elem.id !== item);
    setLists(newlist);
    updateLists(newlist);

    const newboardlist = boardlist.filter((elem) => elem.id !== item);
    setBoardList(newboardlist);
  }
  const listtask = (item) => {
    navigation.navigate('Tasks', {listid: item, tasks: listtasks, updateTasks: updateTasks, updateListTasks: setTasks, boardid: boardid, allLists: allLists })
  }

  useEffect(() => {
    findLists();
  }, []);

  const renderList = ({ item }) => (
    <TouchableOpacity style={{ borderColor: item.color, borderWidth: 5, backgroundColor: 'white', borderRadius: 40, margin: 20, padding: 20, textAlign: 'center', justifyContent: 'center', width: 350 }} onPress={() => {listtask(item.id)}}>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => handleModifyPress(item)}>
          <Icon name="edit" color='#4A90E2' style={styles.editButton} />

        </TouchableOpacity>
        <Text style={styles.listText}>
          {item.name}
        </Text>
        <TouchableOpacity onPress={() => handleDeletePress(item.id)}>
          <Icon name="delete" color='#FF3B30' style={styles.deleteButton} />

        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const AddNewList = () => {
    navigation.navigate('Create List', { lists: allLists, boardlist, boardID: boardid, updateLists, updateBoardList: setBoardList });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={AddNewList} style={styles.AddListButton}><Text style={styles.AddListText}>+</Text></TouchableOpacity>
      <FlatList
        data={boardlist}
        renderItem={renderList}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default Lists;
