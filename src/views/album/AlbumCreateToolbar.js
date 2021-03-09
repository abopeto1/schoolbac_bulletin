import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Box, Button, makeStyles, Typography} from '@material-ui/core';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const AlbumCreateToolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate()

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
        <Typography variant={'h2'}>Create New Album</Typography>
        <Button
          onClick={(e) => {
            e.preventDefault()
            navigate('/app/albums')
          }}>Cancel</Button>
      </Box>
    </div>
  );
};

AlbumCreateToolbar.propTypes = {
  className: PropTypes.string
};

export default AlbumCreateToolbar;
