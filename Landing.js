import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Button, Icon} from 'react-native-elements';
import auth from '@react-native-firebase/auth'
//import Icon from 'react-native-vector-icons';

function logout() {
    auth().signOut()
    .then(() => console.log('User signed out!'));
}

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}> Name of app</Text>
      <View style={styles.buttonContainer}>
        <Button
           title="Login"
           onPress={() => navigation.navigate("Login")}
           />
      </View>
      <View style={styles.button2Container}>
          <Button
            title="Sign up"
            onPress={() => navigation.navigate("Register")}
          />
      </View>
      <View style={styles.button2Container}>
          <Button
            title="Log out"
            onPress={() => logout()}
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
