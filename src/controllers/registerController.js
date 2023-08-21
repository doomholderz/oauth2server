const registerUser = require("../services/register")

const registerController = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    // sanitise user inputs

    // validate email and password exist

    // validate email as genuine email

    // validate if email is already in use for another account in users db
    await registerUser.registerUser(email, password)
        .then((result) => console.log(result))

}

module.exports = registerController