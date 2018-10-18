import React, {Component} from 'react';
import {DisplayTemp} from './DisplayTemp';
import {DisplayDescrip} from './DisplayDescrip';
import {DisplayIcon} from './DisplayIcon';
import {StyleSheet,Image, Text,View} from 'react-native';

export const DisplayToday =(props)=>{
    if(props.temp){    
    return (
        <View style={styles.today}>
                            <View style={{flex: 1, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                <DisplayIcon png={props.icon}/>
                            </View>
                           
                            <View style={{flex: 2, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                <DisplayDescrip description={props.description}/>
                                <DisplayTemp temp={props.temp}/>
                            </View>
                    </View>
    );
}else{
    return null;
}
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:"column",
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    topPage: {
        flex:1,       
      },
      search: {
        flex:1,
        backgroundColor: "teal",
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'stretch',
        height:200,

      },
      location: {
        flex:0.5,
        backgroundColor: "white",
      },
      today: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#c0c5ce',
        borderBottomWidth: 0,
        shadowColor: '#000',
        // shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
  
 });