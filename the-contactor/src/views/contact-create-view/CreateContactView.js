import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './CreateContactViewStyles';

function CreateContactView({navigation, route}) {
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
             <TextInput style={styles.phoneNumber} placeholder='Name'/>
            <TextInput style={styles.phoneNumber} placeholder='Phone Number'/>
            <TouchableOpacity>
              <Text style={styles.saveBtn}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

export default CreateContactView;