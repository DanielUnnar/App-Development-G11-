import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, SectionList, TextInput } from 'react-native';
import styles from './ContactListViewStyles';
import contacts from '../../resources/data.json';
import { Icon } from '@rneui/themed';

function ContactListView({ navigation }) {
  const contactsMapped = contacts.map(elem => ({
    id: elem.id,
    name: elem.name,
    profileimage: elem.profileimage,
    phoneNumber: elem.phoneNumber,
  }));

  // Sort contacts by name
  const sortedContacts = contactsMapped.sort((a, b) => a.name.localeCompare(b.name));

  // Group contacts by the first letter of the name
  const groupedContacts = sortedContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {});

  const sections = Object.entries(groupedContacts).map(([letter, data]) => ({
    title: letter,
    data,
  }));

  const renderContacts = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => { ContactDetail(item) }}>
      <View style={styles.view}>
        <Image style={styles.image} source={{ uri: item.profileimage }} />
        <Text style={styles.text}>{item.name}</Text>
        <Icon name="arrow-forward-ios" color="grey" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  const ContactDetail = (item) => {
    navigation.navigate('Contact Details', { item: item });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TextInput placeholder='Search' style={styles.searchbar}/>
        <TouchableOpacity onPress={() => navigation.navigate('Create Contact')}>
          <Text style={styles.newContactBtn}>+</Text>
        </TouchableOpacity>

      </View>
      <SectionList
        sections={sections}
        renderItem={renderContacts}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default ContactListView;
