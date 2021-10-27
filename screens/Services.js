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
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      close: false,
      refreshing: false,
    };
  }   
  componentDidMount() {

    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#11062C" />
        {this.state.isLoading ? (
          <View style={styles.container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{flex: 1}}
              contentContainerStyle={{padding: 11, paddingBottom: 40}}>
              <SkeletonPlaceholder>
              <View style={{ flexDirection: "row", alignItems: "center",marginTop:'150%' }}>
        <View style={{ width: 60, height: 55, borderRadius: 5 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 130, height: 15, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 240, height: 15, borderRadius: 4 }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center",marginTop:'3%' }}>
        <View style={{ width: 60, height: 55, borderRadius: 5 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 130, height: 15, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 240, height: 15, borderRadius: 4 }}
          />
        </View>
      </View>
              </SkeletonPlaceholder>
            </ScrollView>
          </View>
        ) : (   
              <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            paddingBottom: '30%',
            paddingTop: '4%',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              marginBottom: '2%',
              height: '10%',
            }}>
             <Image
                  style={{ marginTop:'55%',
                  width: '50%', height: '40%',
                }}
                source={require('../assert/home.png')}
              />
            <Text
              style={{
                marginTop:'10%',marginBottom:'11%',
                fontSize: 22,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Welcome to B8ak
            </Text>
          </View>
           
          <Text
            style={{
          
              fontSize: 15,
              color: 'white',
            }}>
           How can we help you?
          </Text>
         
         <TouchableOpacity  style={{marginTop:'3%',marginBottom:'11%',
          padding:12,
           width:'72%',height:'3.4%',  borderRadius: 32,
           flexDirection:'column'}}>
<View
          style={{flexDirection:'row',justifyContent:'space-evenly',
          
         }}
          >
             <Image
              style={{tintColor:'white',  
                 width: '11%', height: '155%',
                }}
              source={require('../assert/Icon_Location.png')}
            />
             <Text
            style={{
              fontSize: 17,
              color: 'red',
            }}>
    Location
          </Text>              
          <Ionicons name="chevron-forward-sharp" size={24} color={'white'} />
         
        </View>
                <Text
                style={{
               textAlign:'center',
                  fontSize: 18,
                  color: 'white',
                }}>
                AL Rawabi</Text>
              
           </TouchableOpacity>
       <View style={
              styles.img}>
 
          <Image
              style={{
                
                
               width:'100%',
    height: '100%',
              
              
              }}
   resizeMode='center'
              source={require('../assert/ss.png')}
            />
       </View>

       <TouchableOpacity
           style={
            styles.btn}
            onPress={() => {
              this.props.navigation.navigate('chooseService')
             }}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <AntDesign name="home" size={27} color={'blue'} />
          <Text style={{
            marginStart:'-52%',
            fontSize: 16}}> Special Offers</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Dont miss our amazing special offers here </Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-50%',
            fontSize: 16}}> Air Conditioning</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Various types of air Conditioning services </Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-60%',
            fontSize: 16}}> Electricity</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Various types of electricity services </Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-60%',
            fontSize: 16}}> Plumbing</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Various types of plumbing services </Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-22%',
            fontSize: 16}}> Wall Internal Water Leakages</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Detecting Internal leaks by special devices </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-30%',
            fontSize: 16}}> Bloackage and Sewerage</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}>  Bloackage and Sewerage clearance </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-13%',
            fontSize: 16}}> Carpentry and furniture installation</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Carpentry and wooden doors and door unlocking </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
         
         style={
          styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-65%',
            fontSize: 16}}> Cleaning</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'9%',
            fontSize: 11}}> General cleaning services inlude cleaning water tank and furniture </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-60%',
            fontSize: 16}}> Sterilization</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Sterilization of residential units,builing and facilities</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
           style={
          styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-58%',
            fontSize: 16}}> Pest Control</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Varoius types of pest control services </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-58%',
            fontSize: 16}}> Water Pump</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Repair and installation services</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
           
           style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-37%',
            fontSize: 16}}> Paints and Wallpapers</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Exterior and interior painting and wallpapers </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-52%',
            fontSize: 16}}> Water Heaters</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Installation and repair water heaters </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-48%',
            fontSize: 16}}> Home Appliances</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Repairing of refrigerators,water heaters and more</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
 style={
  styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-41%',
            fontSize: 16}}> Satellite and Receiver</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Programming and fixing of sattellite and receiver </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={
            styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-68%',
            fontSize: 16}}> Moving</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
                     marginStart:'10%',
            fontSize: 11}}> Moving the furniture inside and outside the city </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
          style={
          styles.btn}>
        <View style={{  
          justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
       
          <AntDesign name="home" size={27} color={'blue'} />

          <Text style={{
            marginStart:'-60%', fontSize: 16}}> Insulators</Text>
          <AntDesign name="doubleright" size={24} color={'grey'} />         
          </View>
          <Text style={{
          marginStart:'10%',fontSize: 11}}> installation of water and thermal nsulator </Text>
          </TouchableOpacity>
          
          
        </ScrollView>
        </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  img:{backgroundColor:'white',
      
  width:Dimensions.get('window').width,
  height: '10%',
  },
  btn:{
    width:Dimensions.get('window').width,
    height: '3%',
     justifyContent:'center',
      padding: 15,
      marginTop: '2%',
      flexDirection: 'column',
      marginBottom: '2%',
      backgroundColor: 'white',
  },
  loginBtn: {  
    width:Dimensions.get('window').width,
    borderRadius: 3,
    height: '16%',
    backgroundColor: 'orange',
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
  container: {padding:12,
    flex: 1,
     
  },
 
  textBtn: {  
    width:Dimensions.get('window').width,
     
    height: '20%',
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
