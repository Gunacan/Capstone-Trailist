import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Card, ListItem, Icon, Button } from 'react-native-elements'
import SelectMultiple from 'react-native-select-multiple'
import openMap from 'react-native-open-maps';
import { createOpenLink } from 'react-native-open-maps';


const haversine = require('haversine')

export default class List extends React.Component {

    state = {
        // distance: 0
    }


    _getDirections(lat, lon, trailName) {
        openMap({ latitude: lat, longitude: lon, query: trailName });
        // openMap({ latitude: lat, longitude: lon, query: trailName , provider: 'google' });
    }

    

    render() {

        return (
            !this.props.isLoaded ? (
                <View style={styles.spinnerContainer}> 

                    <Button
                        loading
                        loadingProps={{ size: "large", color: "white" }}
                        buttonStyle={{
                            backgroundColor: "rgba(5, 37, 92, 0.49)",
                            width:  400,
                            height: '100%',
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }} />
                </View>
            ) : 
            <ScrollView stickyHeaderIndices={[0]} >        

                <View style={styles.results}>
                    <Text style={styles.resultsText} >{this.props.trails.length} trails were found near you</Text>
                </View>
                {this.props.trails.map(trail => {
                    {
                        const start = {
                            latitude: this.props.lat,
                            longitude: this.props.lon
                        }
                        
                        const end = {
                            latitude: trail.latitude,
                            longitude: trail.longitude
                        }
                        // console.log(trail)
                        return (
                            <View key={trail.id}>
                                <ImageBackground  source={ trail.imgMedium !== '' ? { uri: trail.imgMedium } : require('../assets/replacer.jpg') } style={styles.trailInfoContainer} >
                                    <Text style={styles.name} >{trail.name}</Text>
                                    <Text style={styles.location} >{trail.location}</Text>
                                    <Text style={styles.length} >{trail.length} miles</Text>
    
                                    { trail.difficulty === 'green'      ? (<Text style={styles.green} >Easy</Text>)
                                    : trail.difficulty === 'greenBlue'  ? (<Text style={styles.greenBlue} >Moderate</Text>)
                                    : trail.difficulty === 'blue'       ? (<Text style={styles.blue} >Challenging</Text>)
                                    : trail.difficulty === 'blueBlack'  ? (<Text style={styles.blueBlack} >Difficult</Text>)
                                    : trail.difficulty === 'black'      ? (<Text style={styles.black} >Hard</Text>)
                                    :                                     (<Text style={styles.blackBlack} >Extreme</Text>) }
                                    
                                    <View style={styles.bottomContainer}>
                                        <Text style={styles.length} >{(haversine(start, end, {unit: 'mile'})).toFixed(1)} miles away</Text>

                                        

                                        <TouchableOpacity style={styles.directionIconContainer} onPress={() => this._getDirections(trail.latitude, trail.longitude, trail.name)} >

                                            <Icon
                                                name='directions'
                                                color='white'
                                                size={40}/>
                                        </TouchableOpacity>

                                    </View>

                                </ImageBackground>
                            </View>
                        )
                    }
                })}
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({

    spinnerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
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
        marginBottom: 8
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
        margin: 3,
        textAlign: 'center',
        width: 70,
        backgroundColor: 'green',
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    greenBlue: {
        margin: 3,
        textAlign: 'center',
        width: 100,
        backgroundColor: '#00807c',
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    blue: {
        margin: 3,
        textAlign: 'center',
        width: 100,
        backgroundColor: '#0079ff',
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    blueBlack: {
        margin: 3,
        textAlign: 'center',
        width: 100,
        backgroundColor: '#0a2b50',
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    black: {
        margin: 3,
        textAlign: 'center',
        width: 70,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    blackBlack: {
        margin: 3,
        textAlign: 'center',
        width: 100,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
    },
    bottomContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    directionIconContainer: {
        alignSelf: 'flex-end',
        marginRight: 40,
        marginBottom: 10,
        marginTop: 0,
        // width: 50,
        // height: 30
    },
    starIconContainer: {
        alignSelf: 'flex-end',
        marginRight: 40,
        marginBottom: 10,
        marginTop: 0,
        marginLeft: 120,
        // width: 50,
        // height: 30
    },
    icon: {
        // backgroundColor: '#22222245'
        // width: 50,
        // height: 50
    }
})