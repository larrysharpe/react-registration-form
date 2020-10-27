import { createContext } from "react";

export interface IRegistrationContext {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    npi?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zip?: string;

    [key: string]: any;
};

export const RegistrationContextContextDefault: IRegistrationContext = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    npi: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: ''
};

const RegistrationContext = createContext<IRegistrationContext>(
    RegistrationContextContextDefault
);

export default RegistrationContext;
