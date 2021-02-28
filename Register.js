import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
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
                savedRecipes: [""]
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
            <Title style={{textAlign: 'center'}}>Register</Title>
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
                            style={styles.input}
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
                Register
            </Button>
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Login")}
                style={styles.button}
            >
                Already have an account? 
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
      button: {
        marginTop: 30,
        color: 'white',
        height: 40,
        backgroundColor: '#ec5990',
        borderRadius: 4,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50,
        padding: 8,
        backgroundColor: 'white',
      },
      input: {
        backgroundColor: '#e6f8e8',
        height: 70,
        padding: 10,
        marginTop: 20,
        borderRadius: 4,
      },
  });