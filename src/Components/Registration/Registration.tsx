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

    const { fields, setFields, formState, errors, touched, setTouched } = useContext(RegistrationContext);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setShowSuccessMsg(true);
        /// id make api call here and update the state with the return
    }

    const onReset = (): void => {
        setFields((prev:any) => ({ ...defaultState }))
    }

    const goBack = () => {
        setShowSuccessMsg(false);
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        const {value, name} = e.target;
        setFields((prev: any) => ({
            ...prev,
            [name]: value
        }));
    }

    const onBlur = (e: any): void => {
        const {name} = e.currentTarget;
        setTouched((prev: any) => ({
            ...prev,
            [name]: true
        }));
    }

    const hasError = (field: string): boolean => touched[field] && errors[field] !== undefined;

    return (
        <Grid container={true} justify="center">
            <Grid xs={12} md={3} item={true}>
                <img src="/images/availity-logo.png" />
            </Grid>
            <Grid xs={12} md={3} item={true}>
                <h1>Get Availity Access</h1>

                { showSuccessMsg ? <>
                    <h2>Thank You!</h2>
                    <p>Your registration has been received please check your email for next steps.</p>
                        <Button
                            variant="contained"
                            color="primary"
                            type="button"
                            onClick={goBack}
                            className={classes.btnSubmit}>
                            Go Back
                        </Button>
                </>
                    :
                <>
                    <p>Let our portal power your mission.</p>
                    <small>All Fields Are Required.</small>
                    <form onSubmit={onSubmit}>

                        {fields && fieldsOrder.map((fieldName: string, index:number ) => {
                            const field = formFields[fieldName];
                            return <div key={index}>
                                <TextField
                                    {...field}
                                    name={fieldName}
                                    error={hasError(fieldName)}
                                    helperText={hasError(fieldName) ? errors[fieldName] : ''}
                                    margin="dense"
                                    fullWidth={true}
                                    onChange={onChange}
                                    onBlur={onBlur}
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
                                disabled={errors && Object.keys(errors).length > 0}>
                                Submit
                            </Button>
                            <Button
                                variant="contained"
                                onClick={onReset}
                                color="secondary"
                                type="button"
                                className={classes.btnReset}
                                disabled={formState && formState.resetDisabled}>
                                Reset
                            </Button>
                        </div>
                    </form>
                </>}
            </Grid>
        </Grid>
    )
}

export default Registration;
