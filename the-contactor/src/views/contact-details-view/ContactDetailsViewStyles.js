import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
  },
  upperHalf: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#00bcf0', 
  },
  lowerHalf: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0', 
    paddingTop: 20, 
  },
  name: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  phoneNumber: {
    flexGrow: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  callContainer: {
    marginBottom: 150,
    flexDirection: 'row',
    width: 250,
    height: 50,
    backgroundColor: '#00bcf0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  callIcon: {
    marginLeft: 20,
    marginRight: 80,
  },
});

export default styles;
