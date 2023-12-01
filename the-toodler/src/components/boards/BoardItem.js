import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, ImageBackground, scrollvie } from 'react-native';
import data from '../../resources/data.json';
import styles from './BoardItemStyles';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

function Boards ({navigation}) {
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

  function handleDeletePress(item) {
    const newboard = []
    boards.map((elem, index, arr) => {
      if (elem.id !== item) {
        newboard.push(elem)
      }
    })
    setBoards(newboard)
  };

  const renderBoard = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Lists', {boardid: item.id, listmap: listmap, taskmap: taskmap})}>
      <ImageBackground key={item.id} source={{ uri: item.thumbnailPhoto }} style={styles.boardItem}>
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.modify} onPress={() => {modifyBoard(item)}}><Text style={styles.modifytext}>Modify</Text></TouchableOpacity>
          <Text style={styles.boardTitle}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <TouchableOpacity style={styles.delete} onPress={() => {handleDeletePress(item.id)}} ><Text style={styles.deletetext}>Delete</Text></TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const addNewBoard = () => {
    navigation.navigate('Create Board', {boards: boards});
  };

  const modifyBoard = (item) => {
    navigation.navigate('Modify Board', {boards: boards, item: item});
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addNewBoard} style={styles.buttonLayout}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
      <FlatList
        data={boards}
        renderItem={renderBoard}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default Boards;