import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

function Tasks ({ navigation, route }) {
    const {listid, tasks, updateTasks} = route.params;
    const [allTasks, setTasks] = useState(tasks)
    const [listtask, setListTasks] = useState(tasks)
    const [isChecked, setChecked] = useState(false);
    const handleToggle = () => {
        setChecked(!isChecked)
    };
    function findTasks () {
        const rightTasks = [];
        allTasks.map((elem, index, arr) => {
            if (elem.listId === listid) {
                rightTasks.push(elem)
            }
        })
        setListTasks(rightTasks)
    }

    const renderTasks = ({ item }) => (
        <View style={styles.taskContainer}>
            <Text style={styles.taskName}>
                {item.name}
            </Text>
            <Text style={styles.taskDescription}>
                {item.description}
            </Text>
            <TouchableOpacity onPress={handleToggle} style={styles.checkboxContainer}>
                <View style={[styles.checkbox, isChecked && styles.checked]} />
                    <Text style={styles.checkboxLabel}>Finished</Text>
             </TouchableOpacity>

      </View>
      );

    useEffect(() => {
        findTasks();
      }, []);

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {console.log("Hello")}} style={styles.AddTaskButton}><Text style={styles.AddTaskText}>+</Text></TouchableOpacity>
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
});