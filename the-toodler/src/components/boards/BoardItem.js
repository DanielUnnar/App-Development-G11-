// YourComponent.js
import React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import boardsData from '../../Resources/data.json';
import styles from './BoardItemStyles'

const YourComponent = () => {
  const { boards } = boardsData;
  const handleBoardPress = (boardId) => {
    // Add your navigation or other actions here
  };
  const handleAddPress = () => {
    <BoardCreate/>
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>The Toodler</Text>
      <Pressable style={boards.boardItem} onPress={() => handleAddPress}><Text style={styles.addBoard}>+</Text></Pressable>
      {boards.map((board) => (
        <TouchableOpacity
          key={board.id}
          onPress={() => handleBoardPress(board.id)}
          activeOpacity={0.7}
        >
          <ImageBackground
            key={board.id}
            source={{ uri: board.thumbnailPhoto }}
            style={styles.boardItem}
          >
            <View style={styles.textContainer}>
              <Text style={styles.boardTitle}>{board.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default YourComponent;
