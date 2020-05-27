import axios from 'axios';
import Data from '../webscraping/cotacao.json';

const url = 'https://covid19.mathdro.id/api';
const url2 = 'https://economia.awesomeapi.com.br/json/all/USD';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchCurrencyData = async () => {
  try {
    const {data: {USD: {high, low, create_date}}} = await axios.get(url2);

    return {high, low, create_date};
  } catch (error) {
    
  }
}

export const fetchCotacaoData = async () => {
  try {
    
    const { cotacao } = Data;
    return cotacao.map(( { fechamento, date: date } ) => ({ fechamento: fechamento, date }))


    //const {cotacao:[{fechamento, date}]} = Data;
    //return {fechamento, date};
  } catch (error) {
    
  }
}

export const fetchDailyData = async () => {
  
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchDailyCurrency = async() => {
  try {
    const response = await axios.get('${url}')
  } catch (error) {
    
  }
}

export const fetchCountries = async () => {
  
  try {

    //const response =  await axios.get(`${url}/countries`);
    //console.log(response);

    const { data: { countries } } = await axios.get(`${url}/countries`);
    
   // if (countries.value == 'brazil'){
    return countries.map((country) => country.name);
  //}
    
  } catch (error) {
    return error;
  }
};

