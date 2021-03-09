import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import ArtistCreateToolbar from "./ArtistCreateToolbar";
import ArtistForm from "./ArtistForm";
import Create from '../../react-redux/Entity/Create'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ArtistCreateForm = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Create Artist"
    >
      <Container maxWidth="lg">
        <ArtistCreateToolbar />
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
            <Create entityName={"artist"}>
              {
                rest => <ArtistForm {...rest} />
              }
            </Create>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ArtistCreateForm;
