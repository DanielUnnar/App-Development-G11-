import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, ImageBackground } from 'react-native';
import data from '../../resources/data.json';
import styles from './ListItemStyles'

function Lists ({navigation}) {
    const listmap = data.lists.map(elem => {
        return {
          id: elem.id,
          name: elem.name,
          color: elem.color,
          boardID: elem.boardID
        };
      });
    const [lists, setBoards] = useState(listmap);
    
}
export default Lists