import React, {useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  CircularProgress,
  IconButton
} from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons'
import SnackBar from '@material-ui/core/Snackbar'
import {useFormik} from "formik";
import {green} from "@material-ui/core/colors";
import {useLocation, useNavigate, useParams} from "react-router-dom";
// import AsynchronousSelect from "../../components/AsynchronousSelect";
// import SelectInput from "@material-ui/core/Select/SelectInput";

const useStyles = makeStyles((theme) => ({
  root: {},
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  btnSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  btnProgress: {
    marginRight: theme.spacing(1),
  }
}));

const StudentForm = ({ className, create, status, entity, ...rest }) => {
  const classes = useStyles();
  const params = useParams()

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()
  const urlParams = useParams()

  const location = useLocation()

  const formik = useFormik({
    initialValues: {
      firstName:'', name: '', lastName: '',
      birthPlace: '', nationality: '', province: '', village: '', sex: '',
      classrooms: [`/api/classrooms/${urlParams.classrooms}`]
    },

    onSubmit: values => {
      create(values, {
        onSuccess: () => {
          setMessage(`Nouvel élève ajouté`)
          setOpen(true)
          navigate(location.pathname.slice(0, -7),{replace: true})
        },
        onFail: e => {
          console.log(e)
          setMessage(`Erreur lors de la création`)
          setOpen(true)
        }
      })
    }
  })

  return (
    <form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      // noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Veuillez entrer toutes les informations réquises"
          title="Nouvel Eleve"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Veuillez specifier le label de la classe. ex: A pour 3e A"
                label="Nom"
                name="name"
                onChange={formik.handleChange}
                required
                value={formik.values.name}
                variant="outlined"
                disabled={status && status.isFetching}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Prenom"
                name="firstName"
                onChange={formik.handleChange}
                required
                value={formik.values.firstName}
                variant="outlined"
                disabled={status && status.isFetching}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Post-nom"
                name="lastName"
                onChange={formik.handleChange}
                required
                value={formik.values.lastName}
                variant="outlined"
                disabled={status && status.isFetching}
              />
            </Grid>
            {/*<Grid*/}
            {/*  item*/}
            {/*  md={6}*/}
            {/*  xs={12}*/}
            {/*>*/}
            {/*  <TextField*/}
            {/*    fullWidth*/}
            {/*    label="Post-nom"*/}
            {/*    name="lastName"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    required*/}
            {/*    value={formik.values.lastName}*/}
            {/*    variant="outlined"*/}
            {/*    disabled={status && status.isFetching}*/}
            {/*  />*/}
            {/*</Grid>*/}
            {/*<Grid*/}
            {/*  item*/}
            {/*  xs={12}*/}
            {/*>*/}
            {/*  <AsynchronousSelect*/}
            {/*    resourceName="promotion" label="Promotion" placeholder="Selectionner une promotion"*/}
            {/*    name="promotion" variant="outlined"*/}
            {/*    onChange={(e,v) => {*/}
            {/*      console.log(e, v)*/}
            {/*      formik.setFieldValue('promotion', v.id)*/}
            {/*    }}*/}
            {/*    fullWidth value={formik.values.promotion}*/}
            {/*    disabled={status && status.isFetching}*/}
            {/*    required*/}
            {/*  />*/}
            {/*</Grid>*/}
          </Grid>
        </CardContent>
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
            // className={classes.btnSuccess}
          >
            Confirmer
          </Button>
        </Box>
      </Card>
      <SnackBar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={open} autoHideDuration={4000} onClose={() => setOpen(false)}
        message={message}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </form>
  );
};

StudentForm.propTypes = {
  className: PropTypes.string
};

export default StudentForm;
