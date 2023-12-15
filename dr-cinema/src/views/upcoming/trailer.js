import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

export function TrailerScreen({ route }) {
  const { item } = route.params;
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    // Check if the movie has trailers
    if (item.trailers && item.trailers.length > 0) {
      // Find the "Official Trailer" in the trailers list
      const officialTrailer = item.trailers[0].results.find(
        (trailer) => trailer.name === 'Official Trailer'
      );

      // If found, get the key of the official trailer
      if (officialTrailer) {
        const officialTrailerKey = officialTrailer.key;
        setTrailerKey(officialTrailerKey);
      } else {
        // If not found, show a message
        alert('Sorry, no official trailer available for this movie.');
      }
    } else {
      // If no trailers are available, show a message
      alert('Sorry, no trailers available for this movie.');
    }
  }, [item]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      {trailerKey ? (
        <YoutubeIframe
          height={300}
          width={400}
          play={true} // Start playing the video automatically
          videoId={trailerKey} // Set the video ID to the retrieved trailer key
        />
      ) : (
        <Text>No trailer available</Text>
      )}
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
});