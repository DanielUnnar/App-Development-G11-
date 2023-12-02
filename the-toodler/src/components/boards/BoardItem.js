import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, ImageBackground, scrollvie } from 'react-native';
import data from '../../resources/data.json';
import styles from './BoardItemStyles';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Icon } from '@rneui/themed';

function Boards ({ navigation, route }) {
  const boardmap = data.boards.map(elem => {
    return {
      id: elem.id,
      name: elem.name,
      thumbnailPhoto: elem.thumbnailPhoto,
      description: elem.description
    };
  });
  const listmap = data.lists.map(elem => {
    return {
      id: elem.id,
      name: elem.name,
      color: elem.color,
      boardId: elem.boardId
    }
  });
  const taskmap = data.tasks.map(elem => {
    return {
      id: elem.id,
      name: elem.name,
      description: elem.description,
      isFinished: elem.isFinished,
      listId: elem.listId
    }
  });

  const [boards, setBoards] = useState(boardmap);
  const [lists, setLists] = useState(listmap);
  const [tasks, setTasks] = useState(taskmap)

  function handleDeletePress (item) {
    const newboard = [];
    const newlist = [];
    const newtask = [];
    boards.map((elem, index, arr) => {
      if (elem.id !== item) {
        newboard.push(elem)
      }
    })
    lists.map((elem) => {
      if (elem.boardId !== item) {
        newlist.push(elem)
      }
      tasks.map((ele) => {
        if (elem.boardId !== item) {
          if (elem.id !== ele.listId) {
            newtask.push(ele)
          }
        }
      })
      setTasks(newtask)
    })
    setBoards(newboard)
    setLists(newlist)
  };

  const renderBoard = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => { boardList(item.id) }}>
      <ImageBackground key={item.id} source={{ uri: item.thumbnailPhoto }} style={styles.boardItem}>
        <View style={styles.textContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.modify} onPress={() => { modifyBoard(item) }}><Icon name="edit" color='#4A90E2' style={styles.modifytext} size={25} /></TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={() => { handleDeletePress(item.id) }} ><Icon name="delete" color='#FF3B30' style={styles.deletetext} /></TouchableOpacity>
          </View>
          <Text style={styles.boardTitle}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const addNewBoard = () => {
    navigation.navigate('Create Board', { boards });
  };

  const modifyBoard = (item) => {
    navigation.navigate('Modify Board', { boards, item });
  };
  const boardList = (item) => {
    navigation.navigate('Lists', { boardid: item, boardlists: lists, tasks: tasks, updateLists: setLists, updateTasks: setTasks })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addNewBoard} style={styles.buttonLayout}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
      <FlatList style={styles.boardList}
        data={boards}
        renderItem={renderBoard}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default Boards;
