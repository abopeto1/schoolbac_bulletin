import {
  Avatar,
  Box, Button, Card,
  Checkbox, CircularProgress, Divider,
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

export const AddStudentInClassroomTableForm =
  ({
     students, selectedDataIds=[], handleSelectAll, handleSelectOne, limit,
     status, update,
  }) => {
    const classes = useStyles();

    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedDataIds.length === students.length}
                  disabled={students.length === 0}
                  color="primary"
                  indeterminate={
                    selectedDataIds.length > 0
                    && selectedDataIds.length < students.length
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
            {students.slice(0, limit).map((album) => album && (
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
        <Divider />
        <Box
          display="flex" className={classes.wrapper}
          justifyContent="flex-end"
          p={2}
        >
          {(status && status.isFetching) && <CircularProgress size={24} className={classes.btnProgress}/>}
          <Button
            color="primary"
            variant="contained"
            type={"submit"}
            disabled={status && status.isFetching}
            onClick={() => {
              update({students: students.map(s => s['@id']),})
            }}
            // className={classes.btnSuccess}
          >
            Confirmer
          </Button>
        </Box>
    </Card>
    )
}
