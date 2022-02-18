import User from '../../models/user.js'
import bcrypt from 'bcryptjs'

const authRegister = async (req, res) => {
  try {
    const { username, password, mail } = req.body

    // check if the user exists
    const userExists = await User.exists({ mail: mail.toLowerCase() })
    if (userExists) {
      return res.status(409).send('user already exists')
    }

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10)

    // create a user documnt and save it in a database
    const user = await User.create({
      username,
      password: encryptedPassword,
      mail: mail.toLowerCase(),
    })
    // create JWT token and retrun it to the client
    const token = 'this is a fake token'

    // on validation and password hashing and storing user info - succesfull retrun details
    return res.status(201).send({
      userDeatils: {
        mail: user.mail,
        token,
        username: user.username,
      },
    })
  } catch (error) {
    return res.status(500).send('Error occured. PLease try again')
  }
}
export default authRegister
