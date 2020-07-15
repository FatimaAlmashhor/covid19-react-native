import React from 'react';
import {   Text , View, StyleSheet ,Dimensions } from 'react-native';
import {ProgressChart} from 'react-native-chart-kit' ;
import PropTypes from 'prop-types' ;

const screenWidth = Dimensions.get("window").width ;
const screenHeight = Dimensions.get("window").height ;
const chartConfig={
  backgroundColor: "#eeeeee",
  backgroundGradientFrom: "#eeeeee",
  backgroundGradientTo: "#eeeeee",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(225, 33, 20, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16
  },

}



 const Progress = ({data :{confirmed , recovered , deaths}})=> {
    
     

       if(!confirmed)
         return ( <Text>LODING ....</Text>)
 
         const values =  (confirmed.value
                    + deaths.value
                    + recovered.value
                    ) ;
        const data = {
        labels: ["CONFIRMED", "DEATHS", "RECOVERED"], // optional
        data: [ Math.floor (((confirmed.value / values) * 100)) /100
            , Math.floor ((((confirmed.value - recovered.value )/ values) * 100)) /100
            , Math.floor ((((confirmed.value - deaths.value) / values) * 100)) /100]
        };
         return(
         <View  style ={styles.container}>
             <ProgressChart
             data={data}
             width={screenWidth - (Dimensions.get("window").width  * 0.1)}
             height={screenHeight  -  (Dimensions.get("window").height  * 0.6)}
             strokeWidth={16}
             radius={32}
             chartConfig={chartConfig}
             hideLegend={false}
           />
         </View>
           
         )

 }
 Progress.propTypes = {
    data  : PropTypes.object ,
  }

  const styles = StyleSheet.create ({
    container:{
      flex :1 , 
      alignItems : "center" ,
    }
  })
 export default Progress;