import React from 'react';
import {upperFirst} from 'lodash'
import {
  makeStyles
} from '@material-ui/core';
import {Outlet} from 'react-router-dom'
import Page from 'src/components/Page';

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

  return (
    <Page
      className={classes.root}
      title={upperFirst(resourceName)}
    >
      <Outlet />
    </Page>
  );
};

export default ResourceListView;
