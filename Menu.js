import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Alert,Button, ImageButton, ImageBackground, Platform } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { IconButton } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

function logout() {
    auth().signOut()
    .then(() => console.log('User signed out!'));
}
export default class App extends React.Component {
    getData() {
        return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                var database = data.meals[0];
                var ingredients = [];
                var name;
                var instructions;
                // Get name of the recipe
                name = data.meals[0].strMeal;
                // Get the instructions
                instructions = data.meals[0].strInstructions;

                var i;
                var nameIngredient;
                ingredients.push("");
                for (i = 1; i <= 20; i++) {
                    nameIngredient = "strIngredient";
                    nameIngredient = nameIngredient.concat(i.toString());
                    ingredients.push(data.meals[0][nameIngredient]);
                }

                // Get url for image
                var image = data.meals[0].strMealThumb;
                return {database: database, image: image, name: name, ingredients: ingredients, instructions: instructions };
            })
            .catch(error => {
                console.error(error);
            });
    }
    constructor(props) {
        super(props);
        this.state = { isFirstView: 1 };
        this.data();
    }
    data() {

      this.getData().then(x => { this.setState({database: x.database, image: x.image, name: x.name, ingredients: x.ingredients, instructions: x.instructions }) });
    }

    getIngredients = (item) => {
        var ingredients = this.state.ingredients[item];
        return ingredients;
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                <Button
            title="Log out"
            onPress={() => logout()}
          />
                <IconButton size={36} style={styles.iconButton} onPress={() => navigation.navigate("Profile")} icon={{uri: 'https://static.thenounproject.com/png/1236015-200.png'}}
                        title="View profile"
                        color="black"/>
                    <View style={styles.seeImage}>
                    <IconButton size={30} icon={{uri: 'https://static.thenounproject.com/png/1976887-200.png'}} onPress={() => this.setState({ isFirstView: 1 })}
                        title="Image"
                        color="black"/>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.info}>
                        <IconButton size={50} icon={{uri: 'https://static.thenounproject.com/png/2812423-200.png'}} onPress={() => this.setState({ isFirstView: 2 })}
                            title="Info"
                            color="black" />
                    </View>
                    <View style={styles.line1}></View>
                    <View style={styles.ingredients}>
                        <IconButton size={40} icon={{uri: 'https://static.thenounproject.com/png/2334458-200.png'}} onPress={() => this.setState({ isFirstView: 3 })}
                            title="Ingredients"
                            color="black"
                            accessibilityLabel="Learn more about this purple button" />
                    </View>
                </View>
                {this.state.isFirstView === 1 &&
                    <Image source={{ uri: this.state.image }}
                        style={styles.image} />
                }
                 {this.state.isFirstView === 1 &&
                 <Text style={styles.name}>{this.state.name}</Text>
                }
                { this.state.isFirstView === 2 &&

                    <View style={styles.instructions}>
                        <ScrollView >
                            <Text style={styles.recipe}>{this.state.instructions}</Text>
                        </ScrollView></View>

                }
                { this.state.isFirstView === 3 &&

                    <View style={styles.instructions}>

                        {this.state.ingredients.map((item, key) => (
                            <Text key={key} onPress={this.getIngredients.bind(this, item)}> { item} </Text>)
                        )}

                    </View>


                }
                <View style={styles.innerContainer1}>
                    <IconButton size={85} icon={{uri: 'https://static.thenounproject.com/png/1451810-200.png'}} onPress={()=> this.data()}
                        title="Dislike"/>
                </View>
                <View style={styles.innerContainer2}>
                    <IconButton size={80} icon={{uri: 'https://static.thenounproject.com/png/490104-200.png'}}
                        title="Like"
                        />
                </View>
                <StatusBar style="auto" />
                
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcfae6',
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
        bottom: "28%",
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
        right:10,
        bottom: 7

    },

    innerContainer2: {
        position: 'absolute',
        width: 200,
        height: 200,
        left: 80,
        bottom: 12
    },
    info: {
        position:'absolute',
        top: 48,
        left: 270

    },
    ingredients: {
        position:'absolute',
        top: 59,
        left:178

    },
    seeImage: {
        position:'absolute',
        top: 67,
        left: 94

    },
    instructions: {
        position:'absolute',
        backgroundColor: '#dcfae6',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '25%',
        left: '8%',
        height: 450,
        width: 350,
        alignContent: 'center'
    },
    recipe: {
        margin: 30,
    },
    iconButton: {
        top:-23,
        left:'165%'
    },
    name: {
        position:'absolute',
        bottom:225,
        fontSize: 16
    },
    line: {
        position:'absolute',
        backgroundColor:'black',
        width:1,
        height: 25,
        top: 82,
        left: 165
    },
    line1: {
        position: 'absolute',
        backgroundColor:'black',
        width:1,
        height: 25,
        top: 82,
        left: 269

    }

});


