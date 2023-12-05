import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './ContactDetailsViewStyles';
import { Icon } from '@rneui/themed';

function ContactDetailsView({ navigation, route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Image style={styles.profileImage} source={{ uri: item.profileimage }} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.lowerHalf}>
        <TouchableOpacity style={styles.callContainer}>
          <Icon name="call" color="white" style={styles.callIcon} />
          <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ContactDetailsView;
