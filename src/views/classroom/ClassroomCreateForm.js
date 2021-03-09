import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import ClassroomCreateToolbar from "./ClassroomCreateToolbar";
import ClassroomForm from "./ClassroomForm";
import Create from '../../react-redux/Entity/Create'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ClassroomCreateForm = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Ajouter une nouvelle classe"
    >
      <Container maxWidth="lg">
        <ClassroomCreateToolbar />
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
            <Create entityName={"classroom"}>
              {
                rest => <ClassroomForm {...rest} />
              }
            </Create>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ClassroomCreateForm;
