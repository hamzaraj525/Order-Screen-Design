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
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default class WashingMachines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
       
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
 
        <TouchableOpacity
          style={{
            marginTop:'3%',
            marginLeft: '3%',
          }}
          onPress={() => alert('pressed')}>
         <Ionicons name="arrow-back-sharp" size={24} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
           alignSelf:'flex-end',marginTop:'-5%',marginRight:'7%',
          }}
          onPress={() => alert('pressed')}>
         <EvilIcons name="cart" size={24} color={'white'} />
        </TouchableOpacity>
        <StatusBar barStyle="light-content" backgroundColor="#11062C" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            paddingBottom: '100%',
          
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
                 width: '30%', height: '30%',
                }}
              source={require('../assert/home.png')}
            />
            <Text
              style={{
                marginTop:'4%',marginBottom:'34%',
                fontSize: 15,
                color: 'white',
              
              }}>
             Washing Machines and Dryers
            </Text>
          </View>
        
          
        </ScrollView>
       
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
