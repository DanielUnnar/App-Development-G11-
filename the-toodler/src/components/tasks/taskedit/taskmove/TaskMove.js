import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../../../lists/ListItemStyles'

function TaskMove ({navigation, route}) {
    const {tasks, task, listtask, updateTasks, updateListTasks, boardid, allLists } = route.params;
    const [lists, setLists] = useState(allLists)
    
    function findLists() {
        const newlists = []
        allLists.map((elem) => {
            if (elem.boardId === boardid) {
                newlists.push(elem)
            }
        })
        setLists(newlists)
    }

    function handleMovePress (item) {
        const newtasks = [];
        tasks.map((elem) => {
            if (elem.id === task.id) {
                elem.listId = item.id
            }
            newtasks.push(elem)
        });
        const newlisttask = [];
        listtask.map((elem) => {
            if (elem.id === task.id) {
                elem.listID = item.id
            }
            newlisttask.push(elem)
        });
        updateTasks(newtasks)
        updateTasks(newlisttask)
        navigation.pop(2)
    }

    useEffect(() => {
        findLists();
      }, []);
    

    const renderList = ({ item }) => (
        <TouchableOpacity style={{ borderColor: item.color, borderWidth: 5, backgroundColor: 'white', borderRadius: 40, margin: 20, padding: 20, textAlign: 'center', justifyContent: 'center', width: 350 }} onPress={() => handleMovePress(item)}>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
            <Text style={styles.listText}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
          <FlatList
            data={lists}
            renderItem={renderList}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
    );
}
export default TaskMove