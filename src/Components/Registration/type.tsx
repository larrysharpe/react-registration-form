export interface IRegistration {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    npi?: number | '';
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zip?: string;

    [key: string]: any;
}

export const defaultState: IRegistration = {
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
}
