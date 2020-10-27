const email = {
    validationFn: (value: string): boolean => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    },
    errorMessage: 'This must be a valid email'
}
const required = {
    validationFn: (value: any): boolean => ![undefined, null, ""].includes(value),
    errorMessage: 'This is required'
}

const out: any = {
    email,
    required
};

export default out;
