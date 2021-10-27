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
import Entypo from 'react-native-vector-icons/Entypo';
import { width } from 'dom-helpers';
export default class AddMachine extends Component {
  constructor(props) {
    super(props);
      this.state = {
        showTheThing:true,
        showTheThing2:true,
        showTheThing3:true,
        showTheThing4:true,
        showTheThing5:true,
        showTheThing6:true,
        showTheThing7:true,
        count:1,
       
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
        <TouchableOpacity
          style={{
           alignSelf:'flex-end',marginTop:'-6.5%',marginRight:'7%',
          }}
          onPress={() => alert('pressed')}>
         <Entypo name="shopping-cart" size={24} color={'black'} />
        </TouchableOpacity>
        <StatusBar barStyle="light-content" backgroundColor="orange" />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            paddingBottom:'111%',
            alignItems: 'center',
          }}>
            <Text
              style={{marginTop:'5%' ,
                fontSize: 18,fontWeight:'bold',
                color: 'black',
              }}>
             Washing Machines and Dryers
            </Text>
            <Text
              style={{marginTop:'2%' ,paddingHorizontal:'5%',
                fontSize: 14,
                color: 'grey',
              }}>
           Approximate prices are based on your selected location:
            </Text>
            <Text
              style={{paddingHorizontal:'5%',
                fontSize: 14,
                color: 'grey',
              }}>
Saudia Arabia - Dammam
            </Text>
           
            
            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '13%',paddingHorizontal:'3%',
            }}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14,fontWeight:'bold',
                color: 'black',
              }}>
Installation of Washing Machine or Dryer
            </Text>
           
{this.state.showTheThing ?(

<View style={{ width: '20%',    marginTop:'5%',height: '70%',
            alignItems:'center',
             borderRadius: 4, 
             borderWidth: 1,
            flexDirection: 'row', 
            justifyContent: 'center',
            borderColor: 'orange',}}>
  <Text style={{
      marginLeft:'5%',marginRight:'19%',
    color: 'black'}}>
    ADD
    </Text>
            <TouchableOpacity style={styles.button}
             onPress={() => {
           this.setState({showTheThing:!this.state.showTheThing})
        
            }}>

              <Text style={{marginTop:'12%',color: 'grey'}}>+</Text>
            </TouchableOpacity>
            
          </View>

):(

 
<View style={{marginTop:'4%',marginLeft:'8%',flexDirection:'row'}}>

<TouchableOpacity style={[styles.plusBtn,{width:'18%'}]}
  onPress={() => {
    this.setState({showTheThing:!this.state.showTheThing})}}>
   <Text style={{marginTop:'5%',color: 'black'}}>-</Text>
 </TouchableOpacity>

 <Text style={{
   marginLeft:'2.5%',marginRight:'2.5%',
   color: 'black'}}>
     {this.state.count} </Text>

   
 <TouchableOpacity style={[styles.plusBtn,{width:'18%',backgroundColor:'orange'}]}
  onPress={() => {
 alert('g')
 }}>
   <Text style={{marginTop:'5%',color: 'black'}}>+</Text>
 </TouchableOpacity>

</View>
)}
            


          </View>
               
            <View
            style={
              styles.quot
        
            }>
           
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
            </View>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View
            style={{ width:'45%', borderRadius:3,
           marginTop:'3%',alignItems:'center',
            justifyContent: 'center',
              backgroundColor:'pink',
              height: '11%',
            }}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Price will be decided on the visit
            </Text>
            </View>
          </View>
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '13%',paddingHorizontal:'3%',
            }}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14,fontWeight:'bold',
                color: 'black',
              }}>
Repair manual washing Machine
            </Text>
           
