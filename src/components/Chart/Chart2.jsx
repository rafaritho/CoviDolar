import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { fetchCotacaoData } from '../../api';

import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
        const initialDailyData = await fetchCotacaoData();
      setDailyData(initialDailyData);
    };
    
    //console.log(dailyData);

    fetchAPI();
  }, []);  

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ fechamento }) => fechamento),
            label: 'Fechamento',
            borderColor: '#333ff',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }],
        }}
      />) : null
  ); 
  return (
    <div className={styles.container}>        
    {lineChart}
    </div>
)
};

export default Chart;
