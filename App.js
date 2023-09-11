import { StyleSheet, Text } from 'react-native';
import { SaferAreaView } from './src/components/safer-area-view/SaferAreaView';
import { HomeScreen } from './src/features/home.screen';

export default function App() {
  return (
    <SaferAreaView style={styles.container}>
      <HomeScreen />
    </SaferAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
