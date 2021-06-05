import * as React from 'react';
import {Appbar} from 'react-native-paper';

import {
  StyleSheet,
  FlatList,
  TextInput,
  Alert,
  Animated,
  ScrollView,
  View,
  Text,
} from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <ScrollView style={{color: '#fdfdfd'}}>
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

        {/* Order */}
        <View style={styles.alignData}>
          <Text style={styles.titleText}>Orders </Text>
          {/* Text Input */}

          <TextInput style={styles.input} placeholder="Search with number" />
          {/* Text Boxes */}
          <View style={styles.text}>
            <Text style={styles.innerText}>ID </Text>
            <Text style={styles.innerText}> Date </Text>
            <Text style={styles.innerText}>Status </Text>
            <Text style={styles.innerText}> Amount </Text>
          </View>
          <View style={styles.textSecond}>
            <Text style={styles.id}>3222 </Text>
            <Text style={styles.secondInnerText}> 02-03-2020 </Text>
            <Text style={styles.shipped}>Shipped </Text>
            <Text style={styles.amount}> 12000 PKR </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.innerText}>ID </Text>
            <Text style={styles.innerText}> Date </Text>
            <Text style={styles.innerText}>Status </Text>
            <Text style={styles.innerText}> Amount </Text>
          </View>
          <View style={styles.textSecond}>
            <Text style={styles.id}>3222 </Text>
            <Text style={styles.secondInnerText}> 02-03-2020 </Text>
            <Text style={styles.shipped}>Shipped </Text>
            <Text style={styles.amount}> 12000 PKR </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.innerText}>ID </Text>
            <Text style={styles.innerText}> Date </Text>
            <Text style={styles.innerText}>Status </Text>
            <Text style={styles.innerText}> Amount </Text>
          </View>
          <View style={styles.textSecond}>
            <Text style={styles.id}>3222 </Text>
            <Text style={styles.secondInnerText}> 02-03-2020 </Text>
            <Text style={styles.shipped}>Shipped </Text>
            <Text style={styles.amount}> 12000 PKR </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.innerText}>ID </Text>
            <Text style={styles.innerText}> Date </Text>
            <Text style={styles.innerText}>Status </Text>
            <Text style={styles.innerText}> Amount </Text>
          </View>
          <View style={styles.textSecond}>
            <Text style={styles.id}>3222 </Text>
            <Text style={styles.secondInnerText}> 02-03-2020 </Text>
            <Text style={styles.shipped}>Shipped </Text>
            <Text style={styles.amount}> 12000 PKR </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.innerText}>ID </Text>
            <Text style={styles.innerText}> Date </Text>
            <Text style={styles.innerText}>Status </Text>
            <Text style={styles.innerText}> Amount </Text>
          </View>
          <View style={styles.textSecond}>
            <Text style={styles.id}>3222 </Text>
            <Text style={styles.secondInnerText}> 02-03-2020 </Text>
            <Text style={styles.shipped}>Shipped </Text>
            <Text style={styles.amount}> 12000 PKR </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.innerText}>ID </Text>
            <Text style={styles.innerText}> Date </Text>
            <Text style={styles.innerText}>Status </Text>
            <Text style={styles.innerText}> Amount </Text>
          </View>
          <View style={styles.textSecond}>
            <Text style={styles.id}>3222 </Text>
            <Text style={styles.secondInnerText}> 02-03-2020 </Text>
            <Text style={styles.shipped}>Shipped </Text>
            <Text style={styles.amount}> 12000 PKR </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.innerText}>ID </Text>
            <Text style={styles.innerText}> Date </Text>
            <Text style={styles.innerText}>Status </Text>
            <Text style={styles.innerText}> Amount </Text>
          </View>
          <View style={styles.textSecond}>
            <Text style={styles.id}>3222 </Text>
            <Text style={styles.secondInnerText}> 02-03-2020 </Text>
            <Text style={styles.shipped}>Shipped </Text>
            <Text style={styles.amount}> 12000 PKR </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.innerText}>ID </Text>
            <Text style={styles.innerText}> Date </Text>
            <Text style={styles.innerText}>Status </Text>
            <Text style={styles.innerText}> Amount </Text>
          </View>
          <View style={styles.textSecond}>
            <Text style={styles.id}>3222 </Text>
            <Text style={styles.secondInnerText}> 02-03-2020 </Text>
            <Text style={styles.shipped}>Shipped </Text>
            <Text style={styles.amount}> 12000 PKR </Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.innerText}>ID </Text>
            <Text style={styles.innerText}> Date </Text>
            <Text style={styles.innerText}>Status </Text>
            <Text style={styles.innerText}> Amount </Text>
          </View>
          <View style={styles.textSecond}>
            <Text style={styles.id}>3222 </Text>
            <Text style={styles.secondInnerText}> 02-03-2020 </Text>
            <Text style={styles.shipped}>Shipped </Text>
            <Text style={styles.amount}> 12000 PKR </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

// Styling
const styles = StyleSheet.create({
  amount: {
    textAlign: 'center',
    fontSize: 11,
    color: 'black',
    marginTop: 18,
    height: 60,
    justifyContent: 'space-between',
    position: 'relative',
    right: 6,
    color: 'black',
  },
  shipped: {
    textAlign: 'center',
    fontSize: 11,
    color: 'black',
    marginTop: 18,
    height: 60,
    justifyContent: 'space-between',
    position: 'relative',
    right: 7,
    color: 'black',
  },
  id: {
    fontSize: 11,
    color: 'black',
    marginTop: 18,
    height: 60,
    justifyContent: 'space-between',
    position: 'relative',
    right: -9,
    color: 'black',
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
    marginTop: 15,
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
    color: 'black',
    marginTop: 18,
    height: 60,
    justifyContent: 'space-between',
    textAlign: 'center',
    color: 'black',
  },

  input: {
    height: 44,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,

    marginTop: 9,
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
});
