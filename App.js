import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Profile from './Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 70,
    marginLeft: 30,
    fontFamily: 'Inconsolata'
  },
});
