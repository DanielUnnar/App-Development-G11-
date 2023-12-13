import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Linking } from "react-native";

export function TrailerScreen({ route }) {
  const { item } = route.params;

  const openTrailer = () => {
    // Check if the movie has trailers
    if (item.trailers && item.trailers.length > 0) {
      // Find the "Official Trailer" in the trailers list
      const officialTrailer = item.trailers[0].results.find(
        (trailer) => trailer.name === "Official Trailer"
      );
  
      // If found, open the "Official Trailer" URL
      if (officialTrailer) {
        Linking.openURL(`https://www.youtube.com/embed/${officialTrailer.key}?rel=0`);
      } else {
        // If not found, show a message
        alert("Sorry, no official trailer available for this movie.");
      }
    } else {
      // If no trailers are available, show a message
      alert("Sorry, no trailers available for this movie.");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <TouchableOpacity onPress={openTrailer}>
        <Text style={styles.linkText}>Watch Trailer</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
  },
});
