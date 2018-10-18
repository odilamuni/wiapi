/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WeatherApp} from './WeatherApp';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
                <Text>Weathery</Text>
                <WeatherApp/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'grey',
    // flexDirection: 'column',
    // borderColor: 'red',
    // borderWidth: 2,
   
  },
});
