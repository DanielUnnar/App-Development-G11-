import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { getCinemas } from '../../services/APIservice'

export function HomeScreen({navigation, route}) {
  const [data, setData] = useState('')
  async function handleCinemas() {
    try {
      const cinemas = await getCinemas();
      setData(cinemas)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    handleCinemas()
    const refreshInterval = setInterval(handleCinemas, 5000);

    return () => clearInterval(refreshInterval);
  }, []);
  function handlePress(item) {
    console.log(item)
    navigation.navigate("Cinema Details", {item: item})
  }
  const renderCinemas = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}> 
        <View style={styles.cinema}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.website}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  

  return (
    <View style={styles.container}>
      <FlatList
      style={styles.list}
      data={data}
      renderItem={renderCinemas}
      keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'center',
    backgroundColor: '#FFFDD0'
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    margin: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  cinema: {
    borderWidth: 1,
    borderRadius: 40,
    alignItems: 'center',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: '#FFFFFA'
  },
});