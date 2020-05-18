import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards2 = ( {data} ) => {
  if(!data.high){
    return 'Loading...';
  }

  return (
    <div className={styles.container2}>
      <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.alta)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Alta Dólar</Typography>
            <Typography variant="h5"> {data.high}
              
            </Typography>
            <Typography color="textSecondary">{new Date(data.create_date).toDateString()}</Typography>
            <Typography variant="body2">USD-BRL</Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.baixa)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Baixa Dólar</Typography>
            <Typography variant="h5">
              
              {data.low}</Typography>
            <Typography color="textSecondary">{new Date(data.create_date).toDateString()}</Typography>
            <Typography variant="body2">USD-BRL</Typography>
          </CardContent>
        </Grid>

      </Grid>
    </div>
  )
  
}

export default Cards2;


