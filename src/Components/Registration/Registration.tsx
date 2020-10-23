import React from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import TextField from "@material-ui/core/TextField/TextField";


const Registration = ()  => {
    const defaultState = {
        account: '',
        email: '',
        emailErrorText: '',
        password: '',
        confirmPassword: '',
        confirmPasswordErrorText: '',
        telNum: '',
    }

    const [state, setState] = useState(defaultState);

    const validateEmail = e => {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(e);
    }

    const getStyle = () => {
        return {
            height: 600,
            width: 350,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        }
    }

    const _onSubmit = e => {
        e.preventDefault()

        console.log("_onSubmit")
        if (state.emailErrorText == '' && state.confirmPasswordErrorText == '') {
            console.log("_onSubmit: state=", state)
        } else {
            console.log("has error, unable to submit")
        }
    }

    const _onReset = () => {
        console.log("_onReset")
        setState({
            account: '',
            email: '',
            emailErrorText: '',
            password: '',
            confirmPassword: '',
            confirmPasswordErrorText: '',
            telNum: '',
        })
    }

    const _handleAccountChange = (e, val) => {
        setState({account: val})
    }

    const _handlePasswordChange = (e, val) => {
        setState({password: val})
    }

    const _handleConfirmPasswordChange = (e, val) => {
        var errorText = ''
        if (val != state.password) {
            errorText = 'Passwords are not matched'
        }
        setState({confirmPassword: val, confirmPasswordErrorText: errorText})
    }

    const _handleEmailChange = (e, val) => {
        var errorText = ''
        if (!validateEmail(val)) {
            errorText = "Email Format Error"
        }
        setState({emailErrorText: errorText, email: val})
    }

    const _handleInputChange = (telNumber, selectedCountry) => {
        console.log('input changed. number: ', telNumber, 'selected country: ', selectedCountry);
    }

    const _handleInputBlur = (telNumber, selectedCountry) => {
        console.log('Focus off the ReactTelephoneInput component. Tel number entered is: ', telNumber, ' selected country is: ', selectedCountry);
        setState({telNum: telNumber})
    }


        return (
            <Paper style={getStyle()}>
                <p>Example of form validation built with React.</p>
                <form onSubmit={_onSubmit.bind(this)}>


                    <TextField
                        value={state.account}
                        onChange={_handleAccountChange.bind(this)}
                        hintText="Account"
                        floatingLabelText="Account"
                        floatingLabelFixed={true}
                    />
                    <br />


                    <TextField
                        value={state.password}
                        onChange={_handlePasswordChange.bind(this)}
                        hintText="Password"
                        floatingLabelText="Password"
                        floatingLabelFixed={true}
                        type="password"
                    />
                    <br />

                    <TextField
                        value={state.confirmPassword}
                        errorText={state.confirmPasswordErrorText}
                        onChange={_handleConfirmPasswordChange.bind(this)}
                        hintText="Confirmed Password"
                        floatingLabelText="Confirmed Password"
                        floatingLabelFixed={true}
                        type="password"
                    />
                    <br />

                    <TextField
                        value={state.email}
                        errorText={state.emailErrorText}
                        onChange={_handleEmailChange.bind(this)}
                        hintText="Email"
                        floatingLabelText="Email"
                        floatingLabelFixed={true}
                    />

                    <div>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={_onReset.bind(this)}>Reset</button>
                    </div>
                </form>
            </Paper>
        )
}

export default Registration;
