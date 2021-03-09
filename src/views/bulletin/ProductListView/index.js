import React, {useState} from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
// import Toolbar from './Toolbar';
// import ProductCard from './ProductCard';
// import data from './data';
import CourseBulletinRow from "../../../components/CourseBulletinRow";
import {data} from "../../../constants/datas";
import BulletinHeader from "../../../components/BulettinHeader";
import CourseBulletinTotalRow from "../../../components/CourseBulletinTotalRow";
import BulletinFooter from "../../../components/BulletinFooter";
// import CourseBulletinSquare from "../../../components/CourseBulletinSquare";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  bulletinContainer:{
    display: 'flex',
  },
  table: {
    width: '100%',
    display: "table",
    "& tbody tr td, tbody tr th": {
      outline: "0.08em solid silver",
      textAlign: "center",
      padding: theme.spacing(0.5),
    },
    fontSize: '0.8em',
  },
  name:{
    fontSize: '0.8em',
    outline: "0.08em solid silver",
    padding: theme.spacing(0.5),
    width: 'calc(100% / 4)',
    textOverflow: "ellipsis",
  },
}));

export const bulletinColumns = [
  {
    title: "name", name: "Cours / Courses",
  },
  {
    title: "lang",
  },
  {
    title: "max"
  },
  {
    title: "1P",
    editable: true,
  },
  {
    title: "2P",
    editable: true,
  },
  {
    title: "ExMax",
  },
  {
    title: "exam1",
    editable: true,
  },
  {
    title: "semMax",
  },
  {
    title: "semester1",
    editable: true,
  },
  {
    title: "max",
  },
  {
    title: "3P",
    editable: true,
  },
  {
    title: "4P",
    editable: true,
  },
  {
    title: "ExMax",
  },
  {
    title: "exam2",
    editable: true,
  },
  {
    title: "semMax",
  },
  {
    title: "semester2",
    editable: true,
  },
  {
    title: "totGenMax",
  },
  {
    title: "totGen",
    editable: true,
  },
  {
    title: "percent",
    editable: true,
  },
  {
    title: "sign",
    editable: true,
  },
]

const Bulletin = () => {
  const classes = useStyles();
  // const [products] = useState(data);
  const [courses, setCourses] = useState(data["3rd Commercial"].courses)
  const [ascitechCourses, setAscitechCourses] = useState(data["3rd Commercial"].ascitech_courses)

  const handleBulletin = (course, cell, value) => {
    const newData = courses.map(v => {
      if (v.name === course.name){
        v[cell] = value
        return v
      } else return v
      // v.name === course.name ? { v[cell] = value } : v
    })
    setCourses(newData)
  }

  const handleBulletinAscitech = (course, cell, value) => {
    const newData = ascitechCourses.map(v => {
      if (v.name === course.name){
        v[cell] = value
        return v
      } else return v
      // v.name === course.name ? { v[cell] = value } : v
    })
    setAscitechCourses(newData)
  }

  return (
    <Page
      className={classes.root}
      title="Bulletin"
    >
      <Container maxWidth={false}>
        {/*<Toolbar />*/}
        <Box mt={3}>
          <Grid
            container className={classes.bulletinContainer}
          >
            <table className={classes.table}>
              <tbody>
                <BulletinHeader />
                {
                  courses.map((course,i) => (
                    <CourseBulletinRow
                      key={i} course={course}
                      handleBulletin={handleBulletin}
                    />
                  ))
                }
                <CourseBulletinTotalRow
                  courses={data["3rd Commercial"].courses}
                  totalName={"TOT. GEN. PROGR. NATIONAL"}
                />
                <tr>
                  <th className={classes.name} colSpan={6}>ACTIVITES ASCTECH</th>
                  <td colSpan={17}/>
                  <td/>
                  <td/>
                </tr>

                {
                  data["3rd Commercial"].ascitech_courses.map((course,i) => (
                    <CourseBulletinRow
                      key={i} course={course} handleBulletin={handleBulletinAscitech} />
                  ))
                }
                <CourseBulletinTotalRow
                  totalName={"TOT. GEN. PROGR. ASCITECH"}
                  courses={data["3rd Commercial"].ascitech_courses}
                />
                <BulletinFooter />
              </tbody>
            </table>
          </Grid>
        </Box>
        {/*<Box*/}
        {/*  mt={3}*/}
        {/*  display="flex"*/}
        {/*  justifyContent="center"*/}
        {/*>*/}
        {/*  <Pagination*/}
        {/*    color="primary"*/}
        {/*    count={3}*/}
        {/*    size="small"*/}
        {/*  />*/}
        {/*</Box>*/}
      </Container>
    </Page>
  );
};

export default Bulletin;
