import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
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
    borderWidth: 2,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#ADD8E6',
    borderRadius: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  modifytext: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  deletetext: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ff2400',
  },
  modify: {
    marginBottom: 15,
    marginLeft: 215,
    alignSelf: 'stretch',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  delete: {
    marginTop: 10,
    marginLeft: 215,
    alignSelf: 'stretch',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff2400'
  },
  description: {
    fontSize: 16,
    color: 'white'
  },
  buttonLayout: {
    borderRadius: 10,
    borderWidth: 2,
    padding: 2,
    borderColor: '#1111',
    backgroundColor: '#3cbc',
    width: 100,

  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2e4053',
    textAlign: 'center',
  },
  boardList: {
    marginTop: 10,
  },
});
