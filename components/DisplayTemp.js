import React, {Component} from 'react';
import {StyleSheet,Image, Text,View} from 'react-native';

export const DisplayTemp =(props)=>{
    if(props.temp){    
    return (
        <View>
               <Text style={{fontSize: 25, fontWeight:'bold',fontFamily:'sans-serif'}}>{props.temp} °F</Text>
        </View>
    );
}else{
    return null;
}
}