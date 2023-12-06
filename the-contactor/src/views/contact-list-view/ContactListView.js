import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, SectionList, TextInput, PermissionsAndroid } from 'react-native';
import styles from './ContactListViewStyles';
import { Icon } from '@rneui/themed';
import { readAllContacts, addContact, modifyContact, deleteContact } from '../../services/fileService';
import * as Contacts from 'expo-contacts';

function ContactListView({ navigation, route }) {
  const [ourcontacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(null);
  
  const addNewContact = async (contact) => {
    await addContact(contact);
    fetchContacts();
  };

  const fetchContacts = async () => {
    const allContacts = await readAllContacts()
    if (allContacts !== null) {
      setContacts(allContacts);
    } else {
      setContacts([]);
    }
  }

  async function importContacts() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers, Contacts.Fields.RawImage, Contacts.Fields.Image]
      })
      data.forEach(contact => {
        const fullName = contact.lastName ? `${contact.firstName} ${contact.lastName}` : contact.firstName;
        const image = contact.image ? contact.image.uri : null;
        const newContact = {
          name: fullName,
          profileimage: image,
          phoneNumber: contact.phoneNumbers[0].number,
        } 
        addContact(newContact)
      })
    }
  }
  

  useEffect(() => {

    fetchContacts();

    const refreshInterval = setInterval(fetchContacts, 1000);

    return () => clearInterval(refreshInterval);
  }, []);

  const renderContacts = ({ item }) => (
    <TouchableOpacity key={item.uuid} onPress={() => ContactDetail(item)}>
      <View style={styles.view}>
        {item.profileimage ? (
          <Image style={styles.image} source={{ uri: item.profileimage }} />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
          />
        )}
        <Text style={styles.text}>{item.name}</Text>
        <Icon name="arrow-forward-ios" color="grey" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
  

  const ContactDetail = (item) => {
    navigation.navigate('Contact Details', { item: item, modifyContact: modifyContact, deleteContact: deleteContact });
  };

  const sortedContacts = ourcontacts.sort((a, b) => a.name.localeCompare(b.name));

  const groupedContacts = sortedContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(contact)
    return acc
  }, {})

  const sections = Object.entries(groupedContacts).map(([letter, data]) => ({
    title: letter,
    data
  }))

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase()

    if (lowerCaseQuery.trim() === '') {
      setFilteredContacts(null)
    } else {
      const filteredContacts = sortedContacts.filter((contact) => {
        const filteredName = contact.name.toLowerCase().includes(lowerCaseQuery)
        return filteredName
      })

      setFilteredContacts([{ title: 'Search Results', data: filteredContacts }])
    }

    setSearchQuery(query)
  }

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => importContacts()}>
        <Text style={styles.import}>Import Contacts</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <TextInput
          placeholder='Search'
          style={styles.searchbar}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Create Contact', { addContact: addNewContact })}>
          <Text style={styles.newContactBtn}>+</Text>
        </TouchableOpacity>
      </View>
      <SectionList
        sections={filteredContacts || sections}
        renderItem={renderContacts}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => (item && item.uuid ? item.uuid.toString() : index.toString())}
      />
    </View>
  )
}

export default ContactListView
