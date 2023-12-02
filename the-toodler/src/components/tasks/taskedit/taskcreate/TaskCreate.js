import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../../lists/listedit/listcreate/ListCreateStyles'

function TaskCreate ({navigation, route}) {
    const { tasks, listtask, listid, updateTasks, updateListTask } = route.params;
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    let idCounter = Math.max(...tasks.map(list => list.id), ...listtask.map(item => item.id)) + 1;

    useEffect(() => {
        correctTasks();
    }, [])

    function correctTasks() {
        const correctTasks = [];
        tasks.map((elem, index, arr) => {
            correctTasks.push(elem)
        });
        updateTasks(correctTasks);
    }

    const handleSavePress = () => {
        const newtasks = [...tasks]
        const newlisttask = [...listtask]
        newTask = {
            id: idCounter++,
            name: taskName,
            description: taskDescription,
            listId: listid
        }
        newtasks.push(newTask)
        newlisttask.push(newTask)
        updateTasks(newtasks)
        updateListTask(newlisttask)
        navigation.goBack()
    }

    return (
        <View>
          <Text style={styles.title}>Create a new Task</Text>
          <TextInput
            placeholder="Task name (Max 20 Char)"
            style={styles.input}
            value={taskName}
            onChangeText={(text) => setTaskName(text)}
            maxLength={20}
          />
          <TextInput
            placeholder="description"
            style={styles.input}
            value={taskDescription}
            onChangeText={(text) => setTaskDescription(text)}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      );
}

export default TaskCreate