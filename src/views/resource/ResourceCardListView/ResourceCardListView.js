import React, {useEffect} from 'react'
import Entities from '../../../react-redux/Entity/Read/Entities'
import Page from "../../../components/Page";
import {Box, Container, Grid, CircularProgress} from "@material-ui/core";
import ResourceCardView from "./ResourceCardView";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "../ResourceListView/Toolbar";
import {useNavigate, useParams} from "react-router";
import {upperFirst} from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  resourceCard: {
    height: '100%'
  }
}));

const ResourceCardListView = ({entity, title, navigateTo,}) => {
  const params = useParams()

  return (
    <Entities entityName={entity} params={{...params,}}>
      {
        rest => <ResourceCardListViewContent {...rest} title={title} navigateTo={(id) => navigateTo(id)} />
      }
    </Entities>
  )
}

const ResourceCardListViewContent = ({title, read, entities, status, navigateTo, entityName}) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const params = useParams()

  const createResource = {
    btnLabel: entityName === 'promotion' ? `Add new classroom` : `Add new ${entityName}`,
    link: entityName === 'promotion' && `/app/school/${params.school}/classrooms/create`,
  }

  useEffect(() => {
    read()
    // eslint-disable-next-line
  }, [entityName])

  const data = entities || []
  const loading = status && status.isFetching

  return (
    <Page className={classes.root} title={title}>
      <Container maxWidth={false}>
        <Toolbar
          createResource={createResource}
          searchLabel={`Search ${upperFirst(entityName)}`}/>
        <Box mt={3}>
          <Grid container spacing={3} >
            {
              loading ? (
                <CircularProgress />
                ) : data.length === 0 ? (
                <Grid
                  item lg={4} md={6} xs={12}
                >
                  Aucun Resultat
                </Grid>
                  ) : (
                data.map(resource => (
                  <Grid
                    item key={resource.id} lg={4} md={6} xs={12}
                  >
                    <ResourceCardView
                      resource={resource} className={classes.resourceCard} resourceName={title}
                      onClick={() => {
                        const link = navigateTo(resource.id)
                        navigate(link)
                      }}
                    />
                  </Grid>
                ))
              )
            }
          </Grid>
        </Box>
      </Container>
    </Page>
  )
}

export default ResourceCardListView
