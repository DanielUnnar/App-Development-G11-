import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageText: {
    color: '#00bfff',
    fontWeight: '500'
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    marginBottom: 10
  },
  upperHalf: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff'
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
    textAlign: 'center'
  },
  saveBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 100,
    backgroundColor: '#00bfff'
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  imageIcon: {

  }
})

export default styles
