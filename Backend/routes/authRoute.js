import express from 'express'

const router = express.Router()

// register route
router.post('/register', (req, res) => {
  console.log('hi from register')
  res.send('register route')
})
// login route
router.post('/login', (req, res) => {
  res.send('login route')
})

export default router
