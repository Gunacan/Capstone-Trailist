import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Slider, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Button, Header } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple'
import { Actions } from 'react-native-router-flux'

// const levels = ['Easy', 'Easy/Intermediate', 'Intermediate', 'Intermediate/Difficult', 'Difficult', 'Extremely Difficult' ]
const levels = [ 'Easy', 'Moderate', 'Challenging', 'Difficult', 'Hard', 'Extreme' ]

const renderLabel = (label, style) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 15 }}>
            {/* <Image style={{ width: 42, height: 42 }} source={{ uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S' }} /> */}
            {/* <View style={{ marginLeft: 10 }}> */}
                <Text style={style}>{label}</Text>
            {/* </View> */}
        </View>
    )
}


export default class Search extends Component {   
    
    constructor(){
        super();
        this.state ={
            distanceValue : 0,
            lengthValue: 0,
            selectedLevels: []
        }
    }

    convertLevels = () => {
        return this.state.selectedLevels.map(level => {
            // console.log('lvl', level);
            
            return level.label
                // .replace('Easy', 'green' )
                // .replace('Easy/Intermediate', 'greenBlue')
                // .replace('Intermediate', 'blue' )
                // .replace('Intermediate/Difficult', 'blueBlack')
                // .replace('Difficult', 'black' )
                // .replace('Extremely Difficult', 'blackBlack')
            // return level.label
                .replace('Easy', 'green' )
                .replace('Moderate', 'greenBlue')
                .replace('Challenging', 'blue' )
                .replace('Moderate', 'blueBlack')
                .replace('Hard', 'black' )
                .replace('Extreme', 'blackBlack')
        })
    }

    onSelectionsChange = (selectedLevels) => {
        this.setState({ selectedLevels })
    }

    searchAndShowList() {
        this.props.doSearch({
            driveDistance: this.state.distanceValue, 
            length: this.state.lengthValue,
            levels: this.convertLevels()
        })
        .then(data => {

            Actions.list()
        })

    }
    render() {
        // console.log(this.state.selectedLevels)

        return (
            <View>
                
                <View style={styles.MainContainer} >
                    
                    <View style={styles.itemContainer}>
                        <Text>How far would you like to drive?</Text>
                        <Slider
                            step = { 1 }
                            minimumValue = { 0 }
                            maximumValue = { 100 }
                            minimumTrackTintColor = "#009688"
                            onValueChange={(ChangedValue) => this.setState({ distanceValue: ChangedValue })}
                            style = {{ width: '100%' }} 
                        />
                        <Text style = {{fontSize: 15}}>{ this.state.distanceValue } miles</Text>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text>How many miles would you like to hike?</Text>
                        <Slider
                            step = { 1 }
                            minimumValue = { 0 }
                            maximumValue = { 30 }
                            minimumTrackTintColor = "#009688"
                            onValueChange={(ChangedValue) => this.setState({ lengthValue: ChangedValue })}
                            style = {{ width: '100%' }} 
                        />
                        <Text style = {{fontSize: 15}}>{ this.state.lengthValue } miles</Text>
                    </View>

                    <ScrollView>
                        <SelectMultiple
                            style={{ height: 200 }}
                            items={levels}
                            renderLabel={renderLabel}
                            selectedItems={this.state.selectedLevels}
                            onSelectionsChange={this.onSelectionsChange} />
                    </ScrollView>

                    <TouchableOpacity onPress={() => this.searchAndShowList()} style={styles.buttonContainer} >
                            <Text style={styles.buttonText}>Search</Text>                        
                    </TouchableOpacity >

                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    itemContainer : {
        alignItems: 'center',
        margin: 20,
    },
    buttonContainer: {
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
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('Search', () => Search);