import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './ContactModifyViewStyles';

function ContactModifyView({navigation, route}) {
    const { contact, modifyContact } = route.params;
    const [contactname, setName] = useState(contact.name);
    const [phone, setPhone] = useState(contact.phoneNumber);
    const [image, setImage] = useState(contact.profileimage);

    const handleSavePress = () => {
      if (contactname.length !== 0 && phone.length !== 0) {
      const modifiedContact = {
        name: contactname,
        profileimage: image,
        phoneNumber: phone,
      }
      modifyContact(modifiedContact, contact)
      navigation.pop(2)
      }
      else {
        Alert.alert('Required Fields Missing', 'You are missing required fields')
      }
    }
    
    const handleText = (text) => {
      text = text.replace('-', '')
      setName(text)
    }
    const handlePhone = (text) => {
      text = text.replace(/[^0-9]/g, '')
      setPhone(text)
    }
    return (
        <View style={styles.container}>
          {image ? (
          <Image style={styles.profileImage} source={{ uri: image }} />
        ) : (
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
          />
        )}
            <TouchableOpacity onPress={()=> console.log('Hello')}>
            <Text style={styles.imageText}>Add Image</Text>
            </TouchableOpacity>
            <Text style={styles.name}></Text>
            <TextInput 
              style={styles.phoneNumber} 
              placeholder='Name (Required)'
              value={contactname}
              onChangeText={(text) => handleText(text)}
             />
            <TextInput 
              style={styles.phoneNumber}
              placeholder='Phone Number (Required)'
              value={phone}
              onChangeText={(text) => handlePhone(text)}
            />
            <TextInput
              style={styles.phoneNumber}
              placeholder='Image URL'
              value={image}
              onChangeText={(text) => setImage(text)}
            />
            <TouchableOpacity onPress={() => handleSavePress()}>
              <Text style={styles.saveBtn}>Save</Text>
            </TouchableOpacity>
        </View>
      );
    }

export default ContactModifyView;