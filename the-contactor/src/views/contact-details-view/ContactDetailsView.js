import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './ContactDetailsViewStyles';
import { Icon } from '@rneui/themed';

function ContactDetailsView({ navigation, route }) {
  const { item, modifyContact, deleteContact } = route.params;
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp)$/i;


  function handleDeletePress(contact) {
    deleteContact(contact)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.edit}>
        <TouchableOpacity>
          <Icon name="delete" color="red" style={styles.editIcon} onPress={() => handleDeletePress(item)}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" color="white" style={styles.editIcon} onPress={() => {navigation.navigate('Modify Contact', {contact: item, modifyContact: modifyContact})}} />
        </TouchableOpacity>
      </View>
      <View style={styles.upperHalf}>
      {item.profileimage ? (
          <Image style={styles.profileImage} source={{ uri: item.profileimage }} />
        ) : (
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
          />
        )}
        <Text style={ styles.name } >{ item.name }</Text>
      </View>
      <View style={ styles.lowerHalf }>
      <View style={styles.phoneNumberContainer} >
        <Text style={ styles.text2 } >Phone Number</Text>
        <Text style={styles.phoneNumber} >{ item.phoneNumber }</Text>
      </View>
        <TouchableOpacity style={styles.callContainer} onPress={() => { Linking.openURL(`tel:${item.phoneNumber}`) }}>
          <Icon name="call" color="#00ff00" style={styles.callIcon} />
          <Text style={ styles.text } >Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ContactDetailsView;
