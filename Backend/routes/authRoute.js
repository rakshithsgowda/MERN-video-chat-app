import express from 'express'
import { createValidator } from 'express-joi-validation'
import Joi from 'joi'

const router = express.Router()

import { authLogin, authRegister } from '../controllers/auth/index.js'

const validator = createValidator()

const registerSchema = Joi.object({
  name: Joi.string().required().min(3).max(8),
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

export default router
