import React, {Component, useState, useEffect} from 'react';
import {
  TouchableOpacity,TouchableWithoutFeedback,
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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { height, width } from 'dom-helpers';
export default class OrderSummary extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showTheThing:true,
       inp:'',
       comment:'',
         
    };
  }

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
            paddingBottom:'150%',
            alignItems: 'center', 
          }}>
            <Text
              style={{marginTop:'5%' ,
                fontSize: 18,fontWeight:'bold',
                color: 'black',
              }}>
        Order Summary
            </Text>
             
            
           
            
            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '15%',paddingHorizontal:'4%',
            }}>
               <View style={{ justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14,fontWeight:'bold',
                color: 'black',
              }}>
Work Location
            </Text>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<Text
              style={{ marginTop:'5%',
              fontSize: 13, 
                 
              }}>
Unnamed Road,Al Khobar 34421,
            </Text>
            <Text
              style={{ marginTop:'1%',
              fontSize: 13, 
               
              }}>
Saudia Arabia
            </Text>
            <View style={{width:'33%',height:'12%',alignItems:'center',borderRadius:5,backgroundColor:'orange',
            marginTop:'2%',flexDirection:'row',}}>
            <Ionicons name="location" size={15} color={'black'} />
            <Text
              style={{ 
               marginLeft:'1%',
                fontSize: 12, fontWeight:'bold',
                color: 'black',
              }}>
Current Location
            </Text>
            
            </View>
            <TextInput
          value={this.state.inp}
          style={{marginTop:'4%',width:'80%',height:'20%',borderColor:'pink',borderRadius:2,borderWidth:2}}
          onChangeText={inp => this.setState({inp})}
          placeholder="Building or apartment #"
          placeholderTextColor='grey'
        />
 </View>
 
 </View>
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '7%',paddingHorizontal:'3%',
            }}>
               <View style={{ justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14,fontWeight:'bold',
                color: 'black',
              }}>
Pyment methods
            </Text>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View style={{marginTop:'2%',flexDirection:'row',}}>
<MaterialCommunityIcons name="cash" size={25} color={'black'} />
            <Text
              style={{ marginTop:'1%',
                fontSize: 14, 
                color: 'black',
              }}>
              Cash
            </Text>
        
           
            <Image
              style={{ 
                tintColor:'orange',
              marginLeft:'74%',
                }}
              source={require('../assert/approve.png')}
            />
            </View>



</View> 

</View>
            

            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '10%',paddingHorizontal:'3%',
            }}>
               <View style={{marginTop:'2%',flexDirection: 'row',}}>
               <MaterialCommunityIcons name="clock-time-five-outline" size={30} color={'orange'} />
               <Text
              style={{ marginTop:'2%',paddingHorizontal:'2%',
              fontSize: 14, 
                color: 'grey',
              }}>
Expected Visit Time
            </Text>

            </View>

            <Text
              style={{ paddingHorizontal:'10%',
              fontSize: 13,fontWeight:'bold',
                color: 'black',
              }}>
Saturday,September 26th
            </Text>
            <Text
              style={{ paddingHorizontal:'10%',
              fontSize: 13,fontWeight:'bold',
                color: 'black',
              }}>
from 11.30 AM to 12.30 PM
            </Text>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
            <View style={{marginTop:'2%',flexDirection: 'row',}}>
               <SimpleLineIcons name="wrench" size={28} color={'orange'} />
               <Text
              style={{ paddingHorizontal:'2%',
              fontSize: 14, 
                color: 'grey',
              }}>
Service Provider
            </Text>
         
            </View>
            <Text
              style={{ paddingHorizontal:'10%',
              fontSize: 13,fontWeight:'bold',
                color: 'black',marginTop:'-2%',
              }}>
Jamal Alonazi
            </Text>
          </View>
          
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '31%',paddingHorizontal:'3%',
            }}>
               <View style={{justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14,fontWeight:'bold',
                color: 'grey',
              }}>
Initial Invoice
            </Text>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<Text
              style={{  marginTop:'2%',
              fontSize: 13,fontWeight:'bold',
                color: 'black', 
              }}>
Washing Machine and Dryers
            </Text>
            <Text
              style={{  marginTop:'2%',
              fontSize: 12, 
                color: 'grey',
              }}>