{this.state.showTheThing2 ?(

<View style={{ width: '20%',    marginTop:'5%',height: '70%',
            alignItems:'center',
             borderRadius: 4, 
             borderWidth: 1,
            flexDirection: 'row', 
            justifyContent: 'center',
            borderColor: 'orange',}}>
  <Text style={{
      marginLeft:'5%',marginRight:'19%',
    color: 'black'}}>
    ADD
    </Text>
            <TouchableOpacity style={styles.button}
             onPress={() => {
           this.setState({showTheThing2:!this.state.showTheThing2})
        
            }}>

              <Text style={{marginTop:'12%',color: 'grey'}}>+</Text>
            </TouchableOpacity>
            
          </View>

):(

 
<View style={{marginTop:'4%',marginLeft:'23%',flexDirection:'row'}}>

<TouchableOpacity style={[styles.plusBtn,{width:'19%'}]}
  onPress={() => {
    this.setState({showTheThing2:!this.state.showTheThing2})}}>
   <Text style={{marginTop:'5%',color: 'black'}}>-</Text>
 </TouchableOpacity>

 <Text style={{
   marginLeft:'2.5%',marginRight:'2.5%',
   color: 'black'}}>
     {this.state.count} </Text>

   
 <TouchableOpacity style={[styles.plusBtn,{width:'19%',backgroundColor:'orange'}]}
  onPress={() => {
 alert('g')
 }}>
   <Text style={{marginTop:'5%',color: 'black'}}>+</Text>
 </TouchableOpacity>

</View>
)}
            


          </View>
               
            <View
            style={
              styles.quot
        
            }>
           
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
            </View>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View
            style={{ width:'45%', borderRadius:3,
           marginTop:'3%',alignItems:'center',
            justifyContent: 'center',
              backgroundColor:'pink',
              height: '11%',
            }}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Price will be decided on the visit
            </Text>
            </View>
          </View>
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '13%',paddingHorizontal:'3%',
            }}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14,fontWeight:'bold',
                color: 'black',
              }}>
Repair automatic Washing Machine 
            </Text>
           
{this.state.showTheThing3 ?(

<View style={{ width: '20%',    marginTop:'5%',height: '70%',
            alignItems:'center',
             borderRadius: 4, 
             borderWidth: 1,
            flexDirection: 'row', 
            justifyContent: 'center',
            borderColor: 'orange',}}>
  <Text style={{
      marginLeft:'5%',marginRight:'19%',
    color: 'black'}}>
    ADD
    </Text>
            <TouchableOpacity style={styles.button}
             onPress={() => {
           this.setState({showTheThing3:!this.state.showTheThing3})
        
            }}>

              <Text style={{marginTop:'12%',color: 'grey'}}>+</Text>
            </TouchableOpacity>
            
          </View>

):(

 
<View style={{marginTop:'4%',marginLeft:'18%',flexDirection:'row'}}>

<TouchableOpacity style={[styles.plusBtn,{width:'19%'}]}
  onPress={() => {
    this.setState({showTheThing3:!this.state.showTheThing3})}}>
   <Text style={{marginTop:'5%',color: 'black'}}>-</Text>
 </TouchableOpacity>

 <Text style={{
   marginLeft:'2.5%',marginRight:'2.5%',
   color: 'black'}}>
     {this.state.count} </Text>

   
 <TouchableOpacity style={[styles.plusBtn,{width:'19%',backgroundColor:'orange'}]}
  onPress={() => {
 alert('g')
 }}>
   <Text style={{marginTop:'5%',color: 'black'}}>+</Text>
 </TouchableOpacity>

</View>
)}
            


          </View>
               
            <View
            style={
              styles.quot
        
            }>
           
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
            </View>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View
            style={{ width:'45%', borderRadius:3,
           marginTop:'3%',alignItems:'center',
            justifyContent: 'center',
              backgroundColor:'pink',
              height: '11%',
            }}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Price will be decided on the visit
            </Text>
            </View>
          </View>
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '13%',paddingHorizontal:'3%',
            }}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14,fontWeight:'bold',
                color: 'black',
              }}>
Installation of  Dryer
            </Text>
           
