import React, { Component } from 'react'
import { AppRegistry, Text, View, TextInput, Switch, StyleSheet, ImageBackground } from 'react-native'

import { Button, Header } from 'react-native-elements';

import { Actions } from 'react-native-router-flux'


export default class Home extends Component {
    
    render() {
        return (
            <ImageBackground source={require('../hiking2.jpg')} style={{width: '100%', height: '100%'}}>
                {/* <Header
                    placement="left"
                    backgroundColor='#0072ccd1'
                    
                    centerComponent={{ text: 'Trailist', style: { color: '#fff' } }}
                    
                /> */}
                <View style={styles.homeView}>
                    <Button
                        onPress={() => Actions.search()}
                        title='Start searching'
                        buttonStyle={{
                            backgroundColor: "#2089dcd6",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
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
        justifyContent: 'center'
    }
})

