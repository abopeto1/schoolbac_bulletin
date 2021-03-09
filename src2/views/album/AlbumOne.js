import {Box, CircularProgress, Container, makeStyles,} from "@material-ui/core"
import React, {useEffect, useState} from "react";
import Toolbar from "../resource/ResourceListView/Toolbar";
import {useParams} from "react-router-dom";
import {TracksTable} from "../track/TracksTable";
import Entities from '../../react-redux/Entity/Read/Entities'
import {handleSelectAll} from "../../utils";
import {handleSelectOne} from "../../utils/handleSelectOne";
import {TableResultWrapper} from "../resource/ResourceListView/Results";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  progress: {
    display: "flex",
    justifyContent: "center",
  }
}));

const GetTracksData = ({entities, read, className, classes, status, page, ...props}) => {
  const tracks = entities ? entities : []
  const [selectedDataIds, setSelectedDataIds] = useState([]);
  const [limit] = useState(10)

  useEffect(() => {
    read({
      onSuccess: d => console.log(d)
    })
  }, [])

  return (
    <Box mt={3}>
      {
        (status && status.isFetching) ? <div className={classes.progress}><CircularProgress /></div> : (
          <TableResultWrapper
            classes={classes} data={tracks} limit={limit} page={page} handlePageChange={v => console.log(v)}
          >
            <TracksTable
              {...props}
              handleSelectAll={(e) => handleSelectAll(e, tracks, (d) => setSelectedDataIds(d))}
              handleSelectOne={(e, id) => handleSelectOne(e, id, selectedDataIds, d => setSelectedDataIds(d))}
              tracks={tracks}
            />
          </TableResultWrapper>
        )
      }

    </Box>
  )
}

const AlbumOne = ({resourceName, ...props}) => {
  const classes = useStyles();
  const {id} = useParams()
  const [page, setPage] = useState(1)

  return (
    <Container maxWidth={false}>
      <Toolbar
        searchLabel={`Search Track`}
        createResource={{
          btnLabel: "Add new tracks",
          link: `/app/albums/${id}/tracks/add`,
          state: {
            id: id,
          }
        }}
      />
      <Entities entityName={'track'} params={{"album.uuid": id, page: page}}>
        {
          rest => <GetTracksData {...rest} {...props} classes={classes} page={page} handleChangePage={v => setPage(v)} />
        }
      </Entities>
    </Container>
  )
}

export default AlbumOne
