import React from 'react';
import { Text ,  View,Button ,Dimensions } from 'react-native';
import PropTypes from 'prop-types' ;
 import Progress from './FormsCharts/prograss'
 import Linear from './FormsCharts/linear'





function  Charts ({data , country}){
 
   if(!data)
   return  (<Text>LODING ....</Text>)
  
  return (
    <View>
      {
        country ?
        (
          <Linear data={data} country = {country}/>
        ) :
        ( 
          <Progress data={data} />
        )
      }

    </View>
  )
 
         
}
Charts.propTypes = {
    data  : PropTypes.object ,
    country :PropTypes.string ,

  }
export default Charts;