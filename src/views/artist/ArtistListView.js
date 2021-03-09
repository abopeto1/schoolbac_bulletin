import { Grid, makeStyles,} from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types'
import ArtistCard from "./ArtistCard";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const ArtistListView =
  ({
     artists=[],
     // selectedDataIds=[], handleSelectAll, handleSelectOne, limit,
  }) => {
    const classes = useStyles();

    return (
      <Grid
        container
        spacing={3}
      >
        {artists.map((artist) => (
          <Grid
            item
            key={artist.uuid}
            lg={4}
            md={6}
            xs={12}
          >
            <ArtistCard
              className={classes.productCard}
              artist={artist}
            />
          </Grid>
        ))}
      </Grid>
    )
}

ArtistListView.propTypes = {
  artists: PropTypes.array.isRequired,
  selectedDataIds: PropTypes.array,
  handleSelectAll: PropTypes.func.isRequired,
  handleSelectOne: PropTypes.func.isRequired,
  limit: PropTypes.number,
}

export default ArtistListView
