import React, { Component } from 'react'
import { AppRegistry, Text, View, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, AsyncStorage, ImageBackground } from 'react-native'

import { Actions } from 'react-native-router-flux'

export default class Signup extends Component {
    render() {
        return (
            // <SafeAreaView>
            <ImageBackground source={require('../morgan-sarkissian-724629-unsplash.jpg')} style={{width: '100%', height: '100%'}} >
                <View style={styles.content}>
                    {/* <Image source={require('../hiking2.jpg')} style={styles.backgroundImage} >
                    </Image> */}
                    <Text style={styles.logo}>Trailist</Text>

                    <View style={styles.inputContainer}>

                        <TextInput underlineColorAndroid='transparent' style={styles.input}
                            placeholder='first name'>
                        </TextInput>

                        <TextInput underlineColorAndroid='transparent' style={styles.input}
                            placeholder='last name'>
                        </TextInput>

                        <TextInput underlineColorAndroid='transparent' style={styles.input}
                            placeholder='email'>
                        </TextInput>
                        
                        <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                            placeholder='password'>
                        </TextInput>

                        <TouchableOpacity style={styles.buttonContainer} >
                            <Text style={styles.buttonText}>SIGN-UP</Text>                        
                        </TouchableOpacity >

                        <View style={styles.redirectLoginLinkContainer}>
                            <Text style={styles.questionText}>
                                Already have an account?  
                            </Text>

                            <TouchableOpacity onPress={() => Actions.login()} style={styles.loginContainer}> 
                                    <Text  style={styles.loginText} >Login</Text>
                            </TouchableOpacity >
                        </View>

                    </View>
                        
                        
                    
                </View>
            </ImageBackground>
            // {/* </SafeAreaView> */}
        )
    }
}


AppRegistry.registerComponent('Signup', () => Signup)
    
const styles = StyleSheet.create({

        content: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        logo: {
            color: 'white',
            fontSize: 40,
            fontStyle: 'italic',
            fontWeight: 'bold',
            textShadowColor: '#252525',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 15
        },
        inputContainer: {
            margin: 20,
            marginBottom: 0,
            padding: 20,
            paddingBottom: 10,
            alignSelf: 'stretch',
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.6)',
            backgroundColor: '#a991915e'
        },
        input: {
            fontSize: 16,
            height: 40,
            padding: 10,
            marginBottom: 10,
            backgroundColor: 'rgba(255,255,255,0.8)'
        },
        buttonContainer: {
            // alignSelf: 'stretch',
            margin: 20,
            padding: 20,
            backgroundColor: 'blue',
            borderWidth: 1,
            borderColor: '#fff',
            backgroundColor: '#2089dccf',
            width: 150,
            height: 55,
            alignSelf: 'center',
            borderRadius: 7
        },
        buttonText: {
            fontSize: 13,
            // fontWeight: 'bold',
            textAlign: 'center'
        },
        redirectLoginLinkContainer: {
            alignSelf: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        questionText: {
            color: 'white'
        },
        loginContainer: {
            // flexDirection: 'row',
            // justifyContent: 'flex-end'
        },
        loginText: {
            color: 'blue',
            fontSize: 15,
            fontWeight: 'bold'
        }
    })