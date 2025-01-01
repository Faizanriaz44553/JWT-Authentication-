const registerController = (req, res) => {
    res.send('register')
}
const loginController = (req, res) => {
    res.send('login')
}
const logoutController = (req, res) => {
    res.send('logout')
}
const forgetController = (req, res) => {
    res.send('forget password')
}


export { registerController, loginController, logoutController, forgetController }