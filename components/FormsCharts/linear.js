import React , { useState , useEffect }from 'react';
import {   Text ,View , StyleSheet ,Dimensions } from 'react-native';
import PropTypes from 'prop-types' ;
import {
  BarChart
 } from "react-native-chart-kit";
import {fetchDetails} from '../../api' ;

const screenWidth = Dimensions.get("window").width ;
const screenHeight = Dimensions.get("window").height ;
const chartConfig={
  backgroundColor: "#eeeeee",
  backgroundGradientFrom: "#eeeeee",
  backgroundGradientTo: "#eeeeee",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 33, 20, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 33, 0, ${opacity})`,
  style: {
    borderRadius: 16
  },
 
}
  
 


const Linear = ({data : {confirmed , deaths , recovered} , country}) => {
  const [details , setDetails] = useState([]) ;
  useEffect ( ()=> {
    const fetchApi = async () => {
      const detailFetchData = await fetchDetails() ;
      setDetails(detailFetchData);
    };

    fetchApi() ;
  } , []);

 const data = {
  labels: ["CONFOIRMED"  , "DEATHS" , "RECOVERED"],
  datasets: [
    {
      data: [ confirmed.value , deaths.value , recovered.value]
    }
  ]
};


  if (!confirmed )
  return  ( <Text>LODING ....</Text>)

   return (
    <View  style = {styles.container}>
        <BarChart
        style = {styles.animation}
        data={ data}
        width={screenWidth - (Dimensions.get("window").width  * 0.1)}
         height={screenHeight  -  (Dimensions.get("window").height  * 0.6)}
        chartConfig={chartConfig}
        verticalLabelRotation={50}
        fromZero = 'true'
      />
    </View>
  )

}
Linear.propTypes = {
    data  : PropTypes.object ,
  }

  const styles = StyleSheet.create ({
    container :{
      flex :1 , 
      alignItems : "center" ,
    } 
  })
export default Linear ;

