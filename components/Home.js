import React, { Component } from 'react'
import { AppRegistry, Text, View, TextInput, Switch, StyleSheet, ImageBackground, Image } from 'react-native'

import { Button, Header, Avatar } from 'react-native-elements';

import { Actions } from 'react-native-router-flux'


export default class Home extends Component {
    
    render() {
        return (
            <ImageBackground source={require('../assets/hiking2.jpg')} style={{width: '100%', height: '100%'}}>

                    <View style={styles.logoContainer}>
                        <Avatar
                            large
                            rounded
                            source={require('../assets/images.png')}
                            activeOpacity={0.7}
                        />

                        <Text style={styles.name}>Trailist</Text>
                        <Text style={styles.slogan}>"In every walk with nature, one receives far more than he seeks"</Text>
                        <Text style={styles.author}>John Muir</Text>

                    </View>

                <View style={styles.homeView}>



                    <Button
                        onPress={() => Actions.search()}
                        title='Start searching for trails'
                        buttonStyle={{
                            backgroundColor: "#2089dcd6",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5,
                            // paddingTop: 0
                        }}
                        />
                </View>
            </ImageBackground>
        )
    }
}

AppRegistry.registerComponent('Home', () => Home)

const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        // justifyContent: 'center',
        marginTop: 70
        // alignItems: 'center',
        // flexDirection: 'column'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
        
    },
    name: {
        color: 'white',
        fontSize: 40,
        // fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15
    },
    slogan: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 50
        // paddingBottom: 10
    },
    author: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        alignSelf: 'flex-end',
        marginRight: 40,
    }
})

