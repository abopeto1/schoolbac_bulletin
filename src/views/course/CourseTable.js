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
import CourseWeightingCell from "./CourseWeightingCell";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

export const CourseTable =
  ({
     courses=[], selectedDataIds=[], handleSelectAll, handleSelectOne, limit,
  }) => {
    const classes = useStyles();
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedDataIds.length === courses.length}
                disabled={courses.length === 0}
                color="primary"
                indeterminate={
                  selectedDataIds.length > 0
                  && selectedDataIds.length < courses.length
                }
                onChange={e => handleSelectAll(e)}
              />
            </TableCell>
            <TableCell>
              Name
            </TableCell>
            <TableCell>
              Ponderation
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.slice(0, limit).map((course) => (
            <TableRow
              hover
              key={course.id}
              selected={selectedDataIds.indexOf(course.id) !== -1}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedDataIds.indexOf(course.id) !== -1}
                  onChange={(event) => handleSelectOne(event, course.id)}
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
                    src={course.imageUrl}
                  >
                    {getInitials(course.name)}
                  </Avatar>
                  <Link to={`${course.id}`}>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                    >
                      {course.name}
                    </Typography>
                  </Link>
                </Box>
              </TableCell>
              {/*{*/}
              {/*  course.weightings.length < 1 ? (*/}
              {/*    <CourseWeightingCell editable={true} value={0}*/}
              {/*  ) : */}
              {/*}*/}
              <TableCell>
                <Typography
                  color="textPrimary"
                  variant="body1"
                >

                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
