import React, { useState } from 'react';
import { Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './ContactListViewStyles';
import contacts from '../../resources/data.json';
import { Touchable } from 'react-native';

function ContactListView({navigation, route}) {
  const contactsmap = contacts.map(elem => {
    return {
      id: elem.id,
      name: elem.name,
      profileimage: elem.profileimage,
      phoneNumber: elem.phoneNumber
    }
  })
  const [data, setData] = useState(contactsmap)

  const renderContacts = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => { boardList(item.id) }}>
      <View style={styles.view}>
        <Text style={styles.text}>{item.name}</Text>
        <Image style={styles.image}
        source={{
          uri: item.profileimage,
        }}/>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Create Contact')}>
        <Text>
          New Contact
        </Text>
      </TouchableOpacity>
      <FlatList data={data}
      renderItem={renderContacts}
      keyExtractor={item => item.id.toString()}/>
    </View>
  );
}

export default ContactListView