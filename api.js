 import axios from 'axios' ;
  const url = 'https://covid19.mathdro.id/api'
  export const fetchData = async (country) => {

    let ChangebleData = url ;

    if(country)
    {
      ChangebleData = `${url}/countries/${country}` ;
    }
    try {
      const response = await fetch(ChangebleData)
      const  {confirmed , deaths , recovered ,lastUpdate} = await response.json()
      const results = {
          confirmed , 
          deaths , 
          recovered ,
          lastUpdate 
      }
      return results;
    }catch(err) {
      console.error('this is some errer in the fetching');
    }
  }
export const fetchCountries = async()=> {
  try{
    const response = await fetch(`${url}/countries`) ;
    const {countries} = await response.json();
    return countries.map(country => country.name);
  }
  catch(err) {
    console.error('this is some errer in the fetching');
  }
}


export const fetchDetails = async()=> {
  try{
    const {data} = await axios.get(`${url}/daily`);
    const modifiesdData = data.map((dailtyData) => ({
        confirmed :dailtyData.confirmed.total ,
        deaths:dailtyData.deaths.total ,
        date:dailtyData.reportData ,
    }));
    return modifiesdData ;
  }catch{
    console.error('this is some errer in the fetching');
  }
}