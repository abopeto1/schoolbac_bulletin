import {
  Avatar,
  Box,
  Checkbox,
  Link,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import getInitials from "../../utils/getInitials";
// import moment from "moment";
import React from "react";
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate()
    const students = [{
      name: 'Rebecca Kalonji', id: 1, sex: 'F',
    }]
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
              Sexe
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.slice(0, limit).map((student) => (
            <TableRow
              hover
              key={student.id}
              selected={selectedDataIds.indexOf(student.id) !== -1}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedDataIds.indexOf(student.id) !== -1}
                  onChange={(event) => handleSelectOne(event, student.id)}
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
                    src={student.imageUrl}
                  >
                    {getInitials(student.name)}
                  </Avatar>
                  <Typography
                    color="textPrimary"
                    variant="body1"
                  >
                    <Link
                      href={`/app/bulletin`}
                      onClick={() => navigate(`/app/bulletin`)}
                    >
                      {student.name}
                    </Link>
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {student.sex}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
