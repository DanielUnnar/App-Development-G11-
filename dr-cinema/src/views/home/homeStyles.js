import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
        paddingTop: 10,
      },
      header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
      },
      headerContainer: {
        marginBottom: 10,
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f38902',
      },
      list: {
        flex: 1,
      },
      cinemaBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        margin: 8,
        borderRadius: 8,
        overflow: 'hidden',
      },
      cinema: {
        backgroundColor: 'rgba(68, 166, 198, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: windowWidth / 2 - 32,
        width: windowWidth / 2 - 16,
      },
      text: {
        textAlign: 'center',
        fontSize: 16,
        margin: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
        color: 'white',
      },
    });

    export default styles;