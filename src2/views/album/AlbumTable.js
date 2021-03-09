import {
  Avatar,
  Box,
  Checkbox,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import getInitials from "../../utils/getInitials";
import moment from "moment";
import React from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

export const AlbumTable =
  ({
     albums=[], selectedDataIds=[], handleSelectAll, handleSelectOne, limit,
  }) => {
    const classes = useStyles();
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedDataIds.length === albums.length}
                disabled={albums.length === 0}
                color="primary"
                indeterminate={
                  selectedDataIds.length > 0
                  && selectedDataIds.length < albums.length
                }
                onChange={e => handleSelectAll(e)}
              />
            </TableCell>
            <TableCell>
              Name
            </TableCell>
            <TableCell>
              Artist
            </TableCell>
            <TableCell>
              Songs
            </TableCell>
            <TableCell>
              Label
            </TableCell>
            <TableCell>
              Released
            </TableCell>
            <TableCell>
              Created
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums.slice(0, limit).map((album) => (
            <TableRow
              hover
              key={album.uuid}
              selected={selectedDataIds.indexOf(album.uuid) !== -1}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedDataIds.indexOf(album.uuid) !== -1}
                  onChange={(event) => handleSelectOne(event, album.uuid)}
                  value="true"
                />
              </TableCell>
              <TableCell>
                <Box
                  alignItems="center"
                  display="flex"
                >
                  <Avatar
                    className={classes.avatar}
                    src={album.imageUrl}
                  >
                    {getInitials(album.name)}
                  </Avatar>
                  <Link to={`${album.uuid}`}>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                    >
                      {album.name}
                    </Typography>
                  </Link>
                </Box>
              </TableCell>
              <TableCell>
                {album.artist.name}
              </TableCell>
              <TableCell>
                {album['numTracks']}
              </TableCell>
              <TableCell>
                {album.label}
              </TableCell>
              <TableCell>
                {moment(album['releaseDate']).format('DD/MM/YYYY')}
              </TableCell>
              <TableCell>
                {moment(album.createdAt).format('DD/MM/YYYY')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
