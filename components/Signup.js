import React, { Component } from 'react'
import { AppRegistry, Text, View, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, AsyncStorage, ImageBackground } from 'react-native'
import Joi from 'react-native-joi'
import { Icon } from 'react-native-elements'

import { Actions } from 'react-native-router-flux'

const signupSchema = Joi.object().keys({
    firstName: Joi.string().alphanum().min(2).max(30).required(),
    lastName: Joi.string().alphanum().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().trim().min(8).required(),
    confirmPassword: Joi.string().trim().min(8).required()
    // password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required()
})

export default class Signup extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    validUser = () => {
        if(this.state.password != this.state.confirmPassword) {
            alert('Passwords must match!')
            return false
        }
        const result = Joi.validate(this.state, signupSchema)
        if (result.error === null) {
            return true
        }
        if(result.error.message.includes('firstName')) {
            alert('Invalid first name!')
        } else if (result.error.message.includes('lastName')) {
            alert('Invalid last name!')
        } else if (result.error.message.includes('email')) {
            alert('Invalid email!')
        } else {
            alert('Password must be at least 8 characters')
        }
        return false
    }

    handleSignup = () => {
        if(this.validUser()) {
            const body = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            fetch('http://localhost:5000/auth/signup', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => {
                console.log(response)
                console.log(body)
                if (response.ok) {
                    return response.json()
                } 
                    return response.json().then(error => {
                        throw new Error(error.message)
                        // alert(error.message)
                }) 
            })
            .then(user => {
                console.log(user)
            }) .catch(error => {
                console.log(error.message)
                alert(error.message)
            })
        }
    }

    render() {
        // console.log(this.state)
        return (
            // <SafeAreaView>
            <ImageBackground source={require('../morgan-sarkissian-724629-unsplash.jpg')} style={{width: '100%', height: '100%'}} >
                <View style={styles.content}>
                    {/* <Image source={require('../hiking2.jpg')} style={styles.backgroundImage} >
                    </Image> */}
                    <Text style={styles.logo}>Trailist</Text>

                    {/* <Icon
                        name='ios-headset' 
                        reverse/> */}

                    <View style={styles.inputContainer}>

                        <TextInput 
                            onChangeText={(firstName) => this.setState({firstName})} 
                            value={this.state.firstName} 
                            underlineColorAndroid='transparent' 
                            style={styles.input}
                            placeholder='first name' 
                            enablesReturnKeyAutomatically 
                            maxLength={30} 
                            returnKeyType='go' >
                        </TextInput>

                        <TextInput 
                            onChangeText={(lastName) => this.setState({lastName})} 
                            value={this.state.lastName} 
                            underlineColorAndroid='transparent' 
                            style={styles.input}
                            placeholder='last name' 
                            enablesReturnKeyAutomatically 
                            maxLength={30} 
                            returnKeyType='go'>
                        </TextInput>

                        <TextInput 
                            onChangeText={(email) => this.setState({email})} 
                            value={this.state.email} 
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
                        
                        <TextInput 
                            onChangeText={(confirmPassword) => this.setState({confirmPassword})} 
                            value={this.state.confirmPassword} 
                            secureTextEntry={true} 
                            underlineColorAndroid='transparent' 
                            style={styles.input}
                            placeholder='confirm password' 
                            enablesReturnKeyAutomatically 
                            returnKeyType='go'>
                        </TextInput>

                        <TouchableOpacity onPress={this.handleSignup} style={styles.buttonContainer} >
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
            color: '#0366d6',
            fontSize: 15,
            fontWeight: 'bold'
        }
    })