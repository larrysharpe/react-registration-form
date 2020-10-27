import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import RegistrationContext, {IRegistrationContext, RegistrationContextContextDefault} from "./registration.context";

import {formFields} from "./config";

import validations from "./validations";

interface IProps {
    children?: React.ReactNode;
}

const RegistrationContextProvider: FC<IProps> = props => {
    const { children } = props;
    const [fields, setFields] = useState<IRegistrationContext>(RegistrationContextContextDefault);
    const [formState, setFormState] = useState({ resetDisabled: true, submitDisabled: true });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = () => {
        let resetDisabled = true;
        if (fields) {
            Object.keys(fields).forEach(key => {
                // see if any fields have values, if so enable the reset btn
                if (resetDisabled && ![null, '', undefined].includes(fields[key])) {
                    resetDisabled = false;
                }
            });
            setFormState( prev => ({...prev, resetDisabled}))
        }

        // actual field validation goes here in conjunction with validations.tsx
        const errs:any  = {};   // started using any for time sake
        Object.keys(fields).forEach( field => {
            if (formFields[field] && formFields[field].validations) {
                formFields[field].validations.forEach( (validation:any) => {
                    if (!validations[validation].validationFn(fields[field])) {
                        errs[field] = validations[validation].errorMessage;
                    }
                });
            }
        })

        setErrors(errs);
    }

    useEffect( () => {
        validate()
    }, [fields]);

    return (
        <RegistrationContext.Provider
            value={{ fields, setFields, formState, errors, touched, setTouched }}
        >
            {children}
        </RegistrationContext.Provider>
    );
};

export default RegistrationContextProvider;
