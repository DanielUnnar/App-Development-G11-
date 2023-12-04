import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './ContactListViewStyles';

function ContactListView({navigation, route}) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your </Text>
        <Button title='Press Me' onPress={() => navigation.navigate('Create Contact')}/>
      </View>
    );
  }

export default ContactListView