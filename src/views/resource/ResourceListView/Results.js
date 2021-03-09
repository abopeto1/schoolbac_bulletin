import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Box, Card, TablePagination, makeStyles, Container, CircularProgress,} from '@material-ui/core';
import {upperFirst} from 'lodash'
import {AlbumTable} from "../../album/AlbumTable";
import Entities from "../../../react-redux/Entity/Read/Entities";
import Toolbar from "./Toolbar";
import ArtistListView from "../../artist/ArtistListView";
import {handleSelectAll} from "../../../utils";
import {handleSelectOne} from "../../../utils/handleSelectOne";
import Promotion from "../../promotion/ClassesListView";
import {StudentTable} from "../../student/StudentTable";
import {useParams} from "react-router";
import Classroom from "../../classroom/Classroom";
import {CourseTable} from "../../course/CourseTable";
import StudentToolbar from "../../student/StudentToolbar";

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

export const TableResultWrapper = ({classes, children, className, data, ...rest}) => {
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          {children}
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={data.length}
        onChangePage={rest.handlePageChange}
        onChangeRowsPerPage={rest.handleLimitChange}
        page={rest.page}
        rowsPerPage={rest.limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  )
}

const Result = ({ className, resourceName, entities, read, status, ...rest }) => {
  const data = entities ? entities : []
  const classes = useStyles();
  const [selectedDataIds, setSelectedDataIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    read()
    // eslint-disable-next-line
  },[page, resourceName])

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const getResult = resource => {
    switch (resource) {
      case 'course':
        return (
          <TableResultWrapper
            handlePageChange={handlePageChange} handleLimitChange={handleLimitChange}
            page={page} limit={limit} {...rest} classes={classes} data={data}
          >
            <CourseTable
              courses={data}
              handleSelectAll={(e) => handleSelectAll(e, data, (d) => setSelectedDataIds(d))}
              handleSelectOne={(e, id) => handleSelectOne(e, id, selectedDataIds, d => setSelectedDataIds(d))}
              selectedDataIds={selectedDataIds} limit={limit}
            />
          </TableResultWrapper>
        )
      case 'student':
        return (
          <TableResultWrapper
            handlePageChange={handlePageChange} handleLimitChange={handleLimitChange}
            page={page} limit={limit} {...rest} classes={classes} data={data}
          >
            <StudentTable
              albums={data}
              handleSelectAll={(e) => handleSelectAll(e, data, (d) => setSelectedDataIds(d))}
              handleSelectOne={(e, id) => handleSelectOne(e, id, selectedDataIds, d => setSelectedDataIds(d))}
              selectedDataIds={selectedDataIds} limit={limit}
            />
          </TableResultWrapper>
        )
      case 'album':
        return (
          <TableResultWrapper
            handlePageChange={handlePageChange} handleLimitChange={handleLimitChange}
            page={page} limit={limit} {...rest} classes={classes} data={data}
          >
            <AlbumTable
              albums={data}
              handleSelectAll={(e) => handleSelectAll(e, data, (d) => setSelectedDataIds(d))}
              handleSelectOne={(e, id) => handleSelectOne(e, id, selectedDataIds, d => setSelectedDataIds(d))}
              selectedDataIds={selectedDataIds} limit={limit}
            />
          </TableResultWrapper>
        )
      case 'classroom':
        return (
          <TableResultWrapper
            handlePageChange={handlePageChange} handleLimitChange={handleLimitChange}
            page={page} limit={limit} {...rest} classes={classes} data={data}
          >
            <Classroom />
          </TableResultWrapper>
        )
      case 'promotion':
        return (
          <TableResultWrapper
            handlePageChange={handlePageChange} handleLimitChange={handleLimitChange}
            page={page} limit={limit} {...rest} classes={classes} data={data}
          >
            <Promotion
              promotions={data}
              handleSelectAll={(e) => handleSelectAll(e, data, (d) => setSelectedDataIds(d))}
              handleSelectOne={(e, id) => handleSelectOne(e, id, selectedDataIds, d => setSelectedDataIds(d))}
              selectedDataIds={selectedDataIds} limit={limit}
            />
          </TableResultWrapper>
        )
      case 'artist':
        return (
          <ArtistListView
            artists={data}
            handleSelectAll={(e) => handleSelectAll(e, data, (d) => setSelectedDataIds(d))}
            handleSelectOne={(e, id) => handleSelectOne(e, id, selectedDataIds, d => setSelectedDataIds(d))}
            selectedDataIds={selectedDataIds} limit={limit}
          />
        )
      default:
        return null
    }
  }

  return (
    <Container maxWidth={false}>
      {
        resourceName !== 'student' ? (
          <Toolbar
            searchLabel={`Search ${upperFirst(resourceName)}`}
            createResource={{
              btnLabel: `Add new ${resourceName}`,
              link: rest.createLink,
            }}
          />
        ) : (
          <StudentToolbar
            searchLabel={`Search ${upperFirst(resourceName)}`}
            createResource={{
              btnLabel: `Add new ${resourceName}`,
              link: rest.createLink,
            }}
          />
        )
      }
      <Box mt={3}>
        {
          (status && status.isFetching) ? <div className={classes.progress}><CircularProgress /></div> : getResult(resourceName)
        }
      </Box>
    </Container>
  );
};

const Results = ({resourceName, params, createLink}) => {
  const param = params || {}
  const urlParams = useParams()

  return (
    <Entities entityName={resourceName} params={{...param, ...urlParams}}>
      {
        rest => (
          <Result resourceName={resourceName} {...rest} createLink={createLink} />
        )
      }
    </Entities>
  )
}

Results.propTypes = {
  resourceName: PropTypes.string.isRequired,
  searchLabel: PropTypes.string,
  params: PropTypes.object,
  createLink: PropTypes.string,
};

export default Results;
