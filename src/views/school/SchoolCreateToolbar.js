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

const SchoolCreateToolbar = ({ className, ...rest }) => {
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
        <Typography variant={'h2'}>Créer une nouvelle Ecole</Typography>
        <Button
          onClick={(e) => {
            e.preventDefault()
            navigate('/app/school')
          }}>Cancel</Button>
      </Box>
    </div>
  );
};

SchoolCreateToolbar.propTypes = {
  className: PropTypes.string
};

export default SchoolCreateToolbar;
