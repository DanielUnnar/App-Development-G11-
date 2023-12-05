import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './CreateContactViewStyles';

function CreateContactView({navigation, route}) {
    const { addContact } = route.params;
    const [contactname, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');

    const handleSavePress = () => {
      newContact = {
        name: contactname,
        profileimage: image,
        phoneNumber: phone,
      }
      addContact(newContact)
      navigation.goBack()
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
              placeholder='Name'
              value={contactname}
              onChangeText={(text) => setName(text)}
             />
            <TextInput 
              style={styles.phoneNumber}
              placeholder='Phone Number'
              value={phone}
              onChangeText={(text) => setPhone(text)}
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