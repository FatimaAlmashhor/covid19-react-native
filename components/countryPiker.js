import React , { useEffect , useState } from 'react' ;
import {View , Picker , StyleSheet} from 'react-native' ;

import {fetchCountries} from '../api' ;



export default function CountryPicker({handleChange}) {
    
    const [fetchedCounties , setFetchedCountires] = useState([]) ;
    
    useEffect( () => {
        const fetchApi = async () => {
            setFetchedCountires(await fetchCountries()) ;
        }
        fetchApi();
    } , [setFetchedCountires]) ;


   
    return (
        <View style = {styles.container}>
            <Picker style = {styles.PikerDis}
                onValueChange = {(itemValue , itemIndex)=>{handleChange(itemValue)}}>
                <Picker.Item label ='Global' value='' />
                {fetchedCounties.map(
                (country , i) => <Picker.Item  key ={i} label ={country} value={country} />
                )}
            </Picker>
               
        </View>
    )
}
 const styles = StyleSheet.create({
    container:{
        display : 'flex' , 
        alignItems : 'center' , 
        alignContent :'space-around'
    } ,
    PikerDis : {
        width : '60%' ,
        backgroundColor: "#eeeeee" , 
    }
 })