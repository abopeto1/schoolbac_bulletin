import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  // Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
// import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '&:hover':{
      cursor: "pointer",
    }
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ResourceCardView = ({ className, resource, resourceName, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Avatar
            alt={resourceName}
            src={resource.media}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {resource.name}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {resource.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      {/*<Box p={2}>*/}
      {/*  <Grid*/}
      {/*    container*/}
      {/*    justify="space-between"*/}
      {/*    spacing={2}*/}
      {/*  >*/}
      {/*    <Grid*/}
      {/*      className={classes.statsItem}*/}
      {/*      item*/}
      {/*    >*/}
      {/*      <AccessTimeIcon*/}
      {/*        className={classes.statsIcon}*/}
      {/*        color="action"*/}
      {/*      />*/}
      {/*      <Typography*/}
      {/*        color="textSecondary"*/}
      {/*        display="inline"*/}
      {/*        variant="body2"*/}
      {/*      >*/}
      {/*        Updated 2hr ago*/}
      {/*      </Typography>*/}
      {/*    </Grid>*/}
      {/*    <Grid*/}
      {/*      className={classes.statsItem}*/}
      {/*      item*/}
      {/*    >*/}
      {/*      <GetAppIcon*/}
      {/*        className={classes.statsIcon}*/}
      {/*        color="action"*/}
      {/*      />*/}
      {/*      <Typography*/}
      {/*        color="textSecondary"*/}
      {/*        display="inline"*/}
      {/*        variant="body2"*/}
      {/*      >*/}
      {/*        {resource.totalDownloads}*/}
      {/*        {' '}*/}
      {/*        Downloads*/}
      {/*      </Typography>*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Box>*/}
    </Card>
  );
};

ResourceCardView.propTypes = {
  className: PropTypes.string,
  resource: PropTypes.object.isRequired,
  resourceName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ResourceCardView;
