import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Switch, Button, Title} from 'react-native-paper';

export default function Login({navigation}) {
    const { register, setValue, handleSubmit, control, reset, errors } = useForm();

    const onChange = arg => {
        return {
            value: arg.nativeEvent.text,
        };
    };;

    const submit = (data) => {
        console.log(data, data.password)
        auth().signInWithEmailAndPassword(data.Email, data.password)
        .then((user) => {
            console.log("Successful sign in");
            navigation.navigate("Home", {params: {user: user}});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Soulfood</Text>
            <Image style={styles.logo} source={{uri: 'https://static.thenounproject.com/png/1617024-200.png'}}></Image>
            <Controller 
                control={control}
                defaultValue=""
                name="Email"
                render = {({onChange, value}) => (
                    <>
                        <TextInput 
                            label="Email"
                            autoCapitalize="none"
                            style={styles.input}
                            value={value}
                            onChangeText={(value) => onChange(value)}
                        />
                    </>
                )}
                rules={{required: true}}
            />
             <Controller 
                control={control}
                defaultValue=""
                name="password"
                render = {({onChange, value}) => (
                    <>
                        <TextInput 
                            label="Password"
                            autoCapitalize="none"
                            style={styles.input1}
                            secureTextEntry
                            value={value}
                            onChangeText={(value) => onChange(value)}
                        />
                    </>
                )}
                rules={{required: true}}
            />
            <Button
                mode="contained"
                onPress={handleSubmit(submit)}
                style={styles.button}
            >
               <Text style={{color:'black'}}> Log in </Text>
            </Button>
            <Button
                mode="contained"
                color="black"
                onPress={() => navigation.navigate("Register")}
                style={styles.button1}
            >
                <Text style ={{color:'black'}}>Don't have an account?</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        color: 'black',
        margin: 20,
        marginLeft: 0,
      },
      title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
        fontFamily: 'Papyrus',
        position:'absolute',
        top: 200,
        left:70
      },
      logo: {
        width: 100,
        height:100,
        position:'absolute',
        top:260,
        left:150
      },
      button: {
        position:'absolute',
        bottom: 240,
        width:180,
        left:113,
        color: 'white',
        padding: 1,
        backgroundColor:'#8de3ab',
        borderRadius: 4,
      },
      button1: {
        position:'absolute',
        bottom: 180,
        width:250,
        left:81,
        color: 'white',
        padding: 1,
        backgroundColor:'#8de3ab',
        borderRadius: 4,
      },
      container: {
        flex: 1,
        backgroundColor:'#dcfae6',
        justifyContent: 'center',
        paddingTop: 50,
        padding: 8,
      },
      input: {
        borderWidth: 1,  
        borderColor: 'black',
        position:'absolute',
        backgroundColor: '#e6f8e8',
        height: 50,
        width:290,
        top: '50%',
        left:60,
        borderRadius: 4,
      },
      input1: {
        borderWidth: 1,  
        borderColor: 'black',
        position:'absolute',
        backgroundColor: '#e6f8e8',
        height: 50,
        width:290,
        top: '60%',
        left:60,
        borderRadius: 4,
      },
  });