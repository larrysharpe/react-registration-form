import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {formFields, fieldsOrder} from "./config";
import {defaultState} from "./type";
import useStyles from "./styles";
import RegistrationContext from "./registration.context";


const Registration = () => {

    const classes = useStyles();

    const { fields, setFields, formState, errors } = useContext(RegistrationContext);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    const onReset = (): void => {
        setFields(defaultState)
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        const {value, name} = e.target;
        setFields((prev: any) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <Grid container={true} justify="center">
            <Grid xs={12} md={3} item={true}>
                <img src="/images/availity-logo.png" />
            </Grid>
            <Grid xs={12} md={3} item={true}>
                <h1>Get Availity Access</h1>
                <p>Let our portal power your mission.</p>
                <form onSubmit={onSubmit}>

                    {fields && fieldsOrder.map((fieldName: string, index:number ) => {
                        const field = formFields[fieldName];
                        return <div key={index}>
                            <TextField
                                {...field}
                                error={errors[fieldName] !== undefined}
                                helperText={errors[fieldName] || ''}
                                margin="dense"
                                fullWidth={true}
                                onChange={onChange}
                                value={fields[field.name]}
                                variant="filled"
                            />
                        </div>;
                    })}

                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.btnSubmit}
                            disabled={formState && formState.submitDisabled}>
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            onClick={onReset}
                            color="secondary"
                            type="submit"
                            className={classes.btnReset}
                            disabled={formState && formState.resetDisabled}>
                            Reset
                        </Button>
                    </div>
                </form>
            </Grid>
        </Grid>
    )
}

export default Registration;
