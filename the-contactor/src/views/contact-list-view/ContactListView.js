import React, { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity, SectionList, TextInput, Button, Linking } from 'react-native'
import styles from './ContactListViewStyles'
import { Icon } from '@rneui/themed'
import { readAllContacts, addContact } from '../../services/fileService'

function ContactListView ({ navigation }) {
  const [contacts, setContacts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredContacts, setFilteredContacts] = useState(null)

  const john = {
    name: 'John',
    profileimage: 'https://fortnite.gg/img/items/10730/icon.jpg?3',
    phoneNumber: '8526969'
  }

  const addJohnContact = async () => {
    await addContact(john)
    fetchContacts()
  }

  const fetchContacts = async () => {
    const allContacts = await readAllContacts()
    if (allContacts !== null) {
      setContacts(allContacts)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  const renderContacts = ({ item }) => (
    <TouchableOpacity key={item.uuid} onPress={() => ContactDetail(item)}>
      <View style={styles.view}>
        <Image style={styles.image} source={{ uri: item.profileimage }} />
        <Text style={styles.text}>{item.name}</Text>
        <Icon name="arrow-forward-ios" color="grey" style={styles.icon} />
      </View>
    </TouchableOpacity>
  )

  const ContactDetail = (item) => {
    navigation.navigate('Contact Details', { item })
  }

  const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name))

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
      <Button title='Create John' onPress={() => { addJohnContact() }} />
      <View style={styles.header}>
        <TextInput
          placeholder='Search'
          style={styles.searchbar}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Create Contact')}>
          <Text style={styles.newContactBtn}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>Import contacts</Text>
      </TouchableOpacity>

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
