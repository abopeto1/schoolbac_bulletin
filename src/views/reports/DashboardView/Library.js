import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const Library = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            {/*<Typography*/}
            {/*  color="textSecondary"*/}
            {/*  gutterBottom*/}
            {/*  variant="h6"*/}
            {/*>*/}
            {/*  TOTAL PROFIT*/}
            {/*</Typography>*/}
            <Typography
              color="textPrimary"
              variant="h3"
            >
              Bibliothèque
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Library.propTypes = {
  className: PropTypes.string
};

export default Library;
