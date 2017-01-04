/**
 * React Native App
 * https://github.com/Pumpkinhha/whatever.git
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity

} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
      }
    _userLogin() {
    }
     _userRegister() {
    }
    render() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
            <Text style={styles.title}>Welcome to Whatever</Text>
            </View>
            <View style={{marginTop:40}}>
                   <Text style={{color:"#4A90E2",textAlign:'left',marginTop:20}} >UserName</Text>
                   <TextInput name='Input username' onChangeText={(text) => {
                       this.username = text;
                   }}/>
                   <Text style={{color:"#4A90E2",textAlign:'left',marginTop:20}} >Password</Text>
                   <TextInput name='Input password' onChangeText={(text) => {
                       this.password = text;
                    }}/>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={this._userRegister} underlayColor='#99d9f4'>
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this._userLogin} underlayColor='#99d9f4'>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                    <TouchableOpacity style={styles.forgetButton} onPress={this._userForget} underlayColor='#ffffff'>
                  <Text style={styles.forgetButtonText}>Forget your password</Text>
                </TouchableOpacity>
            </View>
        </View>

        );
    }

}
const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      marginTop: 30,
      padding: 20
    },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    forgetButtonText: {
      fontSize: 18,
      color: '#48BBEC',
      alignSelf: 'center'
    },
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    forgetButton: {
      height: 36,
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
});