{this.state.showTheThing4 ?(

<View style={{ width: '20%',    marginTop:'5%',height: '70%',
            alignItems:'center',
             borderRadius: 4, 
             borderWidth: 1,
            flexDirection: 'row', 
            justifyContent: 'center',
            borderColor: 'orange',}}>
  <Text style={{
      marginLeft:'5%',marginRight:'19%',
    color: 'black'}}>
    ADD
    </Text>
            <TouchableOpacity style={styles.button}
             onPress={() => {
           this.setState({showTheThing4:!this.state.showTheThing4})
        
            }}>

              <Text style={{marginTop:'12%',color: 'grey'}}>+</Text>
            </TouchableOpacity>
            
          </View>

):(

 
<View style={{marginTop:'4%',marginLeft:'44%',flexDirection:'row'}}>

<TouchableOpacity style={[styles.plusBtn,{width:'23%'}]}
  onPress={() => {
    this.setState({showTheThing4:!this.state.showTheThing4})}}>
   <Text style={{marginTop:'5%',color: 'black'}}>-</Text>
 </TouchableOpacity>

 <Text style={{
   marginLeft:'2.5%',marginRight:'2.5%',
   color: 'black'}}>
     {this.state.count} </Text>

   
 <TouchableOpacity style={[styles.plusBtn,{width:'23%',backgroundColor:'orange'}]}
  onPress={() => {
 alert('g')
 }}>
   <Text style={{marginTop:'5%',color: 'black'}}>+</Text>
 </TouchableOpacity>

</View>
)}
            


          </View>
               
            <View
            style={
              styles.quot
        
            }>
           
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
            </View>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View
            style={{ width:'45%', borderRadius:3,
           marginTop:'3%',alignItems:'center',
            justifyContent: 'center',
              backgroundColor:'pink',
              height: '11%',
            }}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Price will be decided on the visit
            </Text>
            </View>
          </View>
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '13%',paddingHorizontal:'3%',
            }}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14,fontWeight:'bold',
                color: 'black',
              }}>
Repair manual  Dryer
            </Text>
           
{this.state.showTheThing5 ?(

<View style={{ width: '20%',    marginTop:'5%',height: '70%',
            alignItems:'center',
             borderRadius: 4, 
             borderWidth: 1,
            flexDirection: 'row', 
            justifyContent: 'center',
            borderColor: 'orange',}}>
  <Text style={{
      marginLeft:'5%',marginRight:'19%',
    color: 'black'}}>
    ADD
    </Text>
            <TouchableOpacity style={styles.button}
             onPress={() => {
           this.setState({showTheThing5:!this.state.showTheThing5})
        
            }}>

              <Text style={{marginTop:'12%',color: 'grey'}}>+</Text>
            </TouchableOpacity>
            
          </View>

):(

 
<View style={{marginTop:'4%',marginLeft:'42%',flexDirection:'row'}}>

<TouchableOpacity style={[styles.plusBtn,{width:'23%'}]}
  onPress={() => {
    this.setState({showTheThing5:!this.state.showTheThing5})}}>
   <Text style={{marginTop:'5%',color: 'black'}}>-</Text>
 </TouchableOpacity>

 <Text style={{
   marginLeft:'2.5%',marginRight:'2.5%',
   color: 'black'}}>
     {this.state.count} </Text>

   
 <TouchableOpacity style={[styles.plusBtn,{width:'23%',backgroundColor:'orange'}]}
  onPress={() => {
 alert('g')
 }}>
   <Text style={{marginTop:'5%',color: 'black'}}>+</Text>
 </TouchableOpacity>

</View>
)}
            


          </View>
               
            <View
            style={
              styles.quot
        
            }>
           
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
            </View>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View
            style={{ width:'45%', borderRadius:3,
           marginTop:'3%',alignItems:'center',
            justifyContent: 'center',
              backgroundColor:'pink',
              height: '11%',
            }}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Price will be decided on the visit
            </Text>
            </View>
          </View>
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '13%',paddingHorizontal:'3%',
            }}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
              fontSize: 14,fontWeight:'bold',
                color: 'black',
              }}>
Repair automatic Dryer
            </Text>
           
