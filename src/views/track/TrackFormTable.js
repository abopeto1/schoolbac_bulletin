import {
  Checkbox,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, {useState} from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

export const TrackFormTable =
  ({
     tracks=[]
   }) => {
    const classes = useStyles();
    const [selectedDataIds, setSelectedDataIds] = useState([])

    return (
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedDataIds.length === tracks.length}
                disabled={tracks.length === 0}
                color="primary"
                indeterminate={
                  selectedDataIds.length > 0
                  && selectedDataIds.length < tracks.length
                }
                // onChange={e => handleSelectAll(e)}
              />
            </TableCell>
            <TableCell />
            <TableCell>
              Title
            </TableCell>
            <TableCell>
              Artists
            </TableCell>
            <TableCell>
              Genres
            </TableCell>
            <TableCell>
              Disc Number
            </TableCell>
            <TableCell>
              Track Number
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map((track) => (
            <TableRow
              hover
              key={track.uuid}
              selected={selectedDataIds.indexOf(track.uuid) !== -1}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedDataIds.indexOf(track.uuid) !== -1}
                  // onChange={(event) => handleSelectOne(event, track.uuid)}
                  value="true"
                />
              </TableCell>
              <TableCell>
                {track['title']}
              </TableCell>
              <TableCell>
                {/*{track.title}*/}
              </TableCell>
              <TableCell>
                {/*{track.artists.map(a => <Link to={`/app/artists/${a.uuid}`}>{a.name}</Link>)}*/}
              </TableCell>
              <TableCell>
                {/*{track.genres.map(genre => <Link to={`/app/genres/${genre.uuid}`}>{genre.name}</Link>)}*/}
              </TableCell>
              <TableCell>
                {/*{track['durationTxt']}*/}
              </TableCell>
              <TableCell>
                {/*{moment(track.createdAt).format('DD/MM/YYYY')}*/}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
