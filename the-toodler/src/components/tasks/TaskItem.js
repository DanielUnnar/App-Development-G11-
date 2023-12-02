import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

function Tasks ({ navigation, route }) {
    const {listid, tasks, updateTasks, updateListTasks, boardid, allLists} = route.params;
    const [allTasks, setTasks] = useState(tasks)
    const [listtask, setListTasks] = useState(tasks)

    const handleToggle = (item) => {
        const updatedTasks = allTasks.map((elem) => {
          if (item.id === elem.id) {
            return { ...elem, isFinished: !elem.isFinished };
          }
          return elem;
        });
        setTasks(updatedTasks);
        updateTasks(updatedTasks);
        updateListTasks(updatedTasks)
      
        const updatedListTasks = listtask.map((elem) => {
          if (item.id === elem.id) {
            return { ...elem, isFinished: !elem.isFinished };
          }
          return elem;
        });
        setListTasks(updatedListTasks);
      };

    function findTasks () {
        const rightTasks = [];
        listtask.map((elem, index, arr) => {
            if (elem.listId === listid) {
                rightTasks.push(elem)
            }
        })
        setListTasks(rightTasks)
    };

    function handleModifyPress (item) {
        navigation.navigate('Modify Task', { tasks: allTasks, task: item, listtask: listtask, updateTasks: setTasks, updateListTask: setListTasks });
    };

    function handleChangeListPress (item) {
        navigation.navigate('Move to new List', {tasks: allTasks, task: item, listtask: listtask, updateTasks: setTasks, updateListTasks: setListTasks, boardid: boardid, allLists: allLists})
    };

    const AddTask = () => {
        navigation.navigate('Create Task', { tasks: allTasks, listtask: listtask, listid: listid, updateTasks: setTasks, updateListTask: setListTasks });
    };

    function handleDeletePress (item) {
        const newtasks = allTasks.filter((elem) => elem.id !== item);
        setTasks(newtasks);
        updateTasks(newtasks);

        const newlisttask = listtask.filter((elem) => elem.id !== item);
        setListTasks(newlisttask);
    }
    
    useEffect(() => {
        findTasks();
        updateTasks();
      }, []);

    const renderTasks = ({ item }) => (
        <View style={styles.taskContainer}>
        <View style={styles.taskActions}>
          <TouchableOpacity onPress={() => handleModifyPress(item)} style={styles.actionButton}>
            <Icon name="edit" color='#4A90E2' style={styles.editButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeletePress(item.id)} style={styles.actionButton}>
            <Icon name="delete" color='#FF3B30' style={styles.deleteButton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleChangeListPress(item)} style={styles.actionButton}>
            <Icon name="list" color='#000' style={styles.changeListButton} />
          </TouchableOpacity>
        </View>
        <Text style={styles.taskName}>
          {item.name}
        </Text>
        <Text style={styles.taskDescription}>
          {item.description}
        </Text>
        <TouchableOpacity onPress={() => handleToggle(item)} style={styles.checkboxContainer}>
          <View style={[styles.checkbox, item.isFinished && styles.checked]} />
          <Text style={styles.checkboxLabel}>Finished</Text>
        </TouchableOpacity>
      </View>
      );

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={AddTask} style={styles.AddTaskButton}><Text style={styles.AddTaskText}>+</Text></TouchableOpacity>
        <FlatList
        data={listtask}
        renderItem={renderTasks}
        keyExtractor={(item) => item.id.toString()}
        />
    </View>
    );
}

export default Tasks;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    taskContainer: {
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
    },
    taskName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    taskDescription: {
      fontSize: 16,
      color: '#555',
      marginTop: 5,
    },
    AddTaskButton: {
        borderRadius: 10,
        borderWidth: 2,
        padding: 2,
        margin: 20,
        borderColor: '#1111',
        backgroundColor: '#3cbc',
        width: 100,
        alignSelf: 'center',
    },
    AddTaskText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2e4053',
        textAlign: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4,
        marginRight: 8,
        marginTop: 10,
    },
    checked: {
        backgroundColor: 'green', // Change the background color when checked
    },
    checkboxLabel: {
        fontSize: 20,
    },
    taskActions: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Align buttons at the top
        marginBottom: 10,
    },
    actionButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    deleteButton: {
        textAlign: 'center',
        borderColor: '#FF3B30',
        borderWidth: 3,
        borderRadius: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 5,
        paddingBottom: 5,
      },
      editButton: {
        textAlign: 'center',
        borderColor: '#4A90E2',
        borderWidth: 3,
        borderRadius: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 5,
        paddingBottom: 5,
      },
      changeListButton: {
        textAlign: 'center',
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 20,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 5,
        paddingBottom: 5,
      },
});