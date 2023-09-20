import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/form';
import User from './components/user'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>StreamNow</Text>
      <Text>Mira lo que quieras</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