Installation and repair of washing machines and dryers
            </Text>
           
 
            </View>
            <View style={{marginTop:'2%',flexDirection: 'row',}}>
            <Text
              style={{  
              fontSize: 12, 
                color: 'grey',
              }}>
1x Installation of washing machine or 
            </Text>
               <Text
              style={{ marginLeft:'3%', 
              fontSize: 12, 
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
         
            </View>
            <Text
              style={{  
              fontSize: 12, 
                color: 'grey',
              }}>
dryer
            </Text>
            <View style={{marginTop:'2%',flexDirection: 'row',}}>
            <Text
              style={{  
              fontSize: 12, 
                color: 'grey',
              }}>
1x repair manual washing machine
            </Text>
               <Text
              style={{ marginLeft:'7%', 
              fontSize: 12, 
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
         
            </View>
            <View style={{marginTop:'2%',flexDirection: 'row',}}>
            <Text
              style={{  
              fontSize: 12, 
                color: 'grey',
              }}>
1x Repair automatic washing machine  
            </Text>
               <Text
              style={{ marginLeft:'2%', 
              fontSize: 12, 
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
         
            </View>
            <Text
              style={{  marginLeft:'2%', 
              fontSize: 12, 
                color: 'grey',
              }}>
 or dryer
            </Text>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View style={{marginTop:'2%',flexDirection: 'row',justifyContent:'space-between'}}>
            <Text
              style={{  
              fontSize: 12, 
                color: 'grey',
              }}>
Total Service Charge
            </Text>
               <Text
              style={{  
              fontSize: 12, 
                color: 'black',
              }}>
0 SAR
            </Text>
         
            </View>
            <Text
              style={{  textAlign:'right',
              fontSize: 12, 
                color: 'black',
              }}>
+ Other prices upon visit
            </Text>
            
            <View style={{marginTop:'2%',flexDirection: 'row',justifyContent:'space-between'}}>
            <Text
              style={{  
              fontSize: 12, 
                color: 'grey',
              }}>
Provider minimum charge
            </Text>
               <Text
              style={{  
              fontSize: 12, 
                color: 'black',
              }}>
50 SAR
            </Text>
         
            </View>



            <View
  style={{alignItems:'center', borderColor:'orange',borderWidth:2,marginLeft:'6%',
  justifyContent:'center',width:'90%',height:'15%',backgroundColor:'white',marginTop:'3%'}}
                >
                 <Text
                 style={{ 
                 
                   fontSize: 13, 
                   color: 'black',
                 }}>
        Provider minimum charge is the minimumamount due to be paid during the visit which get 
        counted only if the total services selected have not reached the provider minimum charge
                 </Text>
              </View>





            
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
            <View style={{marginTop:'2%',flexDirection: 'row',justifyContent:'space-between'}}>
            <Text
              style={{  
              fontSize: 12, 
                color: 'grey',fontWeight:'bold',
              }}>
Total 
            </Text>
               <Text
              style={{  
              fontSize: 12, 
                color: 'black',fontWeight:'bold',
              }}>
50 SAR
            </Text>
         
            </View>
            <Text
              style={{  textAlign:'right',
              fontSize: 12, fontWeight:'bold',
                color: 'black',
              }}>
+ Other prices upon visit
            </Text>
            <Text
              style={{   
              fontSize: 12, 
                color: 'black',
              }}>
VAT is not included
            </Text>
          </View>
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '11%',paddingHorizontal:'3%',
            }}>
               <View style={{justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14, 
                color: 'black',
              }}>
Any additional comment
            </Text>
           
            <View style={{alignItems:'center',justifyContent:'center',}}>
                  <TextInput
          value={this.state.comment}
          style={{width:'100%',height:'75%',borderColor:'pink',borderRadius:3,borderWidth:2}}
          onChangeText={comment => this.setState({comment})}
          placeholder='[optional text input]'
          placeholderTextColor='grey'
        />
            </View>            
            </View>
          </View>
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '13%',paddingHorizontal:'3%',
            }}>
               <View style={{justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14, 
                color: 'black',
              }}>
Washing machines and Dryers - Not included in pricing 
            </Text>
           
 

            
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
            </View>
            <View style={{marginTop:'2%',flexDirection: 'row',}}>
               <MaterialCommunityIcons name="cube-outline" size={28} color={'grey'} />
               <Text
              style={{ paddingHorizontal:'2%',
              fontSize: 15, fontWeight:'bold',
                color: 'black',
              }}>
Spare parts
            </Text>
         
            </View>
            <Text
              style={{ paddingHorizontal:'10%',marginTop:'-1%',
              fontSize: 12, fontWeight:'bold',
                color: 'grey',
              }}>
The price only includes Labour work,no spare parts fees
            </Text>

            <View style={{marginTop:'2%',flexDirection: 'row',}}>
                   
            <Image
              style={{ 
                tintColor:'grey',
            
                }}
              source={require('../assert/infinity.png')}
            />
               <Text
              style={{ paddingHorizontal:'2%',
              fontSize: 15, fontWeight:'bold',
                color: 'black',
              }}>
Non-Standard Work
            </Text>
         
            </View>
            <Text
              style={{ paddingHorizontal:'10%',marginTop:'-1%',
              fontSize: 12, fontWeight:'bold',
                color: 'grey',
              }}>
The price does not include non-standard work,such as demolition,scaffolding for high ceilings (additional charges apply)
            </Text>
           
          </View>
 
          
       
           


  
          <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              
              height: '36%',paddingHorizontal:'3%',
            }}>
          <Text
              style={{ paddingHorizontal:'2%',
              fontSize: 15, fontWeight:'bold',
                color: 'grey',
              }}>
