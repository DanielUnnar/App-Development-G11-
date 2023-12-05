import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './ContactDetailsViewStyles';
import { Icon } from '@rneui/themed';

function ContactDetailsView({ navigation, route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <TouchableOpacity>
          <Icon name="edit" color="white" style={styles.editIcon} onPress={() => console.log("hello")} />
        </TouchableOpacity>
        <Image style={styles.profileImage} source={{ uri: item.profileimage }} />
        <Text style={ styles.name } >{ item.name }</Text>
      </View>
      <View style={ styles.lowerHalf }>
      <View style={styles.phoneNumberContainer} >
        <Text style={ styles.text2 } >Phone Number</Text>
        <Text style={styles.phoneNumber} >{ item.phoneNumber }</Text>
      </View>
        <TouchableOpacity style={styles.callContainer}>
          <Icon name="call" color="#00ff00" size="25" style={styles.callIcon} />
          <Text style={ styles.text } >Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ContactDetailsView;
