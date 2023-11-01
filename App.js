import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
   <Routes/>
    
    <StatusBar style='auto'></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#903',
    paddingHorizontal: 10,
    paddingVertical: 30
  },
});
