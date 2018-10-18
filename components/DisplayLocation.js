import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

export const DisplayLocation =(props)=>{
    
    return (
        <View style={styles.container}>
            <Text style={styles.textLoc} >{props.location}</Text>
            <Text style={styles.textCou}>{props.country}</Text>   
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    textLoc:{
        flex: 2,
        fontWeight: 'bold',
        fontSize: 12,
    },
    textCou:{
        flex: 1,
        fontWeight: 'bold',
        fontSize: 12,
    }
  });