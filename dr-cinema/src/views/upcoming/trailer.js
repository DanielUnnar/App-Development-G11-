import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import styles from "./trailerStyles";

export function TrailerScreen({ route }) {
  const { item } = route.params;
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {

    if (item.trailers && item.trailers.length > 0) {

      const officialTrailer = item.trailers[0].results.find(
        (trailer) => trailer.name.includes('Official') && trailer.name.includes('Trailer')
      );
      const teaser = item.trailers[0].results.find(
        (trailer) => trailer.name.includes('Teaser')
      );
      if (officialTrailer) {
        const officialTrailerKey = officialTrailer.key;
        setTrailerKey(officialTrailerKey);
      
      } else if (teaser) {
        const teaserKey = teaser.key;
        setTrailerKey(teaserKey);
      } else {
        
        alert('Sorry, no trailers available for this movie.');
      }
    } else {
      
      alert('Sorry, no trailers available for this movie.');
    }
  }, [item]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {item.title}</Text>
      {trailerKey ? (
        <YoutubeIframe
          height={'40%'}
          width={'95%'}
          play={true} 
          videoId={trailerKey}
        />
      )
       : (
        <Text style={styles.text}>No trailer available</Text>
      )}
    </View>
  );
}

