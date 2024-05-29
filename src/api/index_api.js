import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete'

const options = {
    // method: 'GET',
    params: {
      query: 'eiffel tower',
      lang: 'en_US',
      units: 'km',
      // bl_latitude: '11',
      // bl_longitude: '12',
      // tr_longitude:'109',
      // tr_latitude: '109',
    },
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }

export const getPlacesData = async () => {
    try{

        const {data: { data } }= await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error)
    }
}
