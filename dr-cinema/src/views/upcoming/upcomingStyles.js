import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333', 
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 20,
      justifyContent: 'center',
    },
  
    movieContainer: {
      flex: 1,
      backgroundColor: '#44a6c6',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'rgba(68, 166, 198, 0.1)',
      padding: 10,
      height: windowWidth / 1 - 32,
      width: windowWidth / 2 - 16, 
    },
    posterImage: {
      height: '80%', 
      width: '100%',
      resizeMode: 'cover',
      borderRadius: 8,
      marginBottom: 8,
    },
    titleContainer: {
      height: '15%', 
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center', 
    },
    releaseDate: {
      fontSize: 14,
      color: 'white',
    },
  });

  export default styles;