import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Switch, Button, Title} from 'react-native-paper';

export default function Register({navigation}) {
    const { register, setValue, handleSubmit, control, reset, errors } = useForm();

    const onChange = arg => {
        return {
            value: arg.nativeEvent.text,
        };
    };;

    const submit = (data) => {
        auth().createUserWithEmailAndPassword(data.Email, data.password)
        .then((user) => {
            console.log("USER",user.user.uid);
            firestore().collection('users').doc(user.user.uid).set({
                name: data.nickname,
                email: data.Email,
                savedRecipes: []
            })
        })
        .then(() => {
            navigation.navigate("Home");
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Soulfood</Text>
            <Controller 
                control={control}
                defaultValue=""
                name="nickname"
                render = {({onChange, value}) => (
                    <>
                        <TextInput 
                            label="Nickname"
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
                name="Email"
                render = {({onChange, value}) => (
                    <>
                        <TextInput 
                            label="Email"
                            autoCapitalize="none"
                            style={styles.input1}
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
                            style={styles.input2}
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
             <Text style ={{color:'black'}}>Register</Text>
            </Button>
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Login")}
                style={styles.button1}
            >
             <Text style ={{color:'black'}}>Have an account?</Text>
            </Button>
            <Image style={styles.logo} source={{uri: 'https://static.thenounproject.com/png/1617024-200.png'}}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        color: 'black',
        margin: 20,
        marginLeft: 0,
      },
      logo: {
        width: 100,
        height:100,
        position:'absolute',
        top:260,
        left: 160
      },
      title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
        fontFamily: 'Papyrus',
        position:'absolute',
        top: 200,
        left:80
      },
      button: {
        padding:1,
        backgroundColor:'#8de3ab',
        position:'absolute',
        width: 150,
        bottom: 220,
        right: 140,
      },
      button1: {
        padding:1,
        backgroundColor:'#8de3ab',
        position:'absolute',
        width: 222,
        bottom: 150,
        right: 100,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50,
        padding: 8,
        backgroundColor: '#dcfae6',
      },
      input: {
        borderWidth: 1,  
        borderColor: 'black',
        position:'absolute',
        backgroundColor: '#e6f8e8',
        height: 50,
        width:300,
        top: '44%',
        left:60,
        borderRadius: 4,
      },
      input1: {
        borderWidth: 1,  
        borderColor: 'black',
        position:'absolute',
        backgroundColor: '#e6f8e8',
        height: 50,
        width:300,
        top: '52%',
        left:60,
        borderRadius: 4,
      },
      input2: {
        borderWidth: 1,  
        borderColor: 'black',
        position:'absolute',
        backgroundColor: '#e6f8e8',
        height: 50,
        width:300,
        top: '60%',
        left:60,
        borderRadius: 4,
      },
  });