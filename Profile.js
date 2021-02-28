import React, {useState, Component} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Button} from 'react-native';
import {Title, Card, Chip, Paragraph} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native';

function renderRecipe(props) {
    var imageURL = props.strMealThumb;
    imageURL = "{"+'"uri" '+':"'+imageURL+'"'+"}";
    return (
        <Card key={imageURL} style={{width: 400, marginBottom: 30}}>
            <Card.Cover source={JSON.parse(imageURL)} />
            <Card.Content>
                <Card.Title title={props.strMeal} /> 
                <Paragraph>{props.strCategory} | {props.strArea}</Paragraph>
            </Card.Content>
        </Card>
    )
}
class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        firestore().collection('users').doc("5WnnwHmfvsbefSWjicvzSUlGyul1").get().then(documentSnapshot => {
            this.setState({user: documentSnapshot.data(), isLoading: false});
        })
    }

    render() {
        if (this.state.isLoading) {
            return  <ActivityIndicator size="large" color="#00ff00" />
        } else {
            var data = this.state.user.savedRecipes;
            console.log(this.state.user.email)
            return (
                <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Title> {this.state.user['name']} </Title>
                    <Text style={{marginBottom: 20}}> {this.state.user['email']} </Text>
                    {data.map((element) => renderRecipe(JSON.parse(element).meals[0]))}
                </ScrollView>
                </View>
                
                
            )
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#dcfae6',
    },
})

export default Profile;