{this.state.showTheThing6 ?(

<View style={{ width: '20%',    marginTop:'5%',height: '70%',
            alignItems:'center',
             borderRadius: 4, 
             borderWidth: 1,
            flexDirection: 'row', 
            justifyContent: 'center',
            borderColor: 'orange',}}>
  <Text style={{
      marginLeft:'5%',marginRight:'19%',
    color: 'black'}}>
    ADD
    </Text>
            <TouchableOpacity style={styles.button}
             onPress={() => {
           this.setState({showTheThing6:!this.state.showTheThing6})
        
            }}>

              <Text style={{marginTop:'12%',color: 'grey'}}>+</Text>
            </TouchableOpacity>
            
          </View>

):(

 
<View style={{marginTop:'4%',marginLeft:'39%',flexDirection:'row'}}>

<TouchableOpacity style={[styles.plusBtn,{width:'23%'}]}
  onPress={() => {
    this.setState({showTheThing6:!this.state.showTheThing6})}}>
   <Text style={{marginTop:'5%',color: 'black'}}>-</Text>
 </TouchableOpacity>

 <Text style={{
   marginLeft:'2.5%',marginRight:'2.5%',
   color: 'black'}}>
     {this.state.count} </Text>

   
 <TouchableOpacity style={[styles.plusBtn,{width:'23%',backgroundColor:'orange'}]}
  onPress={() => {
 alert('g')
 }}>
   <Text style={{marginTop:'5%',color: 'black'}}>+</Text>
 </TouchableOpacity>

</View>
)}
            


          </View>
               
            <View
            style={
              styles.quot
        
            }>
           
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
            </View>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View
            style={{ width:'45%', borderRadius:3,
           marginTop:'3%',alignItems:'center',
            justifyContent: 'center',
              backgroundColor:'pink',
              height: '11%',
            }}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Price will be decided on the visit
            </Text>
            </View>
          </View>
 
          
       
           




            
            <View
            style={{marginTop:'8%',
              width:Dimensions.get('window').width,
              backgroundColor:'white',
              height: '13%',paddingHorizontal:'3%',
            }}>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text
              style={{ marginTop:'5%',
                fontSize: 14,fontWeight:'bold',
                color: 'black',
              }}>
Repair automatic  Washing Machine or dryer
            </Text>
           
{this.state.showTheThing7 ?(

<View style={{ width: '20%',    marginTop:'5%',height: '70%',
            alignItems:'center',
             borderRadius: 4, 
             borderWidth: 1,
            flexDirection: 'row', 
            justifyContent: 'center',
            borderColor: 'orange',}}>
  <Text style={{
      marginLeft:'5%',marginRight:'19%',
    color: 'black'}}>
    ADD
    </Text>
            <TouchableOpacity style={styles.button}
             onPress={() => {
           this.setState({showTheThing7:!this.state.showTheThing7})
        
            }}>

              <Text style={{marginTop:'12%',color: 'grey'}}>+</Text>
            </TouchableOpacity>
            
          </View>

):(

 
<View style={{marginTop:'4%',marginLeft:'3%',flexDirection:'row'}}>

<TouchableOpacity style={styles.plusBtn}
  onPress={() => {
    this.setState({showTheThing7:!this.state.showTheThing7})}}>
   <Text style={{marginTop:'5%',color: 'black'}}>-</Text>
 </TouchableOpacity>

 <Text style={{
   marginLeft:'2.5%',marginRight:'2.5%',
   color: 'black'}}>
     {this.state.count} </Text>

   
 <TouchableOpacity style={[styles.plusBtn,{backgroundColor:'orange'}]}
  onPress={() => {
 alert('g')
 }}>
   <Text style={{marginTop:'5%',color: 'black'}}>+</Text>
 </TouchableOpacity>

</View>
)}
            


          </View>
               
            <View
            style={
              styles.quot
        
            }>
           
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Quotation upon check-up
            </Text>
            </View>
            <View
  style={{
    marginTop:'3%', 
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
  }}
/>
<View
            style={{ width:'45%', borderRadius:3,
           marginTop:'3%',alignItems:'center',
            justifyContent: 'center',
              backgroundColor:'pink',
              height: '11%',
            }}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
Price will be decided on the visit
            </Text>
            </View>
          </View>
 
          
       
           







        </ScrollView>
        <View style={styles.bottomView}>
        <TouchableOpacity style={styles.gryColor}
             onPress={() => {
             alert('sevices')
            }}>
              <Text style={{ color: 'white'}}>Add Services</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.orngColor}
             onPress={() => {

              this.props.navigation.navigate('VisitTime')
            }}>
              <Text style={{ color: 'black'}}>Continue Order</Text>
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
