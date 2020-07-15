import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types' ;
import ionIcons from 'react-native-vector-icons/Ionicons' ;

 class Cards extends React.Component {


    render () {
        console.log(this.props.data) ;
      const  {data :{confirmed , deaths , lastUpdate , recovered}} =   this.props; 
      if(!confirmed) {
        return( <Text>LODING ....</Text>);
      }
        return(

            <View style = {styles.contanier}>
                <View style = {{position : 'relative'}}>
                {/* <ionIcons name="skull-outline"></ionIcons> */}
                    <Text>CONFIRMED</Text>
                    <Text style ={styles.font ,{ color : '#01a9b4'}} > {confirmed.value }</Text>
                    <Text style = {{opacity : 0.6}} >{ new Date(lastUpdate).toDateString()}</Text>
                </View>
                <View style = {{position : 'relative'}} >
                    <Text>RECOVERED</Text>
                    <Text style = {styles.font , { color : '#1b6ca8'}}> {recovered.value }</Text>
                    <Text style = {{opacity : 0.6}} >{ new Date(lastUpdate).toDateString()}</Text>
                </View>
                <View  style = {{position : 'relative'}}>
                    <Text >DEATHS</Text>
                    <Text style = {styles.font , {color : '#c70039'}}> {deaths.value }</Text>
                    <Text style = {{opacity : 0.6}} >{ new Date(lastUpdate).toDateString()}</Text>
                </View>
            </View>
        );
    }
}
Cards.propTypes = {
    data  : PropTypes.object ,
  }
const styles = StyleSheet.create ({
    contanier : {
        flex : 1 ,
        alignContent :'space-between' ,
        alignItems : 'center' ,
    } ,
    font  : {
        fontSize : 50 ,
    }
});
export default Cards;