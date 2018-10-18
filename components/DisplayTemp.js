import React, {Component} from 'react';
import {StyleSheet,Image, Text,View} from 'react-native';

export const DisplayTemp =(props)=>{
    
    return (
        <View>
               <Text>{props.temp}</Text>
        </View>
    )
}