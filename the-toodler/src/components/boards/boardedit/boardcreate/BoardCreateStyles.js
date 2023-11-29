import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#34bdeb',
    width: 200,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  saveButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default styles;
