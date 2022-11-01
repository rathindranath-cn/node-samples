// validate email
export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

// validate password
export const validatePassword = (evnt) => {
    const passwordInputValue = evnt.trim();

    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;
    const passwordLength = passwordInputValue.length;
    const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
    const digitsPassword = digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword = minLengthRegExp.test(passwordInputValue);
    let errMsg = "";
    if (passwordLength === 0) {
        errMsg = "Password is empty";
    } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
    } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
    } else if (!digitsPassword) {
        errMsg = "At least one digit";
    } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
    } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
    } else {
        errMsg = "";
    }
    return errMsg;
}