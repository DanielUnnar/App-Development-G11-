// YourComponent.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import boardsData from '../../resources/data.json';

const YourComponent = () => {
  const { boards } = boardsData;

  const handleBoardPress = (boardId) => {
    console.log('Board pressed', boardId);
    // Add your navigation or other actions here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 50,
    marginHorizontal: 20,
  },
  boardItem: {
    width: 300,
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  boardTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default YourComponent;
