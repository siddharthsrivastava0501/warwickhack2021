import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import { Button, Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Icon from 'react-native-vector-icons';

import Profile from './Profile';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                  headerShown: false
                }}>
                <Stack.Screen name="Landing" component={Landing} /> 
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Home" component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}