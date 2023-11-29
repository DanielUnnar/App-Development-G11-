import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BoardCreate from './src/components/boards/boardedit/boardcreate/BoardCreate';

export default function App() {
  return (
    <View style={styles.container}>
      <BoardCreate />
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
