import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import {CommonActions} from '@react-navigation/native';
const {height} = Dimensions.get('screen');
export class GameOver extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="tomato" />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{height: '50%', width: '80%'}}>
            <Text
              style={{
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.1,
              }}>
              ODDZILLA
            </Text>
          </View>

          <View
            style={{
              height: '8%',
              width: '90%',
              backgroundColor: '#2d2926',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}>
            <Text style={{fontSize: 20, color: '#FFF'}}>
              Score {this.props.route.params.correct * 10}
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              height: '20%',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                height: '40%',
                width: '100%',
                backgroundColor: '#2d2926',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}
              onPress={() =>
                this.props.navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Splash'}],
                  }),
                )
              }>
              <Text style={{fontSize: 16, color: '#FFF'}}>Play Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default GameOver;
