import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  name:{
    fontSize: '2em',
    outline: "0.08em solid silver",
    padding: theme.spacing(0.5),
    textOverflow: "ellipsis",
  },
  verticalText:{
    writingMode: "vertical-lr",
    padding: theme.spacing(0.5),
  },
  titleHeader:{
    "& td": {
      width: 'calc(100% / 17)',
      padding: theme.spacing(0.5),
    }
  },
}));

const BulletinHeader = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <tr>
        <th colSpan={9} style={{padding: '20px 0',}}>REBECCA</th>
        <th colSpan={9} />
        <th colSpan={7}>3ème COMMERCIALE</th>
      </tr>
      <tr>
        <th colSpan={25}>Bulletin ASCITECH – ANNEE SCOLAIRE/SCHOOL YEAR 2017-2018</th>
      </tr>
      <tr>
        <td>SEXE:</td>
        <td colSpan={5} />
        <td />
        <td colSpan={11}>Lieu et date de naissance : Likasi, le 05 Février 2003</td>
        <td colSpan={2}>MATRICULE</td>
        <td colSpan={5} />
      </tr>
      <tr>
        <td rowSpan={3} className={classes.name} colSpan={6}>Cours / Courses</td>
        <td rowSpan={3} className={classes.verticalText}>
          <div className={classes.verticalText}>Langue / Language</div>
        </td>
        <td colSpan={7}>MAXIMA</td>
        <td colSpan={7}>MAXIMA</td>
        <td rowSpan={2} colSpan={2}>TOTAL GEN.</td>
        <td rowSpan={2} colSpan={2}>EXAMEN DE REPECH.</td>
      </tr>
      <tr>
        <td colSpan={2}>1è P</td>
        <td>2è P</td>
        <td colSpan={2}>EXAMEN</td>
        <td colSpan={2}>1er SEMESTRE</td>
        <td colSpan={2}>3è P</td>
        <td>4è P</td>
        <td colSpan={2}>EXAMEN</td>
        <td colSpan={2}>2è SEMESTRE</td>
      </tr>
      <tr className={classes.titleHeader}>
        <td>Max</td>
        <td>Pts Obt</td>
        <td>Pts Obt</td>
        <td>Max</td>
        <td>Pts Obt</td>
        <td>Max</td>
        <td>Pts Obt</td>
        <td>Max</td>
        <td>Pts Obt</td>
        <td>Pts Obt</td>
        <td>Max</td>
        <td>Pts Obt</td>
        <td>Max</td>
        <td>Pts Obt</td>
        <td>Max</td>
        <td>Pts Obt</td>
        <td>%</td>
        <td>SIGN PROF</td>
      </tr>
    </Fragment>
  )
}

export default BulletinHeader
