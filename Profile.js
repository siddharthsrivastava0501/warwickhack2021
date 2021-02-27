import React from 'react';
import {Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';

var user;

firestore().collection('users').doc("5WnnwHmfvsbefSWjicvzSUlGyul1").get().then(documentSnapshot => {
    console.log(documentSnapshot.data()['name'])
    //console.log(documentSnapshot.data());
});


export default function Profile() {
    return (
        <Text> Hello </Text>
    )
}