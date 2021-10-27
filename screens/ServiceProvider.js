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
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {width} from 'dom-helpers';
import {RadioButton} from 'react-native-paper';
export default class ServiceProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTheThing: true,
      colorId: 0,
      starCount: 2.5,
      val: '1',
    };
  }
  onPress = id => {
    this.setState({colorId: id});
  };
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: 'orange',
            height: '5%',
          }}>
          <TouchableOpacity
            style={{
              marginTop: '1%',
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
            paddingBottom: '40%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: '5%',
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Select Service Provider
          </Text>
          <Text
            style={{
              marginTop: '2%',
              paddingHorizontal: '5%',
              fontSize: 12,
              color: 'grey',
            }}>
            Your Order has been matched with most suitable service
          </Text>
          <Text
            style={{
              paddingHorizontal: '5%',
              fontSize: 14,
              marginBottom: '7%',
              color: 'grey',
            }}>
            provider
          </Text>

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                paddingHorizontal: '5%',
                fontSize: 14,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Jamal Alonazi
            </Text>

            <View style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
              <StarRating
                disabled={false}
                emptyStar={'star-o'}
                fullStar={'star'}
                halfStar={'star-half'}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={rating => this.onStarRatingPress(rating)}
                fullStarColor={'orange'}
                starSize={22}
              />
              <View
                style={{
                  marginLeft: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '37%',
                  borderRadius: 5,
                  height: '44%',
                  backgroundColor: 'grey',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                  }}>
                  1477 Reviews
                </Text>
              </View>
              <View style={{marginTop: '-2%', marginLeft: '10%'}}>
                <RadioButton
                  color="orange"
                  value="1"
                  status={this.state.val === '1' ? 'checked' : 'unchecked'}
                  onPress={() => this.setState({val: '1'})}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
              <Ionicons name="md-alert-circle" size={18} color={'black'} />
              <Text
                style={{
                  marginLeft: '1%',
                  fontSize: 14,
                  color: 'black',
                }}>
                Min. Charge:50 SAR
              </Text>
            </View>

            <Text
              style={{paddingHorizontal: '5%', fontSize: 14, color: 'black'}}>
              Provider can do all selected services
            </Text>
            <View
              style={{
                marginTop: '2%',
                flexDirection: 'row',
                paddingHorizontal: '5%',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                }}>
                Payment methods:
              </Text>
              <MaterialCommunityIcons name="cash" size={23} color={'black'} />

              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                }}>
                Cash
              </Text>
            </View>

            <View
              style={{
                marginTop: '7%',
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.bottomView}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('OrderSummary');
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
              }}>
              Continue{' '}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bottomView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 70,
    backgroundColor: 'orange',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },

  container: {
    flex: 1,
  },
});
