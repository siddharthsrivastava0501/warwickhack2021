import React, {useState, Component} from 'react';
import {Text, ActivityIndicator, StyleSheet} from 'react-native';
import {Title, Card, Chip, Paragraph, Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { ScrollView,View } from 'react-native';

function renderRecipe(props) {
    var imageURL = props.strMealThumb;
    imageURL = "{"+'"uri" '+':"'+imageURL+'"'+"}";
    return (
        <Card key={imageURL} style={{width: 400, marginBottom: 30}}>
            <Card.Cover source={JSON.parse(imageURL)}  />
            <Card.Content style={styles.container}>
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
        var user = this.props.route.params.user.uid
        // 5WnnwHmfvsbefSWjicvzSUlGyul1
        firestore().collection('users').doc(user).get().then(documentSnapshot => {
            this.setState({user: documentSnapshot.data(), isLoading: false});
        })
        .catch((e) => {
            console.log(e)
        })
    }

    render() {
        const {navigation} = this.props;
        if (this.state.isLoading) {
            return  (
            <View>
                <ActivityIndicator size="large" color="#000000" />
            </View>)
        } else {
            var data = this.state.user.savedRecipes;
            console.log(data.length)
            if (data[0] == "") {
                console.log("HERE")
                return (
                    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', marginTop: 50}} style={styles.container}>
                        <Button onPress={() => navigation.goBack()}>Back</Button>
                        <Title> {this.state.user['name']} </Title>
                        <Text style={{marginBottom: 20}}> {this.state.user['email']} </Text>
                        <Text style={{marginBottom: 20}}> Your list is empty. Add some items! </Text>
                    </ScrollView>
                    
                )
            } else {
                console.log("HERE2")
                return (
                
                    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', marginTop: 50 }} style={styles.container}>
                        <Button onPress={() => navigation.goBack()}>Back</Button>
                        <Title> {this.state.user['name']} </Title>
                        <Text style={{marginBottom: 20}}> {this.state.user['email']} </Text>
                        {data.map((element) => renderRecipe(JSON.parse(element).meals[0]))}
                    </ScrollView>
                    
                )
            }
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