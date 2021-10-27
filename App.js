import React, {Component} from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  Text,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './screens/Login.js';
import Services from './screens/Services.js';
import AddMachine from './screens/AddMachine.js';
import chooseService from './screens/chooseService.js';
import WashingMachines from './screens/WashingMachines.js';
import ServiceProvider from './screens/ServiceProvider.js';
import VisitTime from './screens/VisitTime.js';
import Help from './screens/Help.js';
import More from './screens/More.js';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
     
    HomeStack = () => (
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height:'10%' },
        headerShown:false,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Services}
        options={{
          
          tabBarIcon: ({focused}) => (
            <View
              styles={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SimpleLineIcons name="home" size={25} color={'navy'} />
              {/* <Image
                styles={{
                  tintColor: focused ? 'red' : 'blue',
                  width: '11%',
                  height: '11%',
                }}
                source={require('./images/di.png')}
                resizeMode={'contain'}
              /> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              styles={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign
                name="shoppingcart"
                size={25}
                color={'navy'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              styles={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome5 name="headphones" size={25} color={'navy'} />
              
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              styles={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="more-vertical" size={25} color={'navy'} />
              {/* <Image
                styles={{
                  tintColor: focused ? 'red' : 'blue',
                  width: '11%',
                  height: '11%',
                }}
                source={require('./images/di.png')}
                resizeMode={'contain'}
              /> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
      
    );

    return (
      
       
        <NavigationContainer>
       
       <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{header: () => null}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="HomeStack"
          component={HomeStack}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="chooseService"
          component={chooseService}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="AddMachine"
          component={AddMachine}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="VisitTime"
          component={VisitTime}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="ServiceProvider"
          component={ServiceProvider}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="OrderSummary"
          component={OrderSummary}
        />
      </Stack.Navigator>
        
       
        </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.45,
    elevation: 5,
    shadowRadius: 3.5,
  },
});
