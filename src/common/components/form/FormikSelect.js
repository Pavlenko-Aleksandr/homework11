import React from 'react';
import { useFormikContext } from 'formik';
import { MenuItem, TextField } from '@material-ui/core';

function FormikSelect(props) {
    const { values, handleChange, handleBlur, errors, touched } = useFormikContext();
    const { name } = props;

    return (
        <TextField 
            style={{minWidth: '250px'}}
            select
            {...props}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched[name] && !!errors[name]}
            helperText={touched[name] && errors[name]}
        >
            <MenuItem value={true}>Done</MenuItem>
            <MenuItem value={false}>Not done</MenuItem>
        </TextField>
    )
}

export default FormikSelect;