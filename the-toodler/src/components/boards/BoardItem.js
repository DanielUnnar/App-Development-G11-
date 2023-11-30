import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, ImageBackground } from 'react-native';
import data from '../../resources/data.json';
import styles from './BoardItemStyles';
import { useNavigation } from '@react-navigation/native';

function YourComponent ({navigation}) {
  const [boards, setBoards] = useState([]);
  const map1 = data.boards.map(elem => {
    return {
      id: elem.id,
      name: elem.name,
      thumbnailPhoto: elem.thumbnailPhoto
    };
  });
  function handleDeletePress(item) {
    map1.map((elem, index, arr) => {
      if (elem.id === item) {
        arr.splice(index, 1)
      }
    })
  }
  useEffect(() => {
    setBoards(data.boards);
  }, []);

  const renderBoard = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => console.log(item.id)}>
      <ImageBackground key={item.id} source={{ uri: item.thumbnailPhoto }} style={styles.boardItem}>
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.modify}><Text style={styles.modifytext}>Modify</Text></TouchableOpacity>
          <Text style={styles.boardTitle}>{item.name}</Text>
          <TouchableOpacity style={styles.delete} onPress={() => {handleDeletePress(item.id)}} ><Text style={styles.deletetext}>Delete</Text></TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const addNewBoard = () => {
    navigation.navigate('Create Board', {boards: data.boards});
  }



  return (
    <View style={styles.container}>
      <Button title="Add Board" onPress={addNewBoard} />
      <FlatList
        data={boards}
        renderItem={renderBoard}
        keyExtractor={item => item.id.toString()}
      />

    </View>
  );
};

export default YourComponent;