import express from 'express'

const router = express.Router()

import { login, signin } from '../controllers/auth.js'

router.post('/signin',signin)
router.post('/login',login)


export default router