import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import YourComponent from './src/Components/boards/BoardItem'

export default function App() {
  return (
    <View style={styles.container}>
      <YourComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDD0',
    
  },
});
