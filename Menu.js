import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, ImageButton, Button, ImageBackground, Platform} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
export default class App extends React.Component {
    getData() {
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
     .then(response => {
       console.log(response);
       return response.json();
     })
     .then(data=> {
           var image = data.meals[0].strMealThumb;
           return image;

     })
     .catch(error => {
       console.error(error);
     });
   }
   constructor(props) {
    super(props);
    this.state = {};
    this.getData().then(image=>{this.setState({image})});
  }
  render(){

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1563518839049-f44a5e423f12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsdWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}} 
      style={styles.backgroundImage}>
        <View style={styles.innerContainer}>  
       <Button
        title="View profile"
        color="black"
        accessibilityLabel="Learn more about this purple button"/>
        </View>
        <Image source={{uri: this.state.image}}
       style={styles.image} />
        <View style={styles.innerContainer1}>  
       <Button 
        title="Dislike"
        color="black"
        accessibilityLabel="Learn more about this purple button"/>
        </View>
        <View style={styles.innerContainer2}>  
       <Button 
        title="Like"
        color="black"
        accessibilityLabel="Learn more about this purple button"/>
        </View>
        </ImageBackground>
      <StatusBar style="auto" />
    </View>  
  );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
     height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: 350,
     height: 450,
     bottom: "30%",
     left: "8%"
  },
  innerContainer: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: -10,
    top: 70
  
  },
  innerContainer1: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: 10,
    bottom: 5
  
  },
  innerContainer2: {
    position: 'absolute',
    width: 200,
    height: 200,
    right: 10,
    bottom: 5
  },
});

