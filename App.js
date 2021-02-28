import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth'

import { Button, Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

//import Icon from 'react-native-vector-icons';

import Profile from './Profile';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';

const Stack = createStackNavigator();

export default function App() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()

    function onAuthStateChanged(user) {
        console.log(user);
        setUser(user);
        setLoading(false);
    }

    useEffect(() => {
        return auth().onAuthStateChanged(onAuthStateChanged);
    }, [])

    if (loading) {
      return <ActivityIndicator />
    }

    if (!user && !loading) {
        console.log("Not logged in")
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          </NavigationContainer>
        )
    }
    console.log("LOGGED IN")

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                  headerShown: false
                }}>
                <Stack.Screen name="Landing" component={Landing} /> 
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Profile" component={Profile} initialParams={{'user': user}}/>
                <Stack.Screen name="Home" component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}