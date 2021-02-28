import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button} from 'react-native';
import {  Icon} from 'react-native-elements';
//import Icon from 'react-native-vector-icons';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Soulfood</Text>
      <View style={styles.buttonContainer}>
        <Button
           title="Login"
           color="black"
           onPress={() => navigation.navigate("Login")}
           />
      </View>
      <View style={styles.button2Container}>
          <Button
            title="Sign up"
            color="black"
            onPress={() => navigation.navigate("Register")}
          />
      </View>
   <Image style={styles.logo} source={{uri: 'https://static.thenounproject.com/png/1617024-200.png'}}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcfae6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 60,
    fontFamily: 'Papyrus',
    position:'absolute',
    top: 250
  },
  buttonContainer: {
  borderRadius: 5,
  borderWidth: 1,
  borderColor: 'black',
  padding:4,
  backgroundColor:'#8de3ab',
  position:'absolute',
  width: 100,
  bottom: 280,
  right: 250,
  },
  button2Container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding:4,
    backgroundColor:'#8de3ab',
    width: 100,
    position:'absolute',
    bottom: 280,
    left: 250,
  },
  logo: {
    width: 100,
    height:100,
    position:'absolute',
    top:340
  }
});
