import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Note = () => {

  let url = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata"

  const [countries, setCountries] = useState([]);
  
  useEffect (()=>{
    axios.get(url).then((response) =>{
      setCountries(response.data.countries);
      console.log(response.status)
    })
  }, [])

  return(
    <div>
      <h3>List of Countries</h3>
      <ul>
        {countries.map(country => <li key={country}>
          {country}
        </li>)}
      </ul>
    </div>
  );
}

export default Note;
