// import React, {Component, useState, useEffect} from 'react';
// import {
//   TouchableOpacity,
//   ScrollView,
//   ToastAndroid,
//   StatusBar,
//   Button,
//   SafeAreaView,
//   Image,
//   TextInput,
//   StyleSheet,
//   Text,
//   Dimensions,
//   View,ImageBackground,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// export default class LchooseServiceogin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
       
//     };
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//             <ImageBackground  blurRadius={18}
//         source={require('../assert/background.png')} resizeMode="cover" style={styles.image}>
//         <TouchableOpacity
//           style={{
//             marginLeft: '3%',
//           }}
//           onPress={() => alert('pressed')}>
//          <Ionicons name="arrow-back-sharp" size={24} color={'white'} />
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//            alignSelf:'flex-end',
//      marginTop:'-5%',
//           }}
//           onPress={() => alert('pressed')}>
//          <EvilIcons name="cart" size={24} color={'white'} />
//         </TouchableOpacity>
//             <Image
//               style={{marginTop:'90%',
//                  width: '83%', height: '60%',
//                 }}
//               source={require('../assert/home.png')}
          
//             />
//             <Text
//               style={{
//                 marginTop:'4%',marginBottom:'34%',
//                 fontSize: 26,
//                 color: 'white',
//                 fontWeight: 'bold',
//               }}>
//             Choose the type of service
//             </Text>
           
//             </ImageBackground>
          
      

 
 
        
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   TextStyle: {
//     color: 'white',
//     textAlign: 'center',
//   marginTop:3,
//   fontSize:11,
//     textDecorationLine: 'underline',
// },
//   loginText: {
//     fontWeight: 'bold',
//     color: 'white',
//     fontSize: 17,
//   },
//   container: {
//     flex: 1, 
    
//   },
//   loginBtn: {  
//     width: '64%',
//     borderRadius: 3,
//     height: '6%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'orange',
//   }, textBtn: {  
//     width: '64%',
//     borderRadius: 2,
//     height: '10%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'orange',
//   },
//   image: {  width: '100%', height: '20%'},
//   input: {
//     backgroundColor: 'white',
//     width: '74%',
//     height: '9%',
//     borderColor: 'white',
//     marginBottom: 20,
//     alignItems: 'center',
//   }, image: {
//     flex: 1,
//     justifyContent: "center"
//   },
// });
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
  Dimensions,ImageBackground,
  View,
} from 'react-native';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import EvilIcons from 'react-native-vector-icons/EvilIcons';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class chooseService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
       
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '70%'
          }}>
         
          <ImageBackground  
        blurRadius={8}
        source={require('../assert/background.png')}  resizeMode='cover' style={{ 
            alignItems: 'center',
            justifyContent: 'center', 
            width: Dimensions.get('window').width,}}>
                
    <TouchableOpacity
          style={{
            alignSelf:'flex-start',marginLeft:'2%',
          }}
          onPress={() => alert('pressed')}>
         <Ionicons name="arrow-back-sharp" size={24} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
           alignSelf:'flex-end',marginTop:'-5%',marginRight:'3%',
          }}
          onPress={() => alert('pressed')}>
         <EvilIcons name="cart" size={24} color={'white'} />
        </TouchableOpacity>
              <Image
              style={{width:'20%',height:'25%', marginTop:'25%',
                }}
              source={require('../assert/home.png')}
            />
            <Text
              style={{  
                fontSize: 17,
                color: 'white',
              }}>
           Choose the type of service
            </Text>   
 </ImageBackground>

      <View
            style={{
                 
                 marginTop:'-4%'}}>
       <TouchableOpacity
           style={
            styles.btn}
              onPress={()=>{


this.props.navigation.navigate('AddMachine')
              }}>
        <View style={{ 
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <MaterialCommunityIcons name="fridge-outline" size={40} color={'grey'} />
          <Text style={{marginTop:'1%',
            marginStart:'-56%',
            fontSize: 16}}> Refrigerators</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'12%',marginTop:'-4%',
            fontSize: 11}}>Repairing Varoius refrigerators faults </Text>
          </TouchableOpacity>

          
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <MaterialCommunityIcons name="toaster-oven" size={40} color={'grey'} />
          <Text style={{
            marginStart:'-34%',
            fontSize: 16}}> Electric and Gas Ovens</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'12%',marginTop:'-4%',
            fontSize: 11}}> Repairing electric and Gas Ovens</Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <MaterialCommunityIcons name="washing-machine" size={40} color={'grey'} />
          <Text style={{
            marginStart:'-21%',
            fontSize: 16}}> Washing Machines and Dryers</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                 marginStart:'12%',marginTop:'-4%',
            fontSize: 11}}> Installation and repair of Washing Machines and Dryers </Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <MaterialCommunityIcons name="dishwasher" size={40} color={'grey'} />
          <Text style={{
            marginStart:'-52%',
            fontSize: 16}}> Dish Washers</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                   marginStart:'12%',marginTop:'-4%',
            fontSize: 11}}>Installation and repair of Dish washers </Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <AntDesign name="mobile1" size={40} color={'grey'} />
          <Text style={{
            marginStart:'-52%',
            fontSize: 16}}> Water Heaters</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                marginStart:'12%',marginTop:'-4%',
            fontSize: 11}}> Installation and repair of water heaters</Text>
          </TouchableOpacity>
          </View> 
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    btn:{
        width:Dimensions.get('window').width,
         justifyContent:'center',
          padding: 15,
          marginTop: '2%',
          flexDirection: 'column',
          marginBottom: '2%',
          backgroundColor: 'white',
      },
  container: {
      alignItems:'center',
    flex: 1, 
  },
  loginBtn: {
    borderRadius: 14,
    width: '99%',
    position: 'absolute',
    bottom: 0,
    marginTop: '3%',
    height: '36%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
     
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: '80%',
    backgroundColor: 'white',
   
  },
});

