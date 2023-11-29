import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFDD0',
      paddingVertical: 50,
      marginHorizontal: 20,
    },
    boardItem: {
      width: 300,
      height: 150,
      marginVertical: 10,
      borderRadius: 10,
      overflow: 'hidden',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, .5)',
    },
    boardTitle: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    addBoard: {
      fontSize: 40,
      fontWeight: 'bold',
      border: 'solid',
      borderWidth: 2,
      paddingLeft: 30,
      paddingRight: 30,
      backgroundColor: '#ADD8E6',
      borderRadius: 10,
      textAlign: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
});