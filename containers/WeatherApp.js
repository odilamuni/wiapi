import React, {Component} from 'react';
import {StyleSheet, ScrollView, TextInput,Button, Text,View} from 'react-native';
import {UserInput} from '../components/UserInput';
import {DisplayLocation} from '../components/DisplayLocation';
import {DisplayIcon} from '../components/DisplayIcon';
import {DisplayTemp} from '../components/DisplayTemp';
import {DisplayDescrip} from '../components/DisplayDescrip';
import {DisplayDate} from '../components/DisplayDate';

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
                    <View style={styles.today}>
                            <DisplayDate date={this.state.dateToday}/>
                            <DisplayDescrip main={this.state.main} description={this.state.description}/>
                            <DisplayIcon png={this.state.iconToday}/>
                            <DisplayTemp temp={this.state.temp}/>
                    </View>
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
      backgroundColor: "yellow",
    },
    topPage: {
        flex:3,
        backgroundColor: "yellow",
      },
      search: {
        flex:1,
        backgroundColor: "yellow",
      },
      location: {
        flex:2,
        backgroundColor: "yellow",
      },
      today: {
        flex:3,
        backgroundColor: "yellow",
      },
      bottomPage: {
        flex:2,
        backgroundColor: "yellow",
      },
 });