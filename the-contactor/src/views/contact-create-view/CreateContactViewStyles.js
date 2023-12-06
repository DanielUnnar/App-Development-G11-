import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    color: '#00bfff',
    fontWeight: '500',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    marginBottom: 10,
  },
  upperHalf: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff', 
  },
  lowerHalf: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', 
    paddingBottom: 120, 
  },
  phoneNumber: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '70%',
    textAlign: 'center',
  },
  saveBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 100,
    textAlign: 'center',
    backgroundColor: '#00bfff',
    color: '#fff',
    fontWeight: '500',
  },
});

export default styles;
