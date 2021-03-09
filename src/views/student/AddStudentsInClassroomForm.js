import React, {useState} from 'react';
import {
  Box,
  Card, CardContent,
  Container,
  Grid, InputAdornment,
  makeStyles, SvgIcon, TextField
} from '@material-ui/core';
import Page from 'src/components/Page';
import Update from '../../react-redux/Entity/Update'
import {Search as SearchIcon} from "react-feather";
import {AddStudentInClassroomTableForm} from "./AddStudentInClassroomTableForm";
import {useParams} from "react-router-dom";
import AsynchronousSelect from "../../components/AsynchronousSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddStudentsInClassroomForm = () => {
  const classes = useStyles()
  const params = useParams()
  const [students, setStudents] = useState([])

  return (
    <Page
      className={classes.root}
      title="Ajouter un nouvel élève"
    >
      <Container maxWidth="lg">
        <Box mt={3}>
          <Card>
            <CardContent>
              <Box maxWidth={500}>
                <AsynchronousSelect
                  resourceName={'student'}
                  onChange={(e,v) => v && setStudents([v, ...students])}
                  name={'student'}
                  label={''} fullWidth={true} value={''}
                  placeholder="Chercher un élève à ajouter"
                />
                {/*<TextField*/}
                {/*  fullWidth*/}
                {/*  InputProps={{*/}
                {/*    startAdornment: (*/}
                {/*      <InputAdornment position="start">*/}
                {/*        <SvgIcon*/}
                {/*          fontSize="small"*/}
                {/*          color="action"*/}
                {/*        >*/}
                {/*          <SearchIcon />*/}
                {/*        </SvgIcon>*/}
                {/*      </InputAdornment>*/}
                {/*    )*/}
                {/*  }}*/}
                {/*  placeholder="Chercher un élève à ajouter"*/}
                {/*  variant="outlined"*/}
                {/*/>*/}
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Grid
          container
          spacing={3}
          justify={"center"}
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <Update entityName={"classroom"} id={params.classrooms}>
              {
                rest => (
                  <AddStudentInClassroomTableForm
                    {...rest} students={students}
                  />
                  )
              }
            </Update>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AddStudentsInClassroomForm;
