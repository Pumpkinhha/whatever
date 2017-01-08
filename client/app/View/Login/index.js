/**
 * React Native App
 * https://github.com/Pumpkinhha/whatever.git
 * reference: https://auth0.com/blog/adding-authentication-to-react-native-using-jwt/
 * http://blog.csdn.net/u012915455/article/details/52594091
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

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
    };
      }
        _userLogin() {
            const { username, password } = this.state;
            let apiUrl = "http://quiet-harbor-89823.herokuapp.com/login?username=" + this.state.username + "&password=" + this.state.password
    //let apiUrl = "http://quiet-harbor-89823.herokuapp.com/login?username=hi&password=123"
                    fetch(apiUrl, {
                      method: 'GET',
                    }).then((response) => response.text())
                .then((responseText) => {
//                   alert(responseText);
                   this._checkStatus(responseText);
                }).done();

        }
    _checkStatus(responseText) {
        if (responseText == "null") {
            alert("Cannot find !")
            }
        else  alert("login success")
    }
     _userRegister() {
        const { username, password } = this.state;
        let apiUrl = "http://quiet-harbor-89823.herokuapp.com/register"
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })

    }
    _userForget() {

    }
    render() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
            <Text style={styles.title}>Welcome to Whatever</Text>
            </View>
            <View style={{marginTop:40}}>
                   <Text style={{color:"#4A90E2",textAlign:'left',marginTop:20}} >UserName</Text>
                   <TextInput onChangeText={(username) => this.setState({username})}/>
                   <Text style={{color:"#4A90E2",textAlign:'left',marginTop:20}} >Password</Text>
                   <TextInput onChangeText={(password) => this.setState({password})}/>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={this._userRegister.bind(this)} underlayColor='#99d9f4'>
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this._userLogin.bind(this)} underlayColor='#99d9f4'>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                    <TouchableOpacity style={styles.forgetButton} onPress={this._userForget.bind(this)} underlayColor='#ffffff'>
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