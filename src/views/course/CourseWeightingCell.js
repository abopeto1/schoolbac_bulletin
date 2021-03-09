import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Input, makeStyles, TableCell} from "@material-ui/core";
import {isNumber} from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '1em',
    outline: "0.08em solid silver",
    padding: theme.spacing(0.5),
    width: 'calc(100% / 17)',
  },
}));

const CourseWeightingCell = ({editable, value, handleBulletin, course, cell, total}) => {
  const classes = useStyles();
  const [editing, setEditing] = React.useState(false)
  const [valueForm, setValueForm] = useState(value)
  const ref = React.useRef(null)

  useEffect(() => {
    if(editing){
      ref.current.focus()
    }
  },[editing])

  const toggleEdit = () => {
    setEditing(!editing)
  }

  return (
    <TableCell
      onClick={() => {
        if(editable){
          setEditing(true)
        }
      }}
      className={classes.root}
      style={{
        fontWeight: editable ? 'normal' : 'bold',
        backgroundColor: isNaN(value) && (!editable && !total) ? "aquamarine" : 'none',
        fontFamily: (editable || total) && "Silent Landfield",
        fontSize: editable ? '1.1em' : '1em',
        color: (isNumber(value) && !isNaN(value) && editable) ? (value >= 5 ? 'blue' : 'red') : 'black',
      }}
    >
      {
        editing ? (
          <Input
            ref={ref} value={valueForm}
            onKeyDown={(v) => {
              if(v.keyCode === 13){
                toggleEdit()
                handleBulletin(course, cell, valueForm)
              }
            }}
            onBlur={() => toggleEdit()}
            onChange={v => {
              setValueForm(v.target.value)
              handleBulletin(course, cell, v.target.value)
            }}
          />
        ) : (
          typeof value === "string" ? value : isNaN(value) ? "" : value
        )
      }
    </TableCell>
  )
}

CourseWeightingCell.propTypes = {
  editable: PropTypes.bool.isRequired,
  value: PropTypes.any,
}
export default CourseWeightingCell
