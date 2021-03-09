import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import AddStudentInClassroomToolbar from "./AddStudentInClassroomToolbar";
import AddStudentsInClassroomForm from "./AddStudentsInClassroomForm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddStudentsInClassroom = () => {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Ajouter un nouvel élève"
    >
      <Container maxWidth="lg">
        <AddStudentInClassroomToolbar />
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
            <AddStudentsInClassroomForm />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AddStudentsInClassroom;
