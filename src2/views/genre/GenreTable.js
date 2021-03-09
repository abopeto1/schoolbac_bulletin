import {
  Avatar,
  Box,
  Checkbox,
  // Link,
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
// import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

export const GenreTable =
  ({
     genres=[], selectedDataIds=[], handleSelectAll, handleSelectOne, limit,
  }) => {
    const classes = useStyles()
    // const navigate = useNavigate()

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedDataIds.length === genres.length}
                disabled={genres.length === 0}
                color="primary"
                indeterminate={
                  selectedDataIds.length > 0
                  && selectedDataIds.length < genres.length
                }
                onChange={e => handleSelectAll(e)}
              />
            </TableCell>
            <TableCell>
              Name
            </TableCell>
            <TableCell>
              Created
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {genres.slice(0, limit).map((genre) => (
            <TableRow
              hover
              key={genre.uuid}
              selected={selectedDataIds.indexOf(genre.uuid) !== -1}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedDataIds.indexOf(genre.uuid) !== -1}
                  onChange={(event) => handleSelectOne(event, genre.uuid)}
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
                    src={genre.imageUrl}
                  >
                    {getInitials(genre.name)}
                  </Avatar>
                  <Typography
                    color="textPrimary"
                    variant="body1"
                  >
                    {/*<Link*/}
                    {/*  href={``}*/}
                    {/*  onClick={() => navigate(`${genre.uuid}`)}*/}
                    {/*>*/}
                      {genre.name}
                    {/*</Link>*/}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {moment(genre.createdAt).format('DD/MM/YYYY')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
