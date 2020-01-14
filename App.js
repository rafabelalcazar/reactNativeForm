import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native';
import Form from './src/components/Form';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop:20,
    paddingHorizontal:20
  },
});
