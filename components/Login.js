import React, { Component } from 'react'
import { AppRegistry, Text, View, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, AsyncStorage, ImageBackground } from 'react-native'


export default class Login extends Component {
    render() {
        return (
            // <SafeAreaView>
            <ImageBackground source={require('../hiking2.jpg')} style={{width: '100%', height: '100%'}} >
                <View style={styles.content}>
                    {/* <Image source={require('../hiking2.jpg')} style={styles.backgroundImage} >
                    </Image> */}
                    <Text style={styles.logo}>Trailist</Text>

                    <View style={styles.inputContainer}>

                        <TextInput underlineColorAndroid='transparent' style={styles.input}
                            placeholder='email'>
                        </TextInput>
                        
                        <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input}
                            placeholder='password'>
                        </TextInput>

                        <TouchableOpacity style={styles.buttonContainer} >
                            <Text style={styles.buttonText}>LOGIN</Text>                        
                        </TouchableOpacity >

                    </View>
                        
                        
                    
                </View>
            </ImageBackground>
            // {/* </SafeAreaView> */}
        )
    }
}


AppRegistry.registerComponent('Login', () => Login)
    
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
        }
    })