import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Professors from './Professors';
// import LatestOrders from './LatestOrders';
// import LatestProducts from './LatestProducts';
// import Sales from './Sales';
import Staff from './Staff';
import Students from './Students';
import Library from './Library';
// import TrafficByDevice from './TrafficByDevice';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Professors />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Students />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Staff />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Library />
          </Grid>
          {/*<Grid*/}
          {/*  item*/}
          {/*  lg={8}*/}
          {/*  md={12}*/}
          {/*  xl={9}*/}
          {/*  xs={12}*/}
          {/*>*/}
          {/*  <Sales />*/}
          {/*</Grid>*/}
          {/*<Grid*/}
          {/*  item*/}
          {/*  lg={4}*/}
          {/*  md={6}*/}
          {/*  xl={3}*/}
          {/*  xs={12}*/}
          {/*>*/}
          {/*  <TrafficByDevice />*/}
          {/*</Grid>*/}
          {/*<Grid*/}
          {/*  item*/}
          {/*  lg={4}*/}
          {/*  md={6}*/}
          {/*  xl={3}*/}
          {/*  xs={12}*/}
          {/*>*/}
          {/*  <LatestProducts />*/}
          {/*</Grid>*/}
          {/*<Grid*/}
          {/*  item*/}
          {/*  lg={8}*/}
          {/*  md={12}*/}
          {/*  xl={9}*/}
          {/*  xs={12}*/}
          {/*>*/}
          {/*  <LatestOrders />*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;