import React from 'react'
import {makeStyles} from "@material-ui/core";
import CourseBulletinSquare from "./CourseBulletinSquare";
import PropTypes from 'prop-types'
import {upperCase} from 'lodash'

// const EditableContext = createContext(null)

const useStyles = makeStyles((theme) => ({
  root:{},
  name:{
    fontSize: '0.8em',
    outline: "0.08em solid silver",
    padding: theme.spacing(0.5),
    textOverflow: "ellipsis",
    fontWeight: "bold",
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

const CourseBulletinTotalRow = ({courses, totalName}) => {
  const classes = useStyles();
  // const [form, setForm] = useState({})

  const max = courses.reduce((acc, value) => (
    value.max ? acc + value.max : acc
  ), 0)

  const exam = courses.reduce((acc, value) => (
    value.exam ? acc + value.exam : acc
  ), 0)

  const getTotal = (period) => {
    return courses.reduce((acc, value) => (
      value[period] ? acc + parseFloat(value[period]) : acc
    ), 0)
  }

  return (
    <React.Fragment>
      <tr>
        <td className={classes.name} colSpan={6}>{upperCase(totalName)}</td>

        <CourseBulletinSquare editable={false} value={""} total />
        <CourseBulletinSquare editable={false} value={max} />
        <CourseBulletinSquare editable={false} value={getTotal('period1')} total />
        <CourseBulletinSquare editable={false} value={getTotal('period2')} total />
        <CourseBulletinSquare editable={false} value={exam} />
        <CourseBulletinSquare editable={false} value={getTotal('exam1')} total />
        <CourseBulletinSquare editable={false} value={(max*2)+exam} total />
        <CourseBulletinSquare editable={false} value={getTotal('semester1')} total />

        <CourseBulletinSquare editable={false} value={max} total />
        <CourseBulletinSquare editable={false} value={getTotal('period3')} total />
        <CourseBulletinSquare editable={false} value={getTotal('period4')} total />
        <CourseBulletinSquare editable={false} value={exam} />
        <CourseBulletinSquare editable={false} value={getTotal('exam2')} total />
        <CourseBulletinSquare editable={false} value={(max*2)+exam} total />
        <CourseBulletinSquare editable={false} value={getTotal('semester2')} total />

        <CourseBulletinSquare editable={false} value={(max*4)+(exam*2)} total />
        <CourseBulletinSquare editable={false} value={getTotal('totalGen')} total />

        <CourseBulletinSquare editable={false} value={null} total />
        <CourseBulletinSquare editable={false} value={null} total />
      </tr>
      <tr>
        <td className={classes.name} colSpan={6}>POURCENTAGE</td>

        <CourseBulletinSquare editable={false} value={""} total />
        <CourseBulletinSquare editable={false} value={null} total />
        <CourseBulletinSquare
          editable={false} value={((getTotal('period1')/max) * 100).toFixed(2) + ' %'}
          total
        />
        <CourseBulletinSquare
          editable={false} value={((getTotal('period2')/max) * 100).toFixed(2) + ' %'}
          total
        />
        <CourseBulletinSquare editable={false} value={null} total />
        <CourseBulletinSquare
          editable={false} value={((getTotal('exam1')/max) * 100).toFixed(2) + ' %'}
          total
        />
        <CourseBulletinSquare editable={false} value={null} total />
        <CourseBulletinSquare
          editable={false} value={((getTotal('semester1')/max) * 100).toFixed(2) + ' %'}
          total
        />

        <CourseBulletinSquare editable={false} value={null} total />
        <CourseBulletinSquare
          editable={false} value={((getTotal('period3')/max) * 100).toFixed(2) + ' %'}
          total
        />
        <CourseBulletinSquare
          editable={false} value={((getTotal('period4')/max) * 100).toFixed(2) + ' %'}
          total
        />
        <CourseBulletinSquare editable={false} value={null} total />
        <CourseBulletinSquare
          editable={false} value={((getTotal('exam2')/max) * 100).toFixed(2) + ' %'}
          total
        />
        <CourseBulletinSquare editable={false} value={null} total />
        <CourseBulletinSquare
          editable={false} value={((getTotal('semester2')/max) * 100).toFixed(2) + ' %'}
          total
        />

        <CourseBulletinSquare editable={false} value={null} total />
        <CourseBulletinSquare
          editable={false} value={((getTotal('totalGen')/max) * 100).toFixed(2) + ' %'}
          total
        />

        <CourseBulletinSquare editable={false} value={null} total />
        <CourseBulletinSquare editable={false} value={null} total />
      </tr>
    </React.Fragment>
  )
}

CourseBulletinTotalRow.propTypes = {
  courses: PropTypes.array.isRequired,
  totalName: PropTypes.string.isRequired,
}
export default CourseBulletinTotalRow
