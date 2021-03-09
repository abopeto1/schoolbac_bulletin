import React, {useEffect, useState} from "react";
import Entities from '../react-redux/Entity/Read/Entities'
import {Autocomplete} from '@material-ui/lab'
import PropTypes from 'prop-types'
import {TextField, CircularProgress} from "@material-ui/core";

const AsynchronousSelect = ({resourceName, multiple=false, ...props}) => {
  const [page, setPage] = useState(1)
  return (
    <Entities entityName={resourceName} params={{page:page,}}>
      {
        rest => <SelectComponent
          resourceName={resourceName} multiple={multiple} setPage={v => setPage(v)}
          {...props} {...rest}
        />
      }
    </Entities>
  )
}

const SelectComponent = ({resourceName, multiple, page, setPage, entities,status,read, ...props}) => {
  const options = entities ? entities : []
  const [open, setOpen] = useState(false)

  useEffect(() => {
    read()
    // eslint-disable-next-line
  },[page])

  return (
    <Autocomplete
      options={options}
      onChange={(event, value) => props.onChange(event, value)}
      open={open}
      onOpen={() => setOpen(true)} onClose={() => setOpen(false)}
      getOptionLabel={option => option.name}
      getOptionSelected={(option, value) => option.uuid === value.uuid}
      multiple={multiple}
      renderInput={ params =>
        <TextField
          {...params} {...props}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {status && status.isFetching ? <CircularProgress color={"inherit"} size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      }
    />
  )
}

AsynchronousSelect.propTypes = {
  resourceName: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool.isRequired,
  value: PropTypes.any.isRequired,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
}

export default AsynchronousSelect
