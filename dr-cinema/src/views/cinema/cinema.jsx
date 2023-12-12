import React from "react";
import { StyleSheet, View, Text, Linking, TouchableOpacity } from "react-native";

export function CinemaDetails({navigation, route}) {
    const {item} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item['address\t']}, {item.city}</Text>
            <TouchableOpacity onPress={() => console.log(item['address '])}>
                <Text style={styles.text}>{item.website}</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Phone: {item.phone}</Text>
            <Text style={styles.text1}>{item.description.replaceAll("<br>","").replaceAll("<b>","")}</Text>        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    text1: {
        fontSize: 13,
        paddingLeft: 20,
        paddingRight: 20,
    },
  });