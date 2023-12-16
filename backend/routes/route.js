import express from 'express'

const router = express.Router()

import { login, signin } from '../controllers/auth.js'
import { checkAuth } from '../middllewares/auth.js'

router.post('/signin',signin),
router.post('/login',login)
router.post('/checkAuth',checkAuth,(req, res) => {
    // This route is protected and will only be accessible if the token is valid
    res.status(200).json({ message: 'Access granted' });
  });


export default router