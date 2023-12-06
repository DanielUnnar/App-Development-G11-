import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2
  },
  upperHalf: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3'
  },
  lowerHalf: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    paddingTop: 20
  },
  name: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  phoneNumberContainer: {
    borderWidth: 2,
    borderRadius: 8,
    width: 200,
    height: 50,
    textAlign: 'center',
    padding: 4,
    marginBottom: 20
  },
  phoneNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text2: {
    fontSize: 11,
    color: '#737373'
  },

  callIcon: {
    marginRight: 15
  },
  editIcon: {
    margin: 10,
    borderWidth: 3,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#00bcf0'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  callContainer: {
    marginBottom: 200,
    flexDirection: 'row',
    width: 130,
    height: 50,
    backgroundColor: '#00bcf0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});


export default styles
