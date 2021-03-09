import React from 'react';
import {
  // Box,
  // Container,
  Grid,
  makeStyles
} from '@material-ui/core';
// import { Pagination } from '@material-ui/lab';
// import Page from 'src/components/Page';
// import Toolbar from './Toolbar';
import PromotionCard from './PromotionCard';
// import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  // productCard: {
  //   height: '100%'
  // }
}));

const Promotion = ({ promotions=[],}) => {
  const classes = useStyles();
  const pr = [{
    name: "2020-2021",
    description: ""
  }]

  return (
      <Grid
        container
        spacing={3}
      >
        {[...pr, ...promotions].map((promotion) => (
          <Grid
            item
            key={promotion.id}
            lg={4}
            md={6}
            xs={12}
          >
            <PromotionCard
              className={classes.productCard}
              promotion={promotion}
            />
          </Grid>
        ))}
      </Grid>
  );
};

export default Promotion;
