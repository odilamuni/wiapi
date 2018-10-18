import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

export const DisplayLocation =(props)=>{
    if(props.location){    
        return (
            <View style={styles.container}>
                <Text style={styles.textLoc} >{props.location}</Text>
                <Text style={styles.textCou}>{props.country}</Text>   
           </View>
        );
    }else{
        return null;
    };
}
    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
        backgroundColor: "white",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    textLoc:{
        flex: 2.5,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        textAlign:"center",
    },
    textCou:{
        flex: 1.5,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:"left",
    }
  });