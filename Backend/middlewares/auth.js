import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['authorization']

  if (!token) {
    return res.status(403).send('A token required for authentication')
  }
  try {
    token = token.replace(/^Bearer\s+/, '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    console.log('request passed from auth verifytoken')
  } catch (error) {
    return res.status(401).send('invalid token')
  }
  return next()
}

export default verifyToken
