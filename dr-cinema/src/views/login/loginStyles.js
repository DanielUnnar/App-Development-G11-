import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity and color as needed
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
      },
      input: {
        height: 40,
        width: '80%',
        backgroundColor: 'white',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        
      },
      loginButton: {
        backgroundColor: '#44a6c6',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
      },
      loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      errorText: {
        color: '#f38902',
        marginBottom: 10,
      },
      headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f38902',
      },
  });

  export default styles;