import React, {Component, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  StatusBar,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  View,ImageBackground,
} from 'react-native';
import { Root,Popup, Toast } from 'react-native-popup-confirm-toast'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
       
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground  
        
        blurRadius={16}
        source={require('../assert/background.png')} resizeMode="cover" style={styles.image}>
     
        <TouchableOpacity
          style={{
            marginLeft: '3%',
          }}
          onPress={() => alert('pressed')}>
         <Ionicons name="arrow-back-sharp" size={24} color={'white'} />
        </TouchableOpacity>
        <StatusBar barStyle="light-content" backgroundColor="#11062C" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            paddingBottom: '100%',
            paddingTop: '4%',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              marginBottom: '2%',
              height: '36%',
            }}>
            <Image
              style={{marginTop:'90%',
                 width: '83%', height: '60%',
                }}
              source={require('../assert/home.png')}
            />
            <Text
              style={{
                marginTop:'4%',marginBottom:'34%',
                fontSize: 26,
                color: 'white',
                fontWeight: 'bold',
              }}>
              B8ak
            </Text>
          </View>
           
          <Text
            style={{
              marginTop: '8%',
              fontSize: 13,
              color: 'white',
            }}>
             Services at your fingertips
          </Text>
          <Text
            style={{
              marginTop: '15%',
              fontSize: 13.5,
              color: 'white',
            }}>
              Start with providing your mobile number
          </Text>
          <TextInput
              style={{marginTop:10,
                width: '64%',
                height: '6%',
                borderColor: 'white',
               backgroundColor:'white',
                borderRadius:1,
              
              }}
              textAlign= 'center'
              keyboardType='numeric'
              placeholder="Mobile Number"
              onChangeText={text => this.setState({text})}
          
            />
<TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            this.props.navigation.navigate('HomeStack')
          }}>
          <Text style={{color:'black',fontSize:12}}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
              
          
              style={[styles.loginBtn,
          
                {marginTop: 10},]}
          onPress={() => {
            
          }}>
          <Text style={{color:'black',fontSize:12}}>Skip for now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginBtn,
          
            {
              marginTop:10,
              
              backgroundColor: 'white'},]}
          onPress={() => {
             
          }}>
          <Text style={{color:'black',fontSize:12}}>Register as service provider</Text>
        </TouchableOpacity>
        <Text
            style={{
              marginTop: '4%',
              fontSize: 11,
              color: 'white',
            }}>
             By creating and Account,you're are agreeing to our 
          </Text>
          <Text style={styles.TextStyle}>terms of service</Text>
 
        </ScrollView>
        </ImageBackground>
         
        
           
        
    
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  TextStyle: {
    color: 'white',
    textAlign: 'center',
  marginTop:3,
  fontSize:11,
    textDecorationLine: 'underline',
},
  loginText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  container: {
    flex: 1,
    backgroundColor: '#11062C',
  },
  loginBtn: {  
    width: '64%',
    borderRadius: 3,
    height: '6%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  }, textBtn: {  
    width: '64%',
    borderRadius: 2,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  image: {borderRadius: 13, width: '90%', height: '99.8%'},
  input: {
    backgroundColor: 'white',
    width: '74%',
    height: '9%',
    borderColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
  }, image: {
    flex: 1,
    justifyContent: "center"
  },
});
