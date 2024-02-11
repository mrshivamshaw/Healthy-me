import express from 'express';
import { login, signin } from '../controllers/auth.js';
import handelChallenge from '../controllers/challenge.js';
import fetchUserChallenges from '../controllers/getUserChallenges.js';
import { updateChallenge } from '../controllers/challengeComplete.js';
// import multer from 'multer';
import user from '../models/user.js';
// import clinicController from '../controllers/clinic.js';
import { checkAuth } from '../middllewares/auth.js';

const router = express.Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

router.post('/signin', signin);
router.post('/login', login);

router.post('/checkAuth', checkAuth, (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

router.post('/createChallenge', handelChallenge);
router.post('/challengeCompleted', updateChallenge);
router.get('/userchallenge/:id', fetchUserChallenges);

router.get('/getAllUser', async (req, res) => {
    try {
        const users = await user.find({}).exec();
        const sortedData = users.sort((a, b) => b.totalPoint - a.totalPoint);
        res.status(200).json({
            success: true,
            data: sortedData
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        });
    }
});

router.get('/getUser/:id', async(req,res) => {
    try {
        const {id} = req.body;
        const data = await user.findById(id);
        return res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error
        })
    }
})

router.post('/updateReward/:id', async(req,res) =>{
    try {
        const userId = req.params.id;
        const data = await user.findByIdAndUpdate(userId, {
            $push: {
                rewards: req.body.reward
            }
        })
        return res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error
        })
    }
})

// router.post('/clinicDatails', upload.single('file'), clinicController);

export default router;
