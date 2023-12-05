import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, SectionList, TextInput, Button, FlatList } from 'react-native';
import styles from './ContactListViewStyles';
import { Icon } from '@rneui/themed';
import { readAllContacts, addContact, deleteAllJohnFiles } from '../../services/fileService';

function ContactListView({ navigation }) {
  const [contacts, setContacts] = useState([])
  const john = {
    name: 'John',
    profileimage: 'https://fortnite.gg/img/items/10730/icon.jpg?3',
    phoneNumber: '8527722'
  }
  const addJohnContact = () => {
    const john = {
      name: 'John',
      profileimage: 'https://fortnite.gg/img/items/10730/icon.jpg?3',
      phoneNumber: '8527722'
    };

    addContact(john, fetchContacts);
  };

  const fetchContacts = async () => {
    const allContacts = await readAllContacts();
    if (allContacts !== null) {
      setContacts(allContacts);
    }
  };

  
  useEffect(() => {
    async function fetchContacts() {
      const allContacts = await readAllContacts();
      if (allContacts !== null) {
        setContacts(allContacts)
      }
    }

    fetchContacts();
  }, []);


  const renderContacts = ({ item }) => (
    <TouchableOpacity key={item.uuid} onPress={() => { ContactDetail(item) }}>
      <View style={styles.view}>
        <Image style={styles.image} source={{ uri: item.profileimage }} />
        <Text style={styles.text}>{item.name}</Text>
        <Icon name="arrow-forward-ios" color="grey" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );

  const ContactDetail = (item) => {
    navigation.navigate('Contact Details', { item: item });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title='Create John' onPress={() => addJohnContact()}/>
        <TouchableOpacity onPress={() => navigation.navigate('Create Contact')}>
          <Text style={styles.newContactBtn}>+</Text>
        </TouchableOpacity>

      </View>
      {contacts.length > 0 ? (
      <FlatList 
      data={contacts}
      renderItem={renderContacts}
      keyExtractor={item => item.uuid.toString()}/>
      ) : (
        <Text>No Contacts Found</Text>
      )}
    </View>
  );
}

export default ContactListView;