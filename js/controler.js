const controler = {}
controler.register = (data) => {
    console.log(data.confirmpassword, data.password)

    if (data.firstName === '') {
        view.setErrorMessage('first-name-error', 'Please input your first name')
    }
    else {
        view.setErrorMessage('first-name-error', '')
    }
    if (data.lastName === '') {
        view.setErrorMessage('last-name-error', 'Please input your last name')
    }
    else {
        view.setErrorMessage('last-name-error', '')
    }
    if (data.firstName === '') {
        view.setErrorMessage('email-error', 'Please input your email')
    }
    else {
        view.setErrorMessage('email-error', '')
    }
    if (data.password === '') {
        view.setErrorMessage('password-error', 'Please input your password')
    }
    else {
        view.setErrorMessage('password-error', '')
    }
    if (data.confirmPassword === '') {
        view.setErrorMessage('confirm-password-error', 'Please input your password')
    }
    else {
        view.setErrorMessage('confirm-password-error', '')
    }
    if (data.confirmPassword === '') {
        view.setErrorMessage('confirm-password-error', 'Please input your password')
    }
    else if (data.confirmPassword !== data.password) {
        view.setErrorMessage('confirm-password-error', "Your password doesn't match" + data.confirmpassword + ' ' + data.password)
    }
    else { view.setErrorMessage('confirm-password-error', "") }
    if (data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.password !== '' && data.password === data.confirmPassword) {
        model.register(data)
        console.log(123);
    }
}
controler.login = ({ email, password }) => {
    view.setErrorMessage('email-error', email === '' ? 'Please input your email' : '')
    view.setErrorMessage('password-error', password === '' ? 'Please input your password' : '')
    if (email !== '' && password !== '') {
        model.login({email, password})
    }
}