import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, TextInput, Alert, Modal, Pressable } from 'react-native'
import styles from './CreateContactViewStyles'
import { pickImage } from '../../services/imageService'
import { Icon } from '@rneui/themed'

function CreateContactView ({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [imageUri, setImageUri] = useState(null)
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp)$/i
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

  const handlePickImage = async () => {
    try {
      const uri = await pickImage()
      if (uri) {
        setImageUri(uri)
        setModalVisible(false)
        console.log(uri)
      }
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }

  return (

        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
              setModalVisible(!modalVisible)
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handlePickImage}>
              <Icon name="image" color="white" style={styles.imageIcon} />
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            </View>
          </View>

          </Modal>

        <Text style={styles.textStyle}>Add Image</Text>
          <View style={styles.upperHalf}>
          {imageUri && imageExtensions.test(imageUri)
            ? (
        <Image style={styles.profileImage} source={{ uri: imageUri }} />
              )
            : (
        <Image style={styles.profileImage} source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }}/>
              )}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
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
  )
}

export default CreateContactView
