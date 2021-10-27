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
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { width } from 'dom-helpers';
import {RadioButton} from 'react-native-paper';
export default class MainPage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showTheThing:true,
        colorId: 0,
        starCount: 2.5,
        val: '1',
         
       
    };
  }
  onPress = (id) => {
    this.setState({colorId: id});
  };
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
   

    return (
      <SafeAreaView style={styles.container}>
   <View
            style={{
              backgroundColor:'orange',
              height: '5%',
            }}>
        
         
        <StatusBar barStyle="light-content" backgroundColor="orange" />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            paddingBottom:'47%',
            alignItems: 'center',
          }}>
             
            <Image
              style={{marginTop:'15%',
                 width: '23%', height: 89,
                }}
              source={require('../assert/jugg.png')}
            />
    
    <View
  style={{marginTop:'5%',width:'74%',
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
            <View style={{marginTop:'11%',alignItems:'center',flexDirection:'row'}}>
            
            </View>

            <View style={{ flexDirection: "row", alignItems: "center",}}>
      
        <Image
              style={{
                 width: '22%', height: 118,
                }}
              source={require('../assert/start.png')}
            />

       


        <View style={{ marginLeft: 20 }}>
       

            <Text
              style={{ 
                fontSize: 14,fontWeight:'bold',
              }}>
        Jamal Alonazi
            </Text>
            <Text
              style={{ 
                fontSize: 14, 
                color: 'black',
              }}>
 Expected Visit Time : Saturday
            </Text>
            
            
            <Text
              style={{
                fontSize: 14, 
                color: 'black',
              }}>
September 26th
            </Text>
            <Text
              style={{ 
                fontSize: 14, 
                color: 'black',
              }}>
      from 11.30 am to 12.30 pm
            </Text>
        </View>
        
      </View>
      <TouchableOpacity style={{
          backgroundColor:'#FF1493',
          alignItems:'center',justifyContent:'center',
      width:'40%',height:'10%',
      borderRadius:5,flexDirection:'row'}}
             onPress={() => {
             alert('sevices')
            }}>
                  <MaterialCommunityIcons name="delete" size={20} color={'white'} />
              <Text style={{ color: 'white'}}>Cancel</Text>
            </TouchableOpacity>




   


        
            

        </ScrollView>
        <View style={styles.bottomView}>
        <TouchableOpacity style={styles.gryColor}
             onPress={() => {
             alert('sevices')
            }}>
              <Text style={{ color: 'black'}}>Main Page</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.orngColor}
             onPress={() => {

                this.props.navigation.navigate('OrderSummary')
            }}>
              <Text style={{ color: 'white'}}>Order History</Text>
            </TouchableOpacity>
             
            
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    bottomView: {
        flexDirection:'row',
        width: '100%',
        height: 50,
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
      },
      gryColor: {
        flexDirection:'row',
        width: '50%',
        height: 55,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
      },
      orngColor: {
        flexDirection:'row',
        width: '50%',
        height: 55,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0,
        right:0, //Here is the trick
      },
 
  container: {
    flex: 1,
    
  },
 
   
});
