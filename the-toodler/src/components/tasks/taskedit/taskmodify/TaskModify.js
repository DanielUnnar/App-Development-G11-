import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../../../lists/listedit/listcreate/ListCreateStyles';

function TaskModify ({navigation, route}) {
    const {tasks, task, listtask, updateTasks, updateListTask, updateListTasks} = route.params;
    const [taskName, setTaskName] = useState(task.name)
    const [taskDescription, setTaskDescription] = useState(task.description)

    const handleUpdate = () => {
        const newtasks = [];
        tasks.map((elem, index, arr) => {
            if (elem.id == task.id) {
                newtasks.push({
                    id: elem.id,
                    name: taskName,
                    description: taskDescription,
                    listId: elem.listId
                })
            }
            else {newtasks.push(elem)}
        })
        const newlisttask = [];
        listtask.map((elem, index, arr) => {
            if (elem.id === task.id) {
                elem.name = taskName;
                elem.description = taskDescription;
            }
            newlisttask.push(elem)
        })
        updateTasks(newtasks)
        updateListTask(newlisttask)
        navigation.goBack()
    }

    return (
        <View>
          <TextInput
            value={taskName}
            onChangeText={(text) => setTaskName(text)}
            style={styles.input}
            placeholder='Task name (Max 20 Char)'
            maxLength={20}
    
          />
          <TextInput
            value={taskDescription}
            onChangeText={(text) => setTaskDescription(text)}
            style={styles.input}
            placeholder='Task description (Max 30 char)'
            maxLength={30}
          />
          <Button title="Update List" onPress={handleUpdate} />
        </View>
    );
}
    
export default TaskModify;
