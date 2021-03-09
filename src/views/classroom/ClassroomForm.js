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
import {useNavigate, useParams} from "react-router-dom";
import AsynchronousSelect from "../../components/AsynchronousSelect";

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

const ClassroomForm = ({ className, create, status, entity, ...rest }) => {
  const classes = useStyles();
  const params = useParams()

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name:'',
      school: `/api/schools/${params.school}`,
      promotion: params.promotion,
      level: '',
      label: ''
    },

    onSubmit: values => {
      create(values, {
        onSuccess: () => {
          setMessage(`Nouvelle classe ajoutée`)
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
          title="Nouvelle Classe"
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
              <AsynchronousSelect
                resourceName="level" label="Niveau" placeholder="Selectionner un niveau"
                name="level" variant="outlined"
                onChange={(e,v) => {
                  formik.setFieldValue('level', v.id)
                }}
                fullWidth value={formik.values.level || ""}
                disabled={status && status.isFetching}
                required
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Veuillez specifier le label de la classe. ex: A pour 3e A"
                label="Label"
                name="label"
                onChange={formik.handleChange}
                required
                value={formik.values.label}
                variant="outlined"
                disabled={status && status.isFetching}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <AsynchronousSelect
                resourceName="promotion" label="Promotion" placeholder="Selectionner une promotion"
                name="promotion" variant="outlined"
                onChange={(e,v) => {
                  console.log(v.id)
                  formik.setFieldValue('promotion', v.id)
                }}
                fullWidth value={formik.values.promotion || ""}
                disabled={status && status.isFetching}
                required
              />
            </Grid>
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

ClassroomForm.propTypes = {
  className: PropTypes.string
};

export default ClassroomForm;
