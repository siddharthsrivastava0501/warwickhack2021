import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Button, Icon} from 'react-native-elements';
//import Icon from 'react-native-vector-icons';

import Profile from './Profile';
import Landing from './Landing';
import Menu from './Menu';
import Login from './Login';

export default function App() {
    return (
        <Profile />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
}});
