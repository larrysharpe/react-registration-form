export type TFormField = {
    label: string,
    type?: string,
    validations?: string[]
}

export interface IFormFields {
    email: TFormField;
    firstName: TFormField;
    lastName: TFormField;
    npi: TFormField;
    addressLine1:  TFormField;
    addressLine2:  TFormField;
    city:  TFormField;
    state:  TFormField;
    zip: TFormField;
    phone: TFormField;
    [key: string]: any;
}

export const formFields: IFormFields = {
    email: {
        label: "Email",
        validations: ['required', 'email']
    },
    firstName: {
        label: "First Name",
        validations: ['required']
    },
    lastName: {
        label: "Last Name",
        validations: ['required']
    },
    npi: {
        label: "NPI Number",
        type: "number",
        validations: ['required']
    },
    addressLine1: {
        label: "Business Address Line 1",
        validations: ['required']
    },
    addressLine2: {
        label: "Business Address Line 2",
    },
    city: {
        label: "City",
        validations: ['required']
    },
    state: {
        label: "State",
        validations: ['required']
    },
    zip: {
        label: "Zip Code",
        validations: ['required']
    },
    phone: {
        label: "Phone Number",
        validations: ['required']
    }
};

export const fieldsOrder = [
    'email',
    'firstName',
    'lastName',
    'npi',
    'addressLine1',
    'addressLine2',
    'city',
    'state',
    'zip',
    'phone'
]
