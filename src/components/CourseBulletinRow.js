import React from 'react'
import {makeStyles} from "@material-ui/core";
import CourseBulletinSquare from "./CourseBulletinSquare";
import PropTypes from 'prop-types'
import {upperCase} from 'lodash'
// import {bulletinColumns} from "../views/bulletin/ProductListView";

const useStyles = makeStyles((theme) => ({
  root:{},
  name:{
    fontSize: '0.8em',
    outline: "0.08em solid silver",
    padding: theme.spacing(0.5),
    textOverflow: "ellipsis",
  },
  square:{
    fontSize: '0.8em',
    display: "flex",
    flex: "1 1 calc(100% / 17)",
    outline: "0.08em solid silver",
    padding: theme.spacing(0.5),
  },
  productCard: {
    height: '100%'
  }
}));

const CourseBulletinRow = ({course, handleBulletin}) => {
  const classes = useStyles();
  // const [form, setForm] = useState({})
  // console.log(course, handleBulletin)

  return (
    <tr>

      {/*{*/}
      {/*  bulletinColumns.map((value, i) => {*/}
      {/*    if (value.title === "name"){*/}
      {/*      return <td className={classes.name} colSpan={6}>{upperCase(course.name)}</td>*/}
      {/*    } else*/}
      {/*      return null*/}
      {/*  })*/}
      {/*}*/}

      <td className={classes.name} colSpan={6}>{upperCase(course.name)}</td>
      <CourseBulletinSquare editable={false} value={"FR"} />
      <CourseBulletinSquare editable={false} value={course.max} />
      <CourseBulletinSquare
        editable={true} value={course['period1']} max={course.max}
        handleBulletin={handleBulletin} course={course} cell={'period1'}
      />
      <CourseBulletinSquare
        editable={true} value={course['period2']} max={course.max} handleBulletin={handleBulletin}
        course={course} cell={'period2'}
      />
      <CourseBulletinSquare editable={false} value={course.exam} max={course.max*2} />
      <CourseBulletinSquare
        editable={true} value={course['exam1']} max={course.exam} handleBulletin={handleBulletin}
        course={course} cell={'exam1'}
      />
      <CourseBulletinSquare editable={false} value={(course.max*2)+course.exam} />
      <CourseBulletinSquare
        editable={true} value={course['semester1']} max={(course.max*2)+course.exam}
        handleBulletin={handleBulletin} course={course} cell={'semester1'}
      />

      <CourseBulletinSquare editable={false} value={course.max} />
      <CourseBulletinSquare
        editable={true} value={course['period3']} max={course.max}
        handleBulletin={handleBulletin} course={course} cell={'period3'} />
      <CourseBulletinSquare
        editable={true} value={course['period4']} max={course.max}
        handleBulletin={handleBulletin} course={course} cell={'period4'}
      />
      <CourseBulletinSquare editable={false} value={course.exam} />
      <CourseBulletinSquare
        editable={true} value={course['exam2']} max={course.exam} handleBulletin={handleBulletin}
        course={course} cell={'exam2'} />
      <CourseBulletinSquare editable={false} value={(course.max*2)+course.exam} />
      <CourseBulletinSquare
        editable={true} value={course['semester2']} max={(course.max*2)+course.exam}
        handleBulletin={handleBulletin} course={course} cell={'semester2'}
      />

      <CourseBulletinSquare editable={false} value={(course.max*4)+(course.exam*2)} />
      <CourseBulletinSquare
        editable={true} value={course['totalGen']} max={((course.max*2)+course.exam)*2}
        handleBulletin={handleBulletin} course={course} cell={'totalGen'}
      />

      <CourseBulletinSquare editable={true} value={null} />
      <CourseBulletinSquare editable={true} value={null} />
    </tr>
  )
}

CourseBulletinRow.propTypes = {
  course: PropTypes.object.isRequired,
}
export default CourseBulletinRow
