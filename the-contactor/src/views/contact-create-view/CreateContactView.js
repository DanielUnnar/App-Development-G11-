import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './CreateContactViewStyles';

function CreateContactView({navigation, route}) {
    const { addContact } = route.params;
    const [contactname, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');

    const handleSavePress = () => {
      if (contactname.length !== 0 && phone.length !== 0) {
      newContact = {
        name: contactname,
        profileimage: image,
        phoneNumber: phone,
      }
      addContact(newContact)
      navigation.goBack()
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
          <View style={styles.upperHalf}>
            <Image style={styles.profileImage} source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}} />
            <TouchableOpacity onPress={()=> console.log('Hello')}>
            <Text style={styles.imageText}>Add Image</Text>
            </TouchableOpacity>
            <Text style={styles.name}></Text>
          </View>
          <View style={styles.lowerHalf}>
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
        </View>
      );
    }

export default CreateContactView;