import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    flexGrow: 1,
    fontSize: 20,
    marginLeft: 12,
    fontWeight: '700',
    color: '#000',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '98%',
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
    
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  sectionHeader: {
    padding: 8,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  newContactBtn: {
    fontSize: 40,
    color: '#000',
    fontWeight: '400',
  },
  icon: {
    marginLeft: 'auto',
  },
  searchbar: {
    padding: 3,
    borderWidth: 1,
    borderRadius: 10,
    width: 320,
  }
});

export default styles;
