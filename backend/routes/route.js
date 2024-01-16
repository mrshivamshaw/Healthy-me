import express from 'express'

const router = express.Router()

import { login, signin } from '../controllers/auth.js'
import { checkAuth } from '../middllewares/auth.js'
import handelChallenge from '../controllers/challenge.js'
import fetchUserChallenges from '../controllers/getUserChallenges.js'
import { updateChallenge } from '../controllers/challengeComplete.js'
import user from '../models/user.js'
router.post('/signin',signin),
router.post('/login',login)
router.post('/checkAuth',checkAuth,(req, res) => {
    // This route is protected and will only be accessible if the token is valid
    res.status(200).json({ message: 'Access granted' });
  });
router.post('/createChallenge',handelChallenge)
router.post('/challengeCompleted',updateChallenge)
router.get('/userchallenge/:id',fetchUserChallenges)
router.get('/getAllUser', async (req, res) => {
  try {
    const users = await user.find({}).exec();
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message
    });
  }
});


export default router