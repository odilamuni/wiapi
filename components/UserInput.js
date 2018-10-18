import React, {Component} from 'react';
import {StyleSheet, TextInput,Button,View} from 'react-native';

export const UserInput=(props)=>{
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start', alignItems:'stretch'}}>
            <View style={{flex:1}}>
            <TextInput onChangeText={props.onChange} value={props.value} placeholder='Enter location'/>  
            </View>
            <View style={{flex:1, width: 200, alignSelf:'center'}}>
            <Button color="#841584" onPress={props.onPress} title="go"/>
            </View>
        </View>
        );
}


   