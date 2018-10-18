import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

export const DisplayDescrip =(props)=>{
    
    return (
        <View>
            {/* <Text>{props.main}</Text> */}
            <Text style={{fontSize: 35, fontWeight:'bold',fontFamily:'sans-serif',fontStyle:'italic'}}>{props.description}</Text>      
       </View>
    )
}
// const styles = StyleSheet.create({
//     container: {
//       borderRadius: 4,
//       borderWidth: 0.5,
//       borderColor: '#d6d7da',
//       flex: 1,
//     },
//     title: {
//       fontSize: 19,
//       fontWeight: 'bold',
//     },
//     search: {
//       flex:1,
//       flexDirection: 'column',
//     },
//   });