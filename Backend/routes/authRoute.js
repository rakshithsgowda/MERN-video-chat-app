import express from 'express'
import { createValidator } from 'express-joi-validation'
import Joi from 'joi'

const router = express.Router()

import { authLogin, authRegister } from '../controllers/auth/index.js'
import auth from '../middlewares/auth.js'

const validator = createValidator()

const registerSchema = Joi.object({
  username: Joi.string().required().min(3).max(8),
  mail: Joi.string().email().required(),
  password: Joi.string().required().min(3).max(8),
})
const loginSchema = Joi.object({
  // name: Joi.string().required().min(3).max(8),
  mail: Joi.string().email().required(),
  password: Joi.string().required().min(3).max(8),
})

// ----------------------------------------------------------------------------
// register route
// ----------------------------------------------------------------------------
router.post('/register', validator.body(registerSchema), authRegister)

// ----------------------------------------------------------------------------
// login route
// ----------------------------------------------------------------------------
router.post('/login', validator.body(loginSchema), authLogin)

// ----------------------------------------------------------------------------
// test auth token
// ----------------------------------------------------------------------------
router.get('/test', auth, (req, res) => {
  res.status(200).send('hi from auth test')
})

export default router
