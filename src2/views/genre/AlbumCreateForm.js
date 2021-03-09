import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import AlbumCreateToolbar from "./AlbumCreateToolbar";
import AlbumForm from "./AlbumForm";
import Create from '../../react-redux/Entity/Create'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AlbumCreateForm = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Create Album"
    >
      <Container maxWidth="lg">
        <AlbumCreateToolbar />
        <Grid
          container
          spacing={3}
          justify={"center"}
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <Create entityName={"album"}>
              {
                rest => <AlbumForm {...rest} />
              }
            </Create>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AlbumCreateForm;
