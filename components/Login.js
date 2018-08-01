import React, { Component } from 'react'
import { AppRegistry, Text, View, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, AsyncStorage, ImageBackground } from 'react-native'
import Joi from 'react-native-joi'
import { Actions } from 'react-native-router-flux'

const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().trim().min(8).required(),
    // password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
})

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    validUser = () => {
        const result = Joi.validate(this.state, loginSchema)
        if (result.error === null) {
            return true
        }
        console.log(result.error)
        if(result.error.message.includes('email')) {
            alert('Invalid email adress')
        } else if (result.error.message.includes('password')) {
            alert('Password must be at least 8 characters long')
        } else {
            alert('Something went wrong! Try again later!')
        }
        return false
        // alert('Something went wrong! Try again later!')
    }

    handleLogin = () => {
        // console.log(this.state)
        if(this.validUser()) {

            fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => {
                // console.log(response)
                if (response.ok) {
                    // AsyncStorage.setItem('token', response.token)
                    return response.json()
                } 
                    return response.json().then(error => {
                        throw new Error(error.message)
                }) 
            })
            .then(user => {
                console.log(user)
            }) .catch(error => {
                alert(error.message)
            })
        }
    }

    render() {
        // console.log(this.state) 
        return (
            <ImageBackground source={require('../assets/hiking9.jpg')} style={{width: '100%', height: '100%'}} >
                <View style={styles.content}>

                    <Text style={styles.logo}>Trailist</Text>

                    <View style={styles.inputContainer}>

                        <TextInput 
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            autoCapitalize='none' 
                            underlineColorAndroid='transparent' 
                            style={styles.input}
                            placeholder='email'
                            enablesReturnKeyAutomatically 
                            keyboardType='email-address' 
                            returnKeyType='go' >
                        </TextInput>
                        
                        <TextInput
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password} 
                            secureTextEntry={true} 
                            underlineColorAndroid='transparent' 
                            style={styles.input}
                            placeholder='password'
                            enablesReturnKeyAutomatically  
                            returnKeyType='go' >
                        </TextInput>

                        <TouchableOpacity onPress={this.handleLogin} style={styles.buttonContainer} >
                            <Text style={styles.buttonText}>LOGIN</Text>                        
                        </TouchableOpacity >

                    </View>
                        
                        
                    
                </View>
            </ImageBackground>
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