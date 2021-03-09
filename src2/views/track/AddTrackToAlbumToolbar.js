import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Box, Button, makeStyles, Typography} from '@material-ui/core';
import {useNavigate, useParams} from "react-router-dom";
import {Upload as UploadIcon} from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {},
  uploadButton: {
    marginRight: theme.spacing(1)
  },
  input: {
    display: "none",
  }
}));

const AddTrackToAlbumToolbar = ({ className, tracks, handleTracks, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate()
  const {albumId} = useParams()

  const onChange = e => {
    let newTracks = []
    for (let i = 0; i < e.target.files.length; i++) {
      newTracks.concat(...newTracks, [{
        file: e.target.files[i],
        album: albumId,
        discNumber: 1,
        trackNumber: i++,
        title: e.target.files[i].name
      }])
    }

    handleTracks({...tracks, ...newTracks})
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        marginBottom={1}
        justifyContent="space-between"
      >
        <Typography variant={'h2'}>Add Tracks</Typography>
        <Box
          display="flex"
          justifyContent="flex-end"
        >
          <input
            accept={"audio/mpeg"} className={classes.input} id={"contained-button-file"} multiple
            type={"file"} onChange={onChange}
          />
          <label htmlFor={"contained-button-file"}>
            <Button
              className={classes.uploadButton} variant={"contained"} color={"primary"}
              startIcon={<UploadIcon />} component={"span"}
            >
              Upload New Track
            </Button>
          </label>
          <Button
            onClick={(e) => {
              e.preventDefault()
              navigate(`/app/albums/${albumId}`)
            }}>Cancel</Button>
        </Box>
      </Box>
    </div>
  );
};

AddTrackToAlbumToolbar.propTypes = {
  className: PropTypes.string,
  handleTracks: PropTypes.func.isRequired,
  tracks: PropTypes.array.isRequired,
};

export default AddTrackToAlbumToolbar;
