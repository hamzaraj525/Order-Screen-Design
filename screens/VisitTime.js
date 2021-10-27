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
  View,ImageBackground, TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { width } from 'dom-helpers';
export default class VisitTime extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showTheThing:true,
        colorId: 0,
         
       
    };
  }
  onPress = (id) => {
    this.setState({colorId: id});
  };
  render() {
   

    return (
      <SafeAreaView style={styles.container}>
   <View
            style={{
              backgroundColor:'orange',
              height: '5%',
            }}>
        <TouchableOpacity
          style={{
            marginTop:'1%',
            marginLeft: '3%',
          }}
          onPress={() => alert('pressed')}>
         <Ionicons name="arrow-back-sharp" size={24} color={'black'} />
        </TouchableOpacity>
         
        <StatusBar barStyle="light-content" backgroundColor="orange" />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            paddingBottom:'60%',
            alignItems: 'center',
          }}>
            <Text
              style={{marginTop:'5%' ,
                fontSize: 18,fontWeight:'bold',
                color: 'black',
              }}>
         Select Preferred Visit Time
            </Text>
            <Text
              style={{marginTop:'2%' ,paddingHorizontal:'5%',
                fontSize: 14,
                color: 'black',
              }}>
          Redirected to nearest available day in the system
            </Text>
            
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
            disabled={true}
                color={this.state.btnColor}
                style={this.state.colorId === 1 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(1);
                }}>
                 <Text >05:00 am - 06:00 am</Text>
              </TouchableOpacity>
              <TouchableOpacity
               disabled={true}
                color={this.state.btnColor}
                style={this.state.colorId === 2 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(2);
                }}>
                 <Text >05:30 am - 06:30 am</Text>
              </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
             disabled={true}
                color={this.state.btnColor}
                style={this.state.colorId === 3 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(3);
                }}>
                 <Text >06:00 am - 07:00 am</Text>
              </TouchableOpacity>
              <TouchableOpacity
               disabled={true}
                color={this.state.btnColor}
                style={this.state.colorId === 4 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(4);
                }}>
                 <Text >06:30 am - 07:30 am</Text>
              </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
             disabled={true}
                color={this.state.btnColor}
                style={this.state.colorId === 5 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(5);
                }}>
                 <Text >07:00 am - 08:00 am</Text>
              </TouchableOpacity>
              <TouchableOpacity
               disabled={true}
                color={this.state.btnColor}
                style={this.state.colorId === 6 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(6);
                }}>
                 <Text >07:30 am - 08:30 am</Text>
              </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
             disabled={true}
                color={this.state.btnColor}
                style={this.state.colorId === 7 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(7);
                }}>
                 <Text >08:00 am - 09:00 am</Text>
              </TouchableOpacity>
              <TouchableOpacity
               disabled={true}
                color={this.state.btnColor}
                style={this.state.colorId === 8 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(8);
                }}>
                 <Text >08:30 am - 09:30 am</Text>
              </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
             disabled={true}
                color={this.state.btnColor}
                style={this.state.colorId === 9 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(9);
                }}>
                 <Text >09:00 am - 10:00 am</Text>
              </TouchableOpacity>
              <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 10 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(10);
                }}>
                 <Text >09:30 am - 10:30 am</Text>
              </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 11 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(11);
                }}>
                 <Text >10:00 am - 11:00 am</Text>
              </TouchableOpacity>
              <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 12 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(12);
                }}>
                 <Text >10:30 am - 11:30 am</Text>
              </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 13 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(13);
                }}>
                 <Text >11:00 am - 12:00 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 14 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(14);
                }}>
                 <Text >11:30 am - 12:30 pm</Text>
              </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 15 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(15);
                }}>
                 <Text >12:00 pm - 01:00 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 16 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(16);
                }}>
                 <Text >12:30 pm - 01:30 pm</Text>
              </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 17 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(17);
                }}>
                 <Text >1:00 pm - 02:00 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 18? styles.red : styles.button}
                onPress={() => {
                    this.onPress(18);
                }}>
                 <Text >01:30 pm - 02:30 pm</Text>
              </TouchableOpacity>
              </View> 
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 19 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(19);
                }}>
                 <Text >02:00 pm - 03:00 pm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                color={this.state.btnColor}
                style={this.state.colorId === 20 ? styles.red : styles.button}
                onPress={() => {
                    this.onPress(20);
                }}>
                 <Text >02:30 pm - 03:30 pm</Text>
              </TouchableOpacity>
              </View> 


        </ScrollView>
        <View style={styles.bottomView}>
         
            <TouchableWithoutFeedback  
             onPress={() => {
              this.props.navigation.navigate('ServiceProvider')
            }}>
               <Text style={{ 
                fontSize: 18,
                color: 'black',
              }}>
                  
                
                Continue Ordering</Text>
            </TouchableWithoutFeedback>
            
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bottomView: {
    alignItems:'center',
    justifyContent:'center',
    width: '100%',
    height: 70,
    backgroundColor:'orange',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
 
  button: {
    height: 38,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 4,
    backgroundColor: 'white',
    margin: 5,
    marginBottom: 20,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    height: 38,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: 'orange',
    margin: 5,
    marginBottom: 20,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    
  },
 
   
});