Notes
            </Text>
                  
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View style={{marginTop:'2%',flexDirection: 'row',}}>
<MaterialCommunityIcons name="star-circle-outline" size={28} color={'orange'} />
               <Text
              style={{ paddingHorizontal:'2%',
              fontSize: 12, fontWeight:'bold',
                color: 'grey',
              }}>
Do not forget to rate service provider after work,as any service provider with rating below
3.3/5 gets removed from the app
            </Text>
         
            </View>

            <View style={{marginTop:'2%',flexDirection: 'row',}}>
            <MaterialCommunityIcons name="star-circle-outline" size={28} color={'orange'} />
               <Text
              style={{ paddingHorizontal:'2%',
              fontSize: 12, fontWeight:'bold',
                color: 'grey',
              }}>
Make sure the service provider issues an invoice via BBak app,Warranty validity only includes items 
in BBak invoice
            </Text>
         
            </View>

            <View style={{marginTop:'2%',flexDirection: 'row',}}>
               <MaterialCommunityIcons name="star-circle-outline" size={28} color={'orange'} />
               <Text
              style={{ paddingHorizontal:'2%',
              fontSize: 12, fontWeight:'bold',
                color: 'grey',
              }}>
In case of any shortcomings from the service provider,kindly contact us via Customer Happiness Center to help 
you
</Text>
            </View>
            </View>





        </ScrollView>
        <View style={styles.bottomView}>
         
            <TouchableWithoutFeedback  
             onPress={() => {
              this.props.navigation.navigate('MainPage')
            }}>
               <Text style={{ 
                fontSize: 18,
                color: 'black',
              }}>
                  
                
                Submit Order</Text>
            </TouchableWithoutFeedback>
            
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'red',
        borderRadius: 1,
        width: '44%',
        height: 45,borderColor:'pink',
       justifyContent:'center',
        alignItems: 'center',
      },
      bottomView: {
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        height: 70,
        backgroundColor:'orange',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
      },
  gryColor: {
    flexDirection:'row',
    width: '50%',
    height: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  orngColor: {
    flexDirection:'row',
    width: '50%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
    right:0, //Here is the trick
  },
  quot:{
  width:'33%', borderRadius:3,
  marginTop:'3%',alignItems:'center',
   justifyContent: 'center',
     backgroundColor:'pink',
     height: '11%',

 },
  button: {
    backgroundColor:'pink',
   width:'38%', height:'102%',
   borderTopEndRadius: 2, 
   borderBottomRightRadius:2,
 
    alignItems: 'center',
    marginLeft:'1%',
  },
  plusBtn: {
    backgroundColor:'#F8C8DC',
   width:'18%', height:'55%',
   borderRadius:3,
 justifyContent:'center',
    alignItems: 'center',
    marginLeft:'1%',
  },
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
