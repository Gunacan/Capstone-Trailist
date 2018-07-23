import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import SelectMultiple from 'react-native-select-multiple'
import openMap from 'react-native-open-maps';
import { createOpenLink } from 'react-native-open-maps';

const haversine = require('haversine')

// const yosemite = { latitude: 37.865101, longitude: -119.538330 };
// const openYosemite = createOpenLink(yosemite);
// const openYosemiteZoomedOut = createOpenLink({ ...yosemite, zoom: 100,  provider: 'google' });

// const facebookHQ = { latitude: 37.4847, longitude: 122.1477 };
// const openFacebookHQ = createOpenLink(facebookHQ);


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
                                <ImageBackground  source={ trail.imgMedium !== '' ? { uri: trail.imgMedium } : require('../replacer.jpg') } style={styles.trailInfoContainer} >
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

                                        {/* <Icon
                                            raised
                                            name='directions'
                                            type='font-awesome'
                                            color='#f50'
                                            onPress={() => console.log('hello')} /> */}

                                        <TouchableOpacity style={styles.iconContainer} onPress={() => this._getDirections(trail.latitude, trail.longitude, trail.name)} >
                                            {/* <Image style={styles.icon} source={require('../car2.png')} >

                                            </Image> */}
                                            <Icon
                                                name='directions'
                                                color='white'/>
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
        marginBottom: 15
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
    bottomContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    iconContainer: {
        alignSelf: 'flex-end',
        marginRight: 40,
        marginBottom: 10,
        marginTop: 0,
        // width: 50,
        // height: 30
    },
    icon: {
        // backgroundColor: '#22222245'
        // width: 50,
        // height: 50
    }
})