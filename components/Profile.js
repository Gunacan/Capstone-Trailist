import React, { Component } from 'react'
import { AppRegistry, Text, View, TextInput, Switch, StyleSheet, ImageBackground, ScrollView } from 'react-native'

export default class Profile extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={require('../replacer.jpg')} style={styles.backgroundImg} >
                    <View style={styles.welcome} >
                        <Text style={styles.welcomeText}>Welcome user!</Text>
                    </View>
                </ImageBackground>
                <View style={styles.trailsHeader} >
                    <Text style={styles.trailsHeaderText}>Your favorite trails</Text>
                </View>
                <View >
                    {/* <ImageBackground  source={ trail.imgMedium !== '' ? { uri: trail.imgMedium } : require('../replacer.jpg') } style={styles.trailInfoContainer} >
                        <Text style={styles.name} >{trail.name}</Text>
                        <Text style={styles.location} >{trail.location}</Text>
                        <Text style={styles.length} >{trail.length} miles</Text>
    
                        (<Text style={styles.blackBlack} >Extreme</Text>) 
    
                        <Text style={styles.length} >{(haversine(start, end, {unit: 'mile'})).toFixed(1)} miles away</Text>
                    </ImageBackground> */}
                </View>
            </ScrollView>
        )
    }
}

AppRegistry.registerComponent('Profile', () => Profile)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImg: {
        height: 200,
        width: 400,
    },
    welcome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15
    },
    trailsHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    trailsHeaderText: {
        color: 'green',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15
    },
})