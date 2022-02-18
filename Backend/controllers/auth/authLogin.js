import User from '../../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const authLogin = async (req, res) => {
  try {
    const { mail, password } = req.body
    if (!mail || !password) {
      return res.status(404).send('enter all credentials')
    }
    const user = await User.findOne({ mail: mail.toLowerCase() })
    if (!user) {
      return res.status(404).send('missing info')
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      // send new token
      const token = jwt.sign(
        {
          userId: user._id,
          mail,
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      )

      return res.status(200).send({
        userDetails: {
          mail: user.mail,
          username: user.username,
          token,
        },
      })
    }
    return res.status(400).send('invalid credentials, try again')
  } catch (error) {
    res.status(500).send('something went wrong, please try again')
  }
}

export default authLogin
