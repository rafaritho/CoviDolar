import React from 'react';

import { Cards, Cards2, CountryPicker, Chart, Chart2 } from './components';
import { fetchData, fetchCurrencyData, fetchCotacaoData} from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {

  state = {
    data: {},
    dados: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    const dados = await fetchCurrencyData();
    const dadosCotacao = await fetchCotacaoData();

    this.setState({ data , dados });
    console.log(dadosCotacao);

  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, dados, country } = this.state;    

    

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVIDOLAR" />
        <Cards2 data={dados} />
        <Cards data={data} />        
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <Chart2  /> 

        
      </div>
    );
  }
}

export default App;