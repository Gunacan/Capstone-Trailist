import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import SelectMultiple from 'react-native-select-multiple'

export default class List extends React.Component {

    state = {
        data: []
    }

    render() {

        

        return (
            <ScrollView stickyHeaderIndices={[0]} >
                <View style={styles.results}>
                    <Text style={styles.resultsText} >{this.props.trails.length} trails were found</Text>
                </View>
                {this.props.trails.map(trail => {
                    // console.log(trail)
                    return (
                        <View key={trail.id}>
                            <ImageBackground  source={ trail.imgMedium !== '' ? { uri: trail.imgMedium } : require('../replacer.jpg') } style={styles.trailInfoContainer} >
                                <Text style={styles.name} >{trail.name}</Text>
                                <Text style={styles.location} >{trail.location}</Text>
                                <Text style={styles.length} >{trail.length} miles</Text>
                                {/* <Text style={styles.length} >{trail.difficulty}</Text> */}

                                { trail.difficulty === 'green'      ? (<Text style={styles.green} >Easy</Text>)
                                : trail.difficulty === 'greenBlue'  ? (<Text style={styles.greenBlue} >Moderate</Text>)
                                : trail.difficulty === 'blue'       ? (<Text style={styles.blue} >Challenging</Text>)
                                : trail.difficulty === 'blueBlack'  ? (<Text style={styles.blueBlack} >Difficult</Text>)
                                : trail.difficulty === 'black'      ? (<Text style={styles.black} >Hard</Text>)
                                :                                     (<Text style={styles.blackBlack} >Extreme</Text>) }

                            </ImageBackground>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    results: {
        backgroundColor: 'green',
        height: 20,
    },
    resultsText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    trailInfoContainer: {
        width: 400, 
        height: 130, 
        marginBottom: 3,
        flex: 1
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15
    },
    location: {
        color: 'white',
        fontSize: 12,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        marginBottom: 30
    },
    length: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    green: {
        color: 'green',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    greenBlue: {
        color: '#00807c',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    blue: {
        color: '#0079ff',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    blueBlack: {
        color: '#0a2b50',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    black: {
        color: 'black',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    blackBlack: {
        color: 'black',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
})