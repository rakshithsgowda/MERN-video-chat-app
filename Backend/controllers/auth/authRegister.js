import User from '../../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
    const token = jwt.sign(
      {
        userId: user._id,
        mail,
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )

    // on validation and password hashing and storing user info - succesfull retrun details
    return res.status(201).send({
      userDetails: {
        mail: user.mail,
        username: user.username,
        token,
      },
    })
  } catch (error) {
    return res.status(500).send('Error occured. PLease try again')
  }
}
export default authRegister
