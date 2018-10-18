import React, {Component} from 'react';
import {StyleSheet, ScrollView, TextInput,Button, Text,View} from 'react-native';
import {UserInput} from '../components/UserInput';
import {DisplayLocation} from '../components/DisplayLocation';
import {DisplayIcon} from '../components/DisplayIcon';
import {DisplayTemp} from '../components/DisplayTemp';
import {DisplayDescrip} from '../components/DisplayDescrip';
import {DisplayDate} from '../components/DisplayDate';
import { DisplayToday } from '../components/DisplayToday';

export class WeatherApp extends Component {
    constructor (props){
        super(props);
        this.state={
            idZip:'',
            name:'',
            country:'',
            tempToday: '',
            mainToday:'',
            descriptionToday:'',
            iconToday: '',
            dateToday: '',
            day2:'',
            day3:'',
            day4:'',
            day5:''
        }
        this.onChange=this.onChange.bind(this);
        this.onPress=this.onPress.bind(this);
    }
    onChange(text){
    let text1 = text;
    this.setState({
        idZip: text1
    });
    }
    onPress() {
        let idZip=this.state.idZip;
       
        // const url = `http://api.openweathermap.org/data/2.5/weather?q=${idZip}&units=imperial&appid=bbaacb0c8753c3231daa440f0b8575bd`
        // fetch(url).
        // then((Response)=>Response.json()).
        // then((findresponse)=>{
        //     this.setState({
        //         description:findresponse.weather[0].description,
        //         main:findresponse.weather[0].main,
        //         iconToday:findresponse.weather[0].icon,
        //         temp: findresponse.main.temp,
        //         name: findresponse.name,//city.name
        //         country: findresponse.sys.country//city.country
        //     })
        // })
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${idZip}&units=imperial&appid=bbaacb0c8753c3231daa440f0b8575bd`
        fetch(url).
        then((Response)=>Response.json()).
        then((findresponse)=>{
            this.setState({
                dateToday: findresponse.list[0].dt,
                descriptionToday:findresponse.list[0].weather[0].description,
                mainToday:findresponse.list[0].weather[0].main,
                iconToday:findresponse.list[0].weather[0].icon,
                tempToday: findresponse.list[0].main.temp,
                name: findresponse.city.name,//city.name
                country: findresponse.city.country//city.country
            })
        })
        this.setState({
            idZip:''
        })
        }
        

    render(){
        
      return(
        <View style={styles.container}>
            <View style={styles.topPage}>
                    <View style={styles.search}>
                             <UserInput onChange={this.onChange} onPress={this.onPress} value={this.state.idZip}/>
                    </View>
                    <View style={styles.location}>
                            <DisplayLocation location={this.state.name} country={this.state.country}  />
                    </View>
                    <DisplayToday temp={this.state.tempToday} description={this.state.descriptionToday} icon={this.state.iconToday}/>
                    {/* <View style={styles.today}>
                            <View style={{flex: 1, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                <DisplayIcon png={this.state.iconToday}/>
                            </View>
                           
                            <View style={{flex: 2, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                <DisplayDescrip description={this.state.descriptionToday}/>
                                <DisplayTemp temp={this.state.tempToday}/>
                            </View>
                    </View> */}
            </View>
            <View style={styles.bottomPage}>
                 <ScrollView>
                    <View>
                        <DisplayTemp/>
                        <DisplayDescrip/>
                    </View>
            
                </ScrollView>
            </View>
        </View>

      );
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
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'stretch',
        height:200,

      },
      location: {
        flex:0.5,
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
    //   bottomPage: {
    //     flex:1,
    //     backgroundColor: "black",
    //   },
 });