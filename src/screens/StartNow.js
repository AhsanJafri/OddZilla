import {Button} from 'native-base';
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
var {height, width} = Dimensions.get('window');
const StartNow = props => {
  return (
    <>
      <StatusBar backgroundColor="tomato" />
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
        <View
          style={{
            height: '70%',
            width: '80%',
            marginTop: '15%',
          }}>
          <View style={{flex: 1}}></View>

          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.1,
              }}>
              ODDZILLA
            </Text>
          </View>
          <View style={{flex: 1}}></View>
          <View
            style={{
              height: '10%',
              width: '100%',
              borderRadius: 100,
              backgroundColor: '#2D2926',
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('Naming')}>
              <Text style={{color: '#FFFF', fontSize: 16}}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default StartNow;
