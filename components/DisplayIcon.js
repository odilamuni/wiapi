import React, {Component} from 'react';
import {StyleSheet,Image, Text,View} from 'react-native';

export const DisplayIcon =(props)=>{
    
    return (
        <View style={{borderRadius: 50, backgroundColor: '#ccd6e8',width: 100, height: 100}}>
            
             <Image source={{uri: `http://openweathermap.org/img/w/${props.png}.png`}}
       style={{width: 100, height: 100}} /> 
      
       </View>
    )
}