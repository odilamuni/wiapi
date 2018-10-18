import React, {Component} from 'react';
import {StyleSheet, TextInput,Button,View} from 'react-native';

export const UserInput=(props)=>{
    return (
        <View style={styles.container}>
            <TextInput onChangeText={props.onChange} value={props.value} placeholder='Enter location'/>     
            <Button color="#841584" onPress={props.onPress} title="go"/>
        </View>
        );
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderColor: 'blue',
        borderWidth: 2,
        marginTop:10,
     },
    
});
   