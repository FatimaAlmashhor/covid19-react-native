import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {fetchData} from './api' ;
import Cards from './components/Cards';
import CountryPiker from './components/countryPiker';
import Charts from './components/Charts' ;

export default class App extends React.Component{
  state = {
    data : {} , 
    country : ''
  }
  componentDidMount() {
    this._getUsers () ;
    
    
  }
  
  _getUsers = async ( ) => {
    const data =   await fetchData();
    this.setState({ data}) ;
    
  }
  _setCountry  =  async (country) => {
    const data = await fetchData(country) ;
    this.setState({  data ,  country }) ;

    console.log(this.state.country);
  }
  render() {
    if(!this.state.data)
    return  (<Text>LODING ....</Text>)
    return (
      
      <View style={styles.container}>
        <View >
            <Cards data = {this.state.data}/>
        </View>
        <View style = {styles.padding}>
           <CountryPiker  handleChange = {this._setCountry}/>
        </View>
        <View style = {styles.padding} >
            <Charts data = {this.state.data} country = {this.state.country}/>
        </View>
      </View>
      
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex :1 ,
    justifyContent: 'center',
    backgroundColor : '#eeeeee' ,
  },
  padding : {
    top : 20 ,
    
  }
});
