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
import {useNavigate} from "react-router-dom";

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

const SchoolForm = ({ className, create, status, entity, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: values => {
      create(values, {
        onSuccess: () => {
          setMessage(`Nouvelle Ecole Ajoutée`)
          setOpen(true)
          navigate(`/app/school`,{replace: true})
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
          title="Nouvelle Ecole"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Veuillez specifier le nom de l'école"
                label="Nom de l'école"
                name="name"
                onChange={formik.handleChange}
                required
                value={formik.values.name}
                variant="outlined"
                disabled={status && status.isFetching}
              />
            </Grid>
          {/*  <Grid*/}
          {/*    item*/}
          {/*    md={6}*/}
          {/*    xs={12}*/}
          {/*  >*/}
          {/*    <AsynchronousSelect*/}
          {/*      resourceName="artist" label="Artist" placeholder="Select Artist"*/}
          {/*      name="artist" variant="outlined"*/}
          {/*      onChange={(e,v) => formik.setFieldValue('artist', v['@id'])}*/}
          {/*      fullWidth value={formik.values.artist}*/}
          {/*      disabled={status && status.isFetching}*/}
          {/*      required*/}
          {/*    />*/}
          {/*  </Grid>*/}
          {/*  <Grid*/}
          {/*    item*/}
          {/*    md={6}*/}
          {/*    xs={12}*/}
          {/*  >*/}
          {/*    <TextField*/}
          {/*      fullWidth*/}
          {/*      label="Select Type"*/}
          {/*      name="type"*/}
          {/*      onChange={formik.handleChange}*/}
          {/*      required*/}
          {/*      select*/}
          {/*      SelectProps={{ native: true }}*/}
          {/*      value={formik.values.type}*/}
          {/*      variant="outlined"*/}
          {/*      disabled={status && status.isFetching}*/}
          {/*    >*/}
          {/*      {types.map((option) => (*/}
          {/*        <option*/}
          {/*          key={option.value}*/}
          {/*          value={option.value}*/}
          {/*        >*/}
          {/*          {option.label}*/}
          {/*        </option>*/}
          {/*      ))}*/}
          {/*    </TextField>*/}
          {/*  </Grid>*/}
          {/*  <Grid*/}
          {/*    item*/}
          {/*    md={6}*/}
          {/*    xs={12}*/}
          {/*  >*/}
          {/*    <TextField*/}
          {/*      type={"date"} value={formik.values.releaseDate} onChange={formik.handleChange}*/}
          {/*      variant={"outlined"} fullWidth name={"releaseDate"} label={"Release Date"}*/}
          {/*      defaultValue={""}*/}
          {/*      disabled={status && status.isFetching}*/}
          {/*    />*/}
          {/*  </Grid>*/}
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

SchoolForm.propTypes = {
  className: PropTypes.string
};

export default SchoolForm;
