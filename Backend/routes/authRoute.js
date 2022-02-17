import express from 'express'

const router = express.Router()

import { authLogin, authRegister } from '../controllers/auth/index.js'

// register route
router.post('/register', authRegister)
// login route
router.post('/login', authLogin)

export default router
