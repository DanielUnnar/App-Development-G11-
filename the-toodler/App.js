import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Routes from './src/routes/index';

export default function App () {
  return (
    <View style={styles.container}>
      <Routes/> 
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF'
  },
});
