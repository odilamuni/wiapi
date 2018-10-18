import React, {Component} from 'react';
import {StyleSheet,Image, Text,View} from 'react-native';

export const DisplayIcon =(props)=>{
    
    return (
        <View>
            
             <Image source={{uri: `http://openweathermap.org/img/w/${props.png}.png`}}
       style={{width: 200, height: 200}} /> 
      
       </View>
    )
}