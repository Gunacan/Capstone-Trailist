import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { YellowBox } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './components/Home'
import Search from './components/Search'
import Login from './components/Login'
import Signup from './components/Signup'
import List from './components/List'
import Geolocation from './components/Geolocation'
import Profile from './components/Profile'

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black', fontSize: 500 }} >{title}</Text>
  )
}

export default class App extends React.Component {

constructor(props) {

  super(props);

    YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: Can only update a mounted or mounting component',
  ]);


  state = {
    trails: [],
    lat: null,
    lon: null,
    error: null,
  }
}

  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }


  doSearch = ({ driveDistance, length, levels }) => {
    return fetch(`https://www.hikingproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lon}&maxDistance=${driveDistance}&maxResults=50&sort=distance&key=200301500-54205c5d793bfaed11b51c122904d366`)  
    .then(response => response.json())
    .then(data => {

      const filteredTrails = data.trails.filter(trail => {
        return trail.length < length && levels.includes(trail.difficulty) 
      })
      
      this.setState({
        trails: filteredTrails
      })
      return filteredTrails
    })
  }
  
  render() {
    return (
      <Router>
        <Scene key='root'>

          <Scene 
            key='home'
            component={Home}
            title='Trailist'
            initial
          />

          <Scene 
            key='tabbar'
            tabs
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          >

              <Scene 
                key='signup'
                component={Signup}
                title='Signup'
                // initial
                icon={TabIcon}
              />
              
              <Scene 
                key='search'
                component={() => <Search doSearch={this.doSearch} {...this.state} />}
                title='Search'
              />

          </Scene>

          <Scene 
            key='login'
            component={Login}
            title='Login'
            // initial
          />

          <Scene 
            key='list'
            component={() => <List {...this.state} />}
            title='Trails'
            // initial
          />

        </Scene>
      </Router>
      // <Geolocation/>
      // <Profile/>
    );
  }
}