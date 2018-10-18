import React, {Component} from 'react';
import {StyleSheet,Image, Text,View} from 'react-native';

export const DisplayDate =(props)=>{
    let milliseconds= (props.date)*1000;
    let date = new Date(milliseconds);
    let formattedDate;
    
    if(props.date){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        formattedDate = date.toLocaleString('en-US',options);

    }else{
        formattedDate=" ";
    }
    return (
        <View>
               <Text>{formattedDate}</Text>
        </View>
    )
};