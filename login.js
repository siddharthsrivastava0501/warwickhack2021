import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Button, Icon} from 'react-native-elements';
//import Icon from 'react-native-vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}> Name of app</Text>
      <View style={styles.buttonContainer}>
        <Button
           title="Login"
           />
      </View>
      <View style={styles.button2Container}>
        <Button
           title="Sign up"
           />
      </View>
      <View style={styles.iconContainer}>
      <Icon
              name="trash-bin"
              size={40}
              type='ionicon'
              color="green"
              />
      </View>
      <Text>Open up App.js to start working on your app!</Text>
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
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'AmericanTypewriter-Bold'
  },
  buttonContainer: {
  position:'absolute',
  bottom: 150,
  right: 50,
  },
  button2Container: {
    position:'absolute',
    bottom: 150,
    left: 50,
  },
  iconContainer: {
    
  }
});
