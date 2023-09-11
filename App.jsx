import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/features/home.screen';
import SaferAreaView from './src/components/safer-area-view/SaferAreaView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SaferAreaView style={styles.container}>
      <HomeScreen />
    </SaferAreaView>
  );
}
