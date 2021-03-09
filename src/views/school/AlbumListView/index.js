import React, { useState } from 'react';
import {upperFirst} from 'lodash'
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Entities from '../../../react-redux/Entity/Read/Entities'
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import results from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ResourceListView = ({resourceName}) => {
  const classes = useStyles();
  const [data] = useState(results);

  return (
    <Page
      className={classes.root}
      title={upperFirst(resourceName)}
    >
      <Entities entityName={resourceName} params={{}}>
        {
          rest => (
            <Container maxWidth={false}>
              <Toolbar />
              <Box mt={3}>
                <Results customers={data} {...rest} />
              </Box>
            </Container>
          )
        }
      </Entities>
    </Page>
  );
};

export default ResourceListView;
