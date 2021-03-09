import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Box, Button, makeStyles, Typography} from '@material-ui/core';
import {useLocation, useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const StudentCreateToolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate()
  const location = useLocation()

  const url = location.pathname.slice(0, -7)

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
        <Typography variant={'h2'}>Enregister un nouvel élève</Typography>
        <Button
          onClick={(e) => {
            e.preventDefault()
            navigate(url)
          }}>Cancel</Button>
      </Box>
    </div>
  );
};

StudentCreateToolbar.propTypes = {
  className: PropTypes.string
};

export default StudentCreateToolbar;
