import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
    paddingVertical: 50,
  },
  AddListButton: {
    borderRadius: 10,
    borderWidth: 2,
    padding: 2,
    margin: 20,
    borderColor: '#1111',
    backgroundColor: '#3cbc',
    width: 100,
    alignSelf: 'center',
  },
  AddListText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2e4053',
    textAlign: 'center',
  },
  deleteButton: {
    textAlign: 'center',
    borderColor: '#FF3B30',
    borderWidth: 3,
    borderRadius: 20,
    paddingLeft: 17,
    paddingRight: 17,
  },
  editButton: {
    textAlign: 'center',
    borderColor: '#4A90E2',
    borderWidth: 3,
    borderRadius: 20,
    paddingLeft: 17,
    paddingRight: 17,
  },
  listContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  listText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',

  },
});
