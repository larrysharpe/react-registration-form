import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const btnStyles = {
    border: 0,
    borderRadius: 3,
    color: 'white',
    marginTop: 20,
    marginRight: 10
}

const useStyles = makeStyles({
    btnSubmit: {
        background: 'linear-gradient(45deg, #e4733b 30%, #f8d049 90%)',
        ...btnStyles
    },
    btnReset: {
        background: 'linear-gradient(45deg, #ff5500 30%, #ff0000 90%)',
        ...btnStyles
    }
});

export default useStyles;
