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
import React from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

export const StudentTable =
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
          </TableRow>
        </TableHead>
        <TableBody>
          {albums.slice(0, limit).map((album) => (
            <TableRow
              hover
              key={album.id}
              selected={selectedDataIds.indexOf(album.id) !== -1}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedDataIds.indexOf(album.id) !== -1}
                  onChange={(event) => handleSelectOne(event, album.id)}
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
                  <Link to={`${album.id}`}>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                    >
                      {album.name}
                    </Typography>
                  </Link>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
