import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 400,
    height: 100,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 25,
  }
});

export default styles