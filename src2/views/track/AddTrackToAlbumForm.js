import React, {useState} from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
// import Create from '../../react-redux/Entity/Create'
import AddTrackToAlbumToolbar from "./AddTrackToAlbumToolbar";
import {TrackFormTable} from "./TrackFormTable";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddTrackToAlbumForm = () => {
  const classes = useStyles();
  const [tracks, setTracks] = useState([])
  console.log(tracks)

  return (
    <Page
      className={classes.root}
      title="Add Tracks"
    >
      <Container maxWidth="lg">
        <AddTrackToAlbumToolbar tracks={tracks} handleTracks={values => setTracks(values)} />
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
            <TrackFormTable tracks={tracks} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AddTrackToAlbumForm;
