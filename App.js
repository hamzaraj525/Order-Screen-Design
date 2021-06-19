import React, {Component} from 'react';
import {Appbar} from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  Image,
  Alert,
} from 'react-native';

const DATA = [
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '12',
    date: '20-03-2021',
    status: 'shipped',
    amount: '11000 PKR',
    key: 0,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '13',
    date: '10-03-2021',
    status: 'shipped',
    amount: '13000 PKR',
    key: 1,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '14',
    date: '10-03-2021',
    status: 'shipped',
    amount: '13000 PKR',
    key: 2,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '15',
    date: '20-03-2021',
    status: 'shipped',
    amount: '11000 PKR',
    key: 3,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '16',
    date: '10-03-2021',
    status: 'shipped',
    amount: '13000 PKR',
    key: 4,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '17',
    date: '10-03-2021',
    status: 'shipped',
    amount: '13000 PKR',
    key: 5,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '18',
    date: '10-03-2021',
    status: 'shipped',
    amount: '13000 PKR',
    key: 6,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '19',
    date: '10-03-2021',
    status: 'shipped',
    amount: '17000 PKR',
    key: 7,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '20',
    date: '10-03-2021',
    status: 'shipped',
    amount: '13000 PKR',
    key: 8,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '21',
    date: '10-03-2021',
    status: 'shipped',
    amount: '13000 PKR',
    key: 9,
  },
  {
    Id: 'ID',
    Date: 'Date',
    Status: 'Status',
    Amount: 'Amount ',
    id: '22',
    date: '10-03-2021',
    status: 'shipped',
    amount: '13000 PKR',
    key: 10,
  },
];
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {/* App Bar  */}
        <Appbar.Header style={styles.header}>
          <Appbar.Action
            icon="menu"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
          <Appbar.Action
            icon="dots-vertical"
            onPress={() => Alert.alert('Simple Button pressed')}
            style={styles.icon}
          />
        </Appbar.Header>
        <View style={styles.alignData}>
          <Text style={styles.titleText}>Orders </Text>

          <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Search by number"
              underlineColorAndroid="transparent"
            />
            <Image
              source={require('./assert/searchh.png')}
              style={styles.imageStyle}
            />
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={({item, index}) => (
            <View style={styles.alignData}>
              <View style={styles.text}>
                <Text style={styles.innerText}>{item.Id} </Text>
                <Text style={styles.innerText}> {item.Date} </Text>
                <Text style={styles.innerText}>{item.Status} </Text>
                <Text style={styles.innerText}> {item.Amount} </Text>
              </View>
              <View style={styles.textSecond}>
                <Text style={styles.id}>{item.id} </Text>
                <Text style={styles.secondInnerText}> {item.date} </Text>
                <Text style={styles.shipped}>{item.status} </Text>
                <Text style={styles.amount}> {item.amount} </Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  amount: {
    textAlign: 'center',
    fontSize: 11,
    marginTop: 18,
    height: 60,
    justifyContent: 'space-between',
    position: 'relative',
    right: 6,
    color: 'grey',
  },
  shipped: {
    textAlign: 'center',
    fontSize: 11,

    marginTop: 18,
    height: 60,
    justifyContent: 'space-between',
    position: 'relative',
    right: 7,
    color: 'grey',
  },
  id: {
    fontSize: 11,
    color: 'grey',

    marginTop: 18,
    height: 60,
    justifyContent: 'space-between',
    position: 'relative',
    right: -9,
  },
  header: {
    backgroundColor: '#1f8e46',
  },
  icon: {
    width: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  titleText: {
    fontSize: 30,

    color: '#1f8e46',
    marginStart: 4,
    fontWeight: 'bold',
  },
  alignData: {
    padding: 18,
  },

  TextBorder: {
    borderWidth: 1.5,
    marginTop: 15,
    height: 73,
    borderColor: '#DCDCDC',
  },
  text: {
    borderWidth: 1.5,

    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: 73,
    borderColor: '#DCDCDC',
  },
  textSecond: {
    marginTop: -49,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  innerText: {
    fontSize: 11,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 15,
    height: 60,
    justifyContent: 'space-evenly',

    color: 'black',
  },
  secondInnerText: {
    fontSize: 11,
    color: 'grey',
    marginTop: 18,
    height: 60,
    justifyContent: 'space-between',
    textAlign: 'center',
  },

  sectionStyle: {
    height: 44,
    flexDirection: 'row',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    marginTop: 9,
